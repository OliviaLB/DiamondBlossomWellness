import Typography from '../../../components/stories/Typography/Typography';
import { ServiceShowcase } from './components/ServiceShowcase';
import { HEADER_CLASSES, MAIN_CLASSES } from './Services.styles';
import type { ServicesProps } from './Services.types';

/** The full treatment menu - a section per treatment with its write-up, session prices and package deals. `treatmentId` picks which treatment is showing. */
const Services = ({ onTreatmentChange, treatmentId }: ServicesProps) => {
  return (
    <main className={MAIN_CLASSES}>
      <div className={HEADER_CLASSES}>
        <Typography variant="subtitle2" colour="secondary" textAlign="center" className="tracking-[0.3em] uppercase">
          Services
        </Typography>
        <Typography variant="h1" textAlign="center">
          Our Treatments
        </Typography>
        <Typography variant="body1" colour="secondary" textAlign="center">
          From considered facials to restorative body treatments, every service is tailored around you and delivered to
          a premium standard. Choose a treatment to see what it involves and what it costs.
        </Typography>
      </div>

      <ServiceShowcase treatmentId={treatmentId} onTreatmentChange={onTreatmentChange} />
    </main>
  );
};
export default Services;
