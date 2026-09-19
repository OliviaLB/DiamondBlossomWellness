import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@components/Typography';
import { FEATURES } from './FeatureStrip.constants';
import { GRID_CLASSES, ICON_CLASSES, ITEM_CLASSES, SECTION_CLASSES } from './FeatureStrip.styles';

/** Trust-signal icon row directly under the hero - certifications, product quality, room ambience, tailoring. */
const FeatureStrip = () => (
  <section className={SECTION_CLASSES}>
    <div className={GRID_CLASSES}>
      {FEATURES.map((feature) => (
        <div key={feature.label} className={ITEM_CLASSES}>
          <FontAwesomeIcon icon={feature.icon} className={ICON_CLASSES} />
          <Typography variant="label" colour="secondary">
            {feature.label}
          </Typography>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureStrip;
