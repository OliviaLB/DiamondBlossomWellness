import { Typography } from '../Typography';
import { getCardHeaderClassName } from './CardHeader.styles';
import type { CardHeaderProps } from './CardHeader.types';

/** `Card`'s title/subtitle slot - typically the first (or first after media) child, directly above `CardContent`. */
const CardHeader = ({ paddingX = '4x', paddingY = '2x', subtitle, title }: CardHeaderProps) => (
  <div className={getCardHeaderClassName({ paddingX, paddingY })}>
    <Typography variant="h5">{title}</Typography>
    {subtitle && (
      <Typography variant="subtitle2" colour="muted">
        {subtitle}
      </Typography>
    )}
  </div>
);
export default CardHeader;
