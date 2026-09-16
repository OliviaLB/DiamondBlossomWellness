import { getCardFooterClassName } from './CardFooter.styles';
import type { CardFooterProps } from './CardFooter.types';

/** `Card`'s action row - separated from whatever precedes it by a top divider, typically holding one or more `Button`s. */
export const CardFooter = ({ children, paddingX = '4x' }: CardFooterProps) => (
  <div className={getCardFooterClassName({ paddingX })}>{children}</div>
);
