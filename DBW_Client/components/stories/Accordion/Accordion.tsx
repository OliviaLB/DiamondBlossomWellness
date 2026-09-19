import { useId, useState } from 'react';
import { faChevronDown } from '@awesome.me/kit-c05db0aa61/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { Typography } from '../Typography';
import { getAccordionClassName, PANEL_CONTENT_CLASSES, TRIGGER_CLASSES } from './Accordion.styles';
import type { AccordionProps } from './Accordion.types';

/**
 * Expand/collapse list of headered panels. Each item's height animates via
 * Motion's `layout` prop rather than manually tweening `height`, per
 * Motion's own accordion pattern (see the `LayoutGroup` docs) -
 * `AnimatePresence` is layered on top purely for the panel's own fade in/
 * out, and `LayoutGroup` coordinates every item's resize so siblings reflow
 * together instead of jumping independently.
 *
 * `mode="single"` (default) keeps at most one item open, closing whichever
 * was open when another is triggered; `mode="multiple"` lets every item
 * open/close independently. Works both controlled (`openIds`/
 * `onOpenIdsChange`) and uncontrolled (`defaultOpenIds`).
 */
const Accordion = ({
  borderRadius = 'lg',
  'data-testid': dataTestId,
  defaultOpenIds = [],
  id,
  items,
  mode = 'single',
  onOpenIdsChange,
  openIds: controlledOpenIds
}: AccordionProps) => {
  const [uncontrolledOpenIds, setUncontrolledOpenIds] = useState(defaultOpenIds);
  const openIds = controlledOpenIds ?? uncontrolledOpenIds;
  const baseId = useId();

  const toggle = (itemId: string) => {
    const isOpen = openIds.includes(itemId);
    const next =
      mode === 'single'
        ? isOpen
          ? []
          : [itemId]
        : isOpen
          ? openIds.filter((openId) => openId !== itemId)
          : [...openIds, itemId];

    setUncontrolledOpenIds(next);
    onOpenIdsChange?.(next);
  };

  return (
    <LayoutGroup id={id ?? baseId}>
      <div id={id} data-testid={dataTestId} className={getAccordionClassName({ borderRadius })}>
        {items.map((item) => {
          const isOpen = openIds.includes(item.id);
          const triggerId = `${baseId}-${item.id}-trigger`;
          const panelId = `${baseId}-${item.id}-panel`;

          return (
            <motion.div layout key={item.id}>
              <motion.button
                layout
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                disabled={item.disabled}
                onClick={() => toggle(item.id)}
                className={TRIGGER_CLASSES}
              >
                <Typography as="span" variant="subtitle1">
                  {item.header}
                </Typography>
                <motion.span
                  aria-hidden
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="text-ink-muted"
                >
                  <FontAwesomeIcon icon={faChevronDown} />
                </motion.span>
              </motion.button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    layout
                    key="panel"
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <div className={PANEL_CONTENT_CLASSES}>{item.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </LayoutGroup>
  );
};

export default Accordion;
