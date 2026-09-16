import Typography from '../Typography/Typography';
import type { HelperTextProps } from './HelperText.types';

/**
 * Supporting text for a form field, rendered beneath it - `errorMessage`,
 * when set, takes over from `helperText` and switches to the `danger`
 * tone. Renders nothing when neither is set, so a consumer (`Input`, e.g.)
 * can pass both through unconditionally rather than branching itself.
 */
export const HelperText = ({ 'data-testid': dataTestId, errorMessage, helperText, id }: HelperTextProps) => {
  const message = errorMessage || helperText;

  if (!message) return null;

  return (
    <Typography
      as="p"
      id={id}
      data-testid={dataTestId}
      variant="body2"
      colour={errorMessage ? 'danger' : 'secondary'}
      className="mt-1.5"
    >
      {message}
    </Typography>
  );
};
