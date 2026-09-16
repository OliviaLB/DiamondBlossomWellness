import clsx from 'clsx';
import type { TextColour } from '../../common.styles';
import type { AlertSeverity } from './Alert.types';

/**
 * `success`/`warning`/`danger` reuse the exact "subtle bg / edge border"
 * tokens `HomeView`'s own status badges and `Chip` already use. `info` has
 * no ready-made triad, so it builds the same shape of treatment from the
 * `secondary` brand scale directly - a translucent tint rather than a flat
 * fill, matching `Chip`'s own `primary`/`secondary`/`tertiary` recipe.
 */
export const ALERT_SEVERITY: Record<AlertSeverity, { container: string; icon: string }> = {
  info: { container: 'border-secondary-400/40 bg-secondary-400/10', icon: 'text-secondary-400' },
  success: { container: 'border-success-edge bg-success-subtle', icon: 'text-success-ink' },
  warning: { container: 'border-warning-edge bg-warning-subtle', icon: 'text-warning-ink' },
  danger: { container: 'border-danger-edge bg-danger-subtle', icon: 'text-danger-ink' }
};

/**
 * `title`'s `Typography` `colour`, drawn from its own existing token set
 * rather than a raw className - `info` maps to `link` (`--ink-link` is
 * already `--color-secondary-400`), so nothing here ever has to fight
 * `Typography`'s own default `colour` class for the same element.
 */
export const ALERT_TITLE_COLOUR: Record<AlertSeverity, TextColour> = {
  info: 'link',
  success: 'success',
  warning: 'warning',
  danger: 'danger'
};

export const getAlertClassName = (severity: AlertSeverity): string =>
  clsx('flex items-start gap-3 rounded-xl border px-4 py-3', ALERT_SEVERITY[severity].container);

/** The dismiss button - a plain, generic small icon button rather than a reuse of `Chip`'s own, since the two are only coincidentally similar in size. */
export const CLOSE_BUTTON_CLASSES =
  'inline-flex shrink-0 items-center justify-center rounded-full p-1 text-current outline-2 outline-offset-1 outline-transparent transition-[outline-offset,outline-color,opacity] duration-200 ease-out hover:opacity-70 focus-visible:outline-secondary-400 focus-visible:outline-offset-2';
