import { faArrowRight } from '@awesome.me/kit-c05db0aa61/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from '@tanstack/react-router';
import { MotionConfig, motion } from 'motion/react';
import { Button } from '@components/Button';
import { Card, CardContent, CardFooter } from '@components/Card';
import { Typography } from '@components/Typography';
import { SERVICES } from './TreatmentsGrid.constants';
import {
  CARD_BODY_CLASSES,
  CARD_CLASSES,
  CARD_EDGE_CLASSES,
  CARD_GLOW_CLASSES,
  CARD_GLOW_STYLE,
  CARD_GROW_TRANSITION,
  CARD_VARIANTS,
  CARD_WRAPPER_CLASSES,
  CARD_WRAPPER_STYLE,
  GLINT_VARIANTS,
  GLOW_VARIANTS,
  GRID_CLASSES,
  HEADER_CLASSES,
  IMAGE_CLASSES,
  IMAGE_FADE_CLASSES,
  IMAGE_GLINT_CLASSES,
  IMAGE_GLINT_STYLE,
  IMAGE_WRAPPER_CLASSES,
  SECTION_CLASSES
} from './TreatmentsGrid.styles';

/** "Our Signature Treatments" - a `Card` per treatment, each linking through to the full services page. */
const TreatmentsGrid = () => {
  const navigate = useNavigate();

  return (
    <section className={SECTION_CLASSES}>
      <div className={HEADER_CLASSES}>
        <Typography variant="subtitle2" colour="secondary" textAlign="center" className="tracking-[0.3em] uppercase">
          Our Signature Treatments
        </Typography>
        <Typography variant="h2">Considered care, tailored to you</Typography>
        <Typography variant="body1" colour="secondary">
          Every ritual is delivered with intention, from the first consultation to the final touch.
        </Typography>
      </div>

      <MotionConfig reducedMotion="user">
        <div className={GRID_CLASSES}>
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              className={CARD_WRAPPER_CLASSES}
              style={CARD_WRAPPER_STYLE}
              variants={CARD_VARIANTS}
              initial="rest"
              animate="rest"
              whileHover="hover"
              transition={CARD_GROW_TRANSITION}
            >
              <motion.div className={CARD_GLOW_CLASSES} style={CARD_GLOW_STYLE} variants={GLOW_VARIANTS} />
              <Card fullWidth className={CARD_CLASSES}>
                <div className={IMAGE_WRAPPER_CLASSES}>
                  <img
                    src={`/${service.imageName}`}
                    alt={`${service.title} treatment`}
                    loading="lazy"
                    decoding="async"
                    className={IMAGE_CLASSES}
                  />
                  <div className={IMAGE_FADE_CLASSES} />
                  <motion.div className={IMAGE_GLINT_CLASSES} style={IMAGE_GLINT_STYLE} variants={GLINT_VARIANTS} />
                </div>
                <div className={CARD_BODY_CLASSES}>
                  <CardContent paddingX="4x" paddingY="4x">
                    <Typography variant="h6" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" colour="secondary" textAlign="justify">
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
                      onClick={() => navigate({ to: '/services', search: { treatment: service.id } })}
                    />
                  </CardFooter>
                </div>
              </Card>
              <motion.div className={CARD_EDGE_CLASSES} variants={GLOW_VARIANTS} />
            </motion.div>
          ))}
        </div>
      </MotionConfig>
    </section>
  );
};

export default TreatmentsGrid;
