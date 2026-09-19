import { useEffect } from 'react';
import { faXmark } from '@awesome.me/kit-c05db0aa61/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'motion/react';
import { IconButton } from '../IconButton';
import { BACKDROP_CLASSES, CLOSE_BUTTON_WRAPPER_CLASSES, getPanelClassName, getPanelOffscreenX } from './Drawer.styles';
import type { DrawerProps } from './Drawer.types';

/**
 * Off-canvas panel that slides in from `side` (default `'right'`) over a
 * scrim backdrop - clicking the backdrop, pressing Escape, or the built-in
 * close button all call `onClose`. Locks page scroll while open, and renders
 * as `role="dialog"`/`aria-modal`, labelled by the required `aria-label`.
 */
const Drawer = ({
  'aria-label': ariaLabel,
  children,
  'data-testid': dataTestId,
  id,
  onClose,
  open,
  side = 'right'
}: DrawerProps) => {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  const offscreenX = getPanelOffscreenX(side);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            aria-hidden
            className={BACKDROP_CLASSES}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          />
          <motion.div
            key="panel"
            id={id}
            data-testid={dataTestId}
            role="dialog"
            aria-modal
            aria-label={ariaLabel}
            className={getPanelClassName(side)}
            initial={{ x: offscreenX }}
            animate={{ x: 0 }}
            exit={{ x: offscreenX }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className={CLOSE_BUTTON_WRAPPER_CLASSES}>
              <IconButton
                aria-label="Close menu"
                variant="text"
                tone="secondary"
                size="sm"
                icon={<FontAwesomeIcon icon={faXmark} />}
                onClick={onClose}
              />
            </div>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
