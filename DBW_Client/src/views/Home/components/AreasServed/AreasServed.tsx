import { faGem } from '@awesome.me/kit-c05db0aa61/icons/sharp/light';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { REGION, SERVICE_AREAS, SERVICE_AREAS_TEXT } from '@constants/business';
import { Typography } from '@components/Typography';
import { AREA_CLASSES, AREA_MARKER_CLASSES, HEADER_CLASSES, LIST_CLASSES, SECTION_CLASSES } from './AreasServed.styles';

/** Where clients come from - plain on-page text naming each town, which is what local search results are matched against. */
const AreasServed = () => (
  <section className={SECTION_CLASSES} aria-labelledby="areas-served-heading">
    <div className={HEADER_CLASSES}>
      <Typography variant="subtitle2" colour="secondary" textAlign="center" className="tracking-[0.3em] uppercase">
        Where we work
      </Typography>
      <Typography as="h2" variant="h2" textAlign="center" id="areas-served-heading">
        Wellness treatments in {SERVICE_AREAS_TEXT}
      </Typography>
      <Typography variant="body1" colour="secondary" textAlign="center">
        Diamond Blossom Wellness welcomes clients from {SERVICE_AREAS_TEXT} and the wider {REGION} area. Book a
        consultation and we will find the right treatment, and a time that suits you.
      </Typography>
    </div>

    <ul className={LIST_CLASSES}>
      {SERVICE_AREAS.map((area) => (
        <li key={area} className={AREA_CLASSES}>
          <FontAwesomeIcon icon={faGem} className={AREA_MARKER_CLASSES} />
          {area}
        </li>
      ))}
    </ul>
  </section>
);

export default AreasServed;
