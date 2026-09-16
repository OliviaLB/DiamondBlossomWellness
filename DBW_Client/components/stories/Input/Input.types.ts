import type { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputType = 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number';

export interface InputProps {
  /** Native `autocomplete` attribute. */
  autoComplete?: string;
  /** `data-testid` applied to the `<input>` element, for test/automation targeting. */
  'data-testid'?: string;
  /** Initial value, for uncontrolled usage. */
  defaultValue?: string;
  /**
   * If `true`, disables the input and dims it.
   * @default false
   */
  disabled?: boolean;
  /** Element placed inside the field, on the right - an icon, typically. */
  endIcon?: ReactNode;
  /**
   * If set, the field renders in its error state (danger border) and this
   * replaces `helperText` beneath it.
   */
  errorMessage?: string;
  /**
   * If `true`, the field takes up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /** Supporting text rendered beneath the field, hidden whenever `errorMessage` is set. */
  helperText?: string;
  /** `id` applied to the `<input>` element - auto-generated when omitted, so `label`'s `htmlFor` always resolves. */
  id?: string;
  /** Field label, rendered above the input. */
  label?: string;
  name?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  /**
   * If `true`, the field's value can't be edited but is still focusable and
   * submitted with its form - unlike `disabled`.
   * @default false
   */
  readOnly?: boolean;
  /**
   * If `true`, marks the field as required and shows a `*` next to `label`.
   * @default false
   */
  required?: boolean;
  /**
   * Field size.
   * @default 'md'
   */
  size?: InputSize;
  /** Element placed inside the field, on the left - an icon, typically. */
  startIcon?: ReactNode;
  /**
   * Native `input` `type`.
   * @default 'text'
   */
  type?: InputType;
  /** Current value, for controlled usage - pair with `onChange`. */
  value?: string;
}
