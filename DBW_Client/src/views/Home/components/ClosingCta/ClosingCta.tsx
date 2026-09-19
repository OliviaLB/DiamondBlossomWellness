import { faCalendarCheck } from '@awesome.me/kit-c05db0aa61/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@components/Button';
import { Typography } from '@components/Typography';
import { BODY_CLASSES, CARD_CLASSES, SECTION_CLASSES } from './ClosingCta.styles';

/** Final "book now" prompt, closing out the page. */
const ClosingCta = () => {
  const navigate = useNavigate();

  return (
    <section className={SECTION_CLASSES}>
      <div className={CARD_CLASSES}>
        <Typography variant="h3">Ready to restore your glow?</Typography>
        <Typography variant="body1" colour="secondary" className={BODY_CLASSES}>
          Book a consultation and let us build a ritual around what your skin, scalp and body need right now.
        </Typography>
        <Button
          label="Book a Consultation"
          tone="secondary"
          size="lg"
          endIcon={<FontAwesomeIcon icon={faCalendarCheck} />}
          onClick={() => navigate({ to: '/contact-us' })}
        />
      </div>
    </section>
  );
};

export default ClosingCta;
