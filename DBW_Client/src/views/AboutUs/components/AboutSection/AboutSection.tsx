import { useId } from 'react';
import { Typography } from '@components/Typography';
import { SECTION_CLASSES } from './AboutSection.styles';
import type { AboutSectionProps } from './AboutSection.types';

/** A titled card of page content - the heading names the section for screen readers as well. */
const AboutSection = ({ children, heading }: AboutSectionProps) => {
  const headingId = useId();

  return (
    <section className={SECTION_CLASSES} aria-labelledby={headingId}>
      <Typography as="h2" variant="h3" id={headingId}>
        {heading}
      </Typography>
      {children}
    </section>
  );
};

export default AboutSection;
