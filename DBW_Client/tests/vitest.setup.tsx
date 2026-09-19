import { vi } from 'vitest';
import React from 'react';

const mockFramerMotion = vi.hoisted(() => async () => {
  /**
   * Minimal stand-in for a Motion `MotionValue` - just enough of `.get()`/
   * `.set()`/`.on()` for `useMotionValue`/`useMotionValueEvent`/`animate`
   * below to cooperate, without pulling in real Motion (which needs a real
   * browser animation loop jsdom doesn't provide).
   */
  class FakeMotionValue<T> {
    private value: T;
    private readonly listeners = new Set<(value: T) => void>();

    constructor(initial: T) {
      this.value = initial;
    }

    get() {
      return this.value;
    }

    set(next: T) {
      this.value = next;
      this.listeners.forEach((listener) => listener(next));
    }

    on(_event: 'change', listener: (value: T) => void) {
      this.listeners.add(listener);
      return () => this.listeners.delete(listener);
    }
  }

  const motionOnlyPropNames = new Set([
    'animate',
    'custom',
    'drag',
    'dragConstraints',
    'dragElastic',
    'exit',
    'initial',
    'layout',
    'layoutId',
    'transition',
    'variants',
    'viewport',
    'whileFocus',
    'whileHover',
    'whileInView',
    'whileTap'
  ]);

  const stripMotionProps = (props: Record<string, unknown>) =>
    Object.fromEntries(Object.entries(props).filter(([key]) => !motionOnlyPropNames.has(key)));

  const createMotionComponent = (tag: string) =>
    React.forwardRef<HTMLElement, Record<string, unknown>>(({ children, ...props }, ref) =>
      React.createElement(tag, {
        ...stripMotionProps(props),
        ref,
        children
      })
    );

  const motionComponentCache = new Map<string, React.ComponentType<Record<string, unknown>>>();

  const motion = new Proxy<Record<string, React.ComponentType<Record<string, unknown>>>>(
    {},
    {
      get: (_, tag: string) => {
        if (!motionComponentCache.has(tag)) {
          motionComponentCache.set(tag, createMotionComponent(tag));
        }

        return motionComponentCache.get(tag);
      }
    }
  );

  return {
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    // Pass-through wrappers - real ones only configure/coordinate animation, which jsdom doesn't run.
    LayoutGroup: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    MotionConfig: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    motion,
    // Every animated component (Button, BorderBeam, Modal, Node, ...) reads
    // this to decide whether to animate at all - without a mock, importing
    // it as `undefined` and calling it throws the moment such a component
    // renders under jsdom. `false` mirrors a real browser with no
    // `prefers-reduced-motion` set, which is what these tests assume.
    useReducedMotion: () => false,
    // `BorderBeam` etc. gate their running animation on this (real signature:
    // `useInView(ref, options?)`) - `true` renders as already-in-view, since
    // jsdom has no real viewport/IntersectionObserver for it to react to.
    useInView: () => true,
    // `RouteLine` (map distance estimate) animates a plain value rather than
    // a DOM node via these three - `useMotionValue` persists the same
    // `FakeMotionValue` across re-renders (like the real hook's internal
    // `useRef`), `useMotionValueEvent` subscribes/unsubscribes a listener to
    // it over the component's lifecycle, and `animate` (this file only ever
    // calls it with a motion value, not a selector/DOM target) skips
    // straight to the end value rather than tweening frame-by-frame - jsdom
    // has no real animation loop to tween against anyway, and these tests
    // only care about the settled result.
    useMotionValue: (initial: unknown) => {
      const ref = React.useRef<FakeMotionValue<unknown> | null>(null);
      if (!ref.current) ref.current = new FakeMotionValue(initial);
      return ref.current;
    },
    useMotionValueEvent: (value: FakeMotionValue<unknown>, event: 'change', callback: (value: unknown) => void) => {
      React.useEffect(() => {
        const unsubscribe = value.on(event, callback);
        return () => {
          unsubscribe();
        };
      }, [value, event, callback]);
    },
    animate: (value: unknown, target: unknown) => {
      if (value instanceof FakeMotionValue) value.set(target);
      return { stop: () => {} };
    }
  };
});

// Components should import from 'motion/react' (see Client/src/components/types.ts),
// but both specifiers are mocked here in case anything still imports the legacy path.
vi.mock('motion/react', mockFramerMotion);
vi.mock('framer-motion', mockFramerMotion);
