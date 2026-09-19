import { Typography } from '@components/Typography';
import { COLUMN_CLASSES, TITLE_CLASSES } from './FooterColumn.styles';
import type { FooterColumnProps } from './FooterColumn.types';

/** A titled group of footer content - links, opening hours, contact details. */
const FooterColumn = ({ children, title }: FooterColumnProps) => (
  <div className={COLUMN_CLASSES}>
    <Typography as="h2" variant="subtitle2" colour="secondary" className={TITLE_CLASSES}>
      {title}
    </Typography>
    {children}
  </div>
);

export default FooterColumn;
