import { Typography } from '@components/Typography';
import { SERVICE_AREAS_TEXT } from '@constants/business';
import { PAGES } from '@constants/pages';
import { TREATMENTS } from '@constants/services';
import { buildServiceSchema, getTreatmentSeo } from '@utils/seo';
import { JsonLd } from '@appComponents/JsonLd';
import { Seo } from '@appComponents/Seo';
import { ServiceShowcase } from './components/ServiceShowcase';
import { HEADER_CLASSES, MAIN_CLASSES } from './Services.styles';
import type { ServicesProps } from './Services.types';

/** The full treatment menu - a section per treatment with its write-up, session prices and package deals. `treatmentId` picks which treatment is showing. */
const Services = ({ onTreatmentChange, treatmentId }: ServicesProps) => {
  // Each treatment is its own search result (own title, description and canonical URL); with none chosen it's the menu as a whole.
  const treatment = TREATMENTS.find(({ id }) => id === treatmentId);

  return (
    <main className={MAIN_CLASSES}>
      <Seo {...(treatment ? getTreatmentSeo(treatment) : PAGES.services)} />
      {treatment && <JsonLd data={buildServiceSchema(treatment)} />}

      <div className={HEADER_CLASSES}>
        <Typography variant="subtitle2" colour="secondary" textAlign="center" className="tracking-[0.3em] uppercase">
          Services
        </Typography>
        <Typography variant="h1" textAlign="center">
          Our Treatments
        </Typography>
        <Typography variant="body1" colour="secondary" textAlign="justify">
          From considered facials to restorative body treatments, every service is tailored around you and delivered to
          a premium standard, for clients across {SERVICE_AREAS_TEXT}. Choose a treatment to see what it involves and
          what it costs.
        </Typography>
      </div>

      <ServiceShowcase treatmentId={treatmentId} onTreatmentChange={onTreatmentChange} />
    </main>
  );
};
export default Services;
