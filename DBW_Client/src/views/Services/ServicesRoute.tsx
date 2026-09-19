import { getRouteApi } from '@tanstack/react-router';
import Services from './Services';

const route = getRouteApi('/services');

/** The `/services` route's component - drives the selected treatment from `?treatment=`, and writes it back when a tab is chosen, so every view of the page is a shareable link. */
const ServicesRoute = () => {
  const { treatment } = route.useSearch();
  const navigate = route.useNavigate();

  return (
    <Services
      treatmentId={treatment}
      // `replace` keeps Back from stepping through every tab; `resetScroll: false` stops the page jumping to the top on each pick.
      onTreatmentChange={(id) => navigate({ search: { treatment: id }, replace: true, resetScroll: false })}
    />
  );
};

export default ServicesRoute;
