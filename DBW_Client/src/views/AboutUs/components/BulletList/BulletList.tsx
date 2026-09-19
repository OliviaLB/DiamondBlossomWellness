import { faGem } from '@awesome.me/kit-c05db0aa61/icons/sharp/light';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getListClassName, ITEM_CLASSES, MARKER_CLASSES } from './BulletList.styles';
import type { BulletListProps } from './BulletList.types';

/** A list with a diamond for each bullet. */
const BulletList = ({ columns = 1, items }: BulletListProps) => (
  <ul className={getListClassName(columns)}>
    {items.map((item) => (
      <li key={item} className={ITEM_CLASSES}>
        <FontAwesomeIcon icon={faGem} className={MARKER_CLASSES} />
        {item}
      </li>
    ))}
  </ul>
);

export default BulletList;
