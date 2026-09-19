import { faArrowRight, faCalendarCheck } from '@awesome.me/kit-c05db0aa61/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '../../../../../components';
import Typography from '../../../../../components/stories/Typography/Typography';
import { EYEBROW_CLASSES } from '../../Home.styles';
import {
  BODY_CLASSES,
  CTA_ROW_CLASSES,
  IMAGE_CLASSES,
  IMAGE_PANEL_CLASSES,
  NOTE_CLASSES,
  SEAM_DESKTOP_CLASSES,
  SEAM_MOBILE_CLASSES,
  SECTION_CLASSES,
  TAGLINE_CLASSES,
  TEXT_PANEL_CLASSES
} from './HeroBanner.styles';

/** Split hero - a text panel (its own gradient background) alongside a dedicated photo panel, rather than text overlaid on the image. */
export const HeroBanner = () => {
  const navigate = useNavigate();

  return (
    <section className={SECTION_CLASSES}>
      <div className={TEXT_PANEL_CLASSES}>
        <Typography variant="subtitle2" colour="secondary" className="tracking-[0.3em] uppercase">
          Japanese Head Spa &middot; Facials &middot; Massage
        </Typography>

        <Typography variant="h1" textAlign="center">
          Restore your crown, renew your glow.
        </Typography>

        <Typography as="h2" variant="subtitle1" colour="secondary" className="text-2xl text-tertiary-400 italic">
          Restore. Renew. Radiate.
        </Typography>

        <Typography variant="body1" colour="secondary" className={BODY_CLASSES}>
          Signature Japanese head spa rituals, considered facials and therapeutic massage - delivered in a calm, private
          space held to a premium standard.
        </Typography>

        <div className={CTA_ROW_CLASSES}>
          <Button
            label="Book a Consultation"
            tone="primary"
            size="lg"
            endIcon={<FontAwesomeIcon icon={faCalendarCheck} />}
            onClick={() => navigate({ to: '/contact-us' })}
          />
          <Button
            label="Explore Treatments"
            variant="text"
            tone="tertiary"
            size="lg"
            endIcon={<FontAwesomeIcon icon={faArrowRight} />}
            onClick={() => navigate({ to: '/services' })}
          />
        </div>

        <p className={NOTE_CLASSES}>Bookings open Tuesday &ndash; Saturday</p>
      </div>

      <div className={IMAGE_PANEL_CLASSES}>
        <img
          src="/iStock-2252764690.png"
          alt="A client relaxing during a Japanese head spa ritual"
          className={IMAGE_CLASSES}
        />
        <div className={SEAM_MOBILE_CLASSES} />
        <div className={SEAM_DESKTOP_CLASSES} />
      </div>
    </section>
  );
};
