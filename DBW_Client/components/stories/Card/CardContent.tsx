import { getCardContentClassName } from './CardContent.styles';
import type { CardContentProps } from './CardContent.types';

/** `Card`'s main body slot - plain padded text/content. No implicit `Typography` wrapping, since `children` may be anything. */
const CardContent = ({ children, paddingX = '4x', paddingY = '2x' }: CardContentProps) => (
  <div className={getCardContentClassName({ paddingX, paddingY })}>{children}</div>
);
export default CardContent;
