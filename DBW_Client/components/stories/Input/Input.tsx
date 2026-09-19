import { useId } from 'react';
import { HelperText } from '../HelperText';
import { Typography } from '../Typography';
import { END_ICON_CLASSES, getInputClassName, START_ICON_CLASSES } from './Input.styles';
import type { InputProps } from './Input.types';

/**
 * Labelled text field - `label` (with a `*` when `required`) above the
 * input, `helperText`/`errorMessage` below it (`errorMessage` takes over
 * whenever it's set, both replacing `helperText` and flipping the field's
 * border to `danger`). `startIcon`/`endIcon` sit inside the field itself.
 *
 * Uses `useId()` to link `label`'s `htmlFor` and the helper/error text's
 * `aria-describedby` to the `<input>` even when `id` is omitted.
 */
const Input = ({
  autoComplete,
  'data-testid': dataTestId,
  defaultValue,
  disabled = false,
  endIcon,
  errorMessage,
  fullWidth = false,
  helperText,
  id,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  readOnly = false,
  required = false,
  size = 'md',
  startIcon,
  type = 'text',
  value
}: InputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const helperId = `${inputId}-helper`;
  const helperMessage = errorMessage || helperText;

  return (
    <div className={fullWidth ? 'w-full' : 'inline-flex flex-col'}>
      {label && (
        <label htmlFor={inputId} className="mb-1.5 inline-flex items-center gap-1">
          <Typography as="span" variant="label">
            {label}
          </Typography>
          {required && (
            <Typography as="span" variant="label" colour="danger" aria-hidden>
              *
            </Typography>
          )}
        </label>
      )}
      <div className="relative flex items-center">
        {startIcon && <span className={START_ICON_CLASSES}>{startIcon}</span>}
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          autoComplete={autoComplete}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-invalid={Boolean(errorMessage)}
          aria-describedby={helperMessage ? helperId : undefined}
          data-testid={dataTestId}
          className={getInputClassName({ endIcon, errorMessage, size, startIcon })}
        />
        {endIcon && <span className={END_ICON_CLASSES}>{endIcon}</span>}
      </div>
      <HelperText id={helperId} helperText={helperText} errorMessage={errorMessage} />
    </div>
  );
};

export default Input;
