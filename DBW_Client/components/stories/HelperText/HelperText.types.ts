export interface HelperTextProps {
  /** `data-testid` applied to the root element, for test/automation targeting. */
  'data-testid'?: string;
  /** If set, rendered instead of `helperText`, in the `danger` tone - the same "error wins" precedence `Input` uses. */
  errorMessage?: string;
  /** Supporting text, in a muted tone - hidden whenever `errorMessage` is set. */
  helperText?: string;
  id?: string;
}
