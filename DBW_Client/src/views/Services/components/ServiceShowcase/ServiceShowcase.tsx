import { useId, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { faGem } from '@awesome.me/kit-c05db0aa61/icons/sharp/light';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { TREATMENTS } from '@constants/services';
import { formatPrice } from '@utils/pricing';
import { Typography } from '@components/Typography';
import { ServicePricing } from '../ServicePricing';
import {
  ABOUT_BLOCK_CLASSES,
  getTabClassName,
  HIGHLIGHT_ITEM_CLASSES,
  HIGHLIGHT_MARKER_CLASSES,
  HIGHLIGHTS_CLASSES,
  IMAGE_BLOCK_CLASSES,
  IMAGE_CLASSES,
  IMAGE_FADE_CLASSES,
  INDICATOR_TRANSITION,
  PANEL_ANIMATE,
  PANEL_CLASSES,
  PANEL_EXIT,
  PANEL_INITIAL,
  PANEL_TRANSITION,
  SHOWCASE_CLASSES,
  TAB_INDICATOR_CLASSES,
  TAB_LABEL_CLASSES,
  TABLIST_CLASSES
} from './ServiceShowcase.styles';
import type { ServiceShowcaseProps } from './ServiceShowcase.types';

/**
 * Every treatment as a selectable tab, with the selected one's photo, write-up and
 * pricing alongside. Follows the WAI-ARIA tabs pattern - roving `tabIndex`, arrow keys
 * (either axis, since the list is vertical on desktop and horizontal on mobile) plus
 * `Home`/`End`, with selection following focus.
 *
 * Pass `treatmentId` to control the selection (the services route drives it from the
 * `?treatment=` query param); left out, it keeps its own state, starting on the first treatment.
 */
const ServiceShowcase = ({ onTreatmentChange, treatmentId }: ServiceShowcaseProps) => {
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [internalId, setInternalId] = useState(TREATMENTS[0].id);
  const activeId = treatmentId ?? internalId;

  const activeIndex = Math.max(
    0,
    TREATMENTS.findIndex(({ id }) => id === activeId)
  );
  const active = TREATMENTS[activeIndex];
  const panelId = `${baseId}-panel`;
  const tabId = (id: string) => `${baseId}-tab-${id}`;

  const selectTreatment = (id: string) => {
    setInternalId(id);
    onTreatmentChange?.(id);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const count = TREATMENTS.length;
    const targets: Record<string, number> = {
      ArrowDown: (activeIndex + 1) % count,
      ArrowRight: (activeIndex + 1) % count,
      ArrowUp: (activeIndex - 1 + count) % count,
      ArrowLeft: (activeIndex - 1 + count) % count,
      Home: 0,
      End: count - 1
    };
    const next = targets[event.key];
    if (next === undefined) return;

    event.preventDefault();
    selectTreatment(TREATMENTS[next].id);
    tabRefs.current[next]?.focus();
  };

  const lowestPrice = Math.min(...active.options.map(({ price }) => price));

  return (
    <MotionConfig reducedMotion="user">
      <div className={SHOWCASE_CLASSES}>
        <div
          role="tablist"
          aria-label="Treatments"
          aria-orientation="vertical"
          className={TABLIST_CLASSES}
          onKeyDown={handleKeyDown}
        >
          {TREATMENTS.map((treatment, index) => {
            const isActive = treatment.id === active.id;

            return (
              <button
                key={treatment.id}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={tabId(treatment.id)}
                aria-selected={isActive}
                aria-controls={isActive ? panelId : undefined}
                tabIndex={isActive ? 0 : -1}
                className={getTabClassName(isActive)}
                onClick={() => selectTreatment(treatment.id)}
              >
                {isActive && (
                  <motion.span
                    aria-hidden
                    layoutId={`${baseId}-indicator`}
                    className={TAB_INDICATOR_CLASSES}
                    transition={INDICATOR_TRANSITION}
                  />
                )}
                <span className={TAB_LABEL_CLASSES}>{treatment.title}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            role="tabpanel"
            id={panelId}
            aria-labelledby={tabId(active.id)}
            className={PANEL_CLASSES}
            initial={PANEL_INITIAL}
            animate={PANEL_ANIMATE}
            exit={PANEL_EXIT}
            transition={PANEL_TRANSITION}
          >
            <div className={IMAGE_BLOCK_CLASSES}>
              <img
                src={`/${active.imageName}`}
                alt={`${active.title} treatment`}
                decoding="async"
                className={IMAGE_CLASSES}
              />
              <div className={IMAGE_FADE_CLASSES} />
            </div>

            <div className={ABOUT_BLOCK_CLASSES}>
              <Typography variant="subtitle2" colour="secondary" className="tracking-[0.3em] uppercase">
                From {formatPrice(lowestPrice)}
              </Typography>
              <Typography as="h2" variant="h3">
                {active.title}
              </Typography>
              {active.about.map((paragraph) => (
                <Typography key={paragraph} variant="body1" colour="secondary" textAlign="justify">
                  {paragraph}
                </Typography>
              ))}
              <ul className={HIGHLIGHTS_CLASSES}>
                {active.highlights.map((highlight) => (
                  <li key={highlight} className={HIGHLIGHT_ITEM_CLASSES}>
                    <FontAwesomeIcon icon={faGem} className={HIGHLIGHT_MARKER_CLASSES} />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <ServicePricing treatment={active} />
          </motion.div>
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
};

export default ServiceShowcase;
