import {
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
  faTriangleExclamation,
  faXmark
} from '@awesome.me/kit-c05db0aa61/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '../Typography/Typography';
import { ALERT_SEVERITY, ALERT_TITLE_COLOUR, CLOSE_BUTTON_CLASSES, getAlertClassName } from './Alert.styles';
import type { AlertProps, AlertSeverity } from './Alert.types';

const DEFAULT_ICON: Record<AlertSeverity, typeof faCircleInfo> = {
  info: faCircleInfo,
  success: faCircleCheck,
  warning: faTriangleExclamation,
  danger: faCircleExclamation
};

/**
 * Prominent status banner - `title` (coloured to match `severity`) above
 * `children` (plain, readable body text), a severity-appropriate icon on
 * the left, and an optional dismiss button on the right when `onClose` is
 * given. `role="alert"` announces it to assistive tech as soon as it
 * mounts, so it's meant for messages that actually need that, not a
 * decorative aside.
 */
export const Alert = ({
  children,
  'data-testid': dataTestId,
  icon,
  id,
  onClose,
  severity = 'info',
  title
}: AlertProps) => {
  const resolvedIcon = icon === undefined ? <FontAwesomeIcon icon={DEFAULT_ICON[severity]} /> : icon;

  return (
    <div id={id} data-testid={dataTestId} role="alert" className={getAlertClassName(severity)}>
      {resolvedIcon && <span className={ALERT_SEVERITY[severity].icon}>{resolvedIcon}</span>}
      <div className="flex-1">
        {title && (
          <Typography as="p" variant="subtitle1" colour={ALERT_TITLE_COLOUR[severity]}>
            {title}
          </Typography>
        )}
        {children && (
          <Typography as="p" variant="body2" colour="secondary">
            {children}
          </Typography>
        )}
      </div>
      {onClose && (
        <button type="button" aria-label="Dismiss" onClick={onClose} className={CLOSE_BUTTON_CLASSES}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}
    </div>
  );
};
