import { faArrowRight } from '@awesome.me/kit-c05db0aa61/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from '@tanstack/react-router';
import { Button, Card, CardContent, CardFooter } from '../../../../../components';
import Typography from '../../../../../components/stories/Typography/Typography';
import { EYEBROW_CLASSES } from '../../Home.styles';
import { SERVICES } from './TreatmentsGrid.constants';
import { GRID_CLASSES, HEADER_CLASSES, ICON_BADGE_CLASSES, SECTION_CLASSES } from './TreatmentsGrid.styles';

/** "Our Signature Treatments" - a `Card` per treatment, each linking through to the full services page. */
export const TreatmentsGrid = () => {
  const navigate = useNavigate();

  return (
    <section className={SECTION_CLASSES}>
      <div className={HEADER_CLASSES}>
        <p className={EYEBROW_CLASSES}>Our Signature Treatments</p>
        <Typography variant="h2">Considered care, tailored to you</Typography>
        <Typography variant="body1" colour="secondary">
          Every ritual is delivered with intention, from the first consultation to the final touch.
        </Typography>
      </div>

      <div className={GRID_CLASSES}>
        {SERVICES.map((service) => (
          <Card key={service.title} fullWidth>
            <CardContent paddingX="4x" paddingY="4x">
              <div className={ICON_BADGE_CLASSES}>
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <Typography variant="h6" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2" colour="secondary">
                {service.description}
              </Typography>
            </CardContent>
            <CardFooter paddingX="4x">
              <Button
                label="Learn more"
                variant="text"
                tone="secondary"
                size="sm"
                endIcon={<FontAwesomeIcon icon={faArrowRight} />}
                onClick={() => navigate({ to: '/services' })}
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
