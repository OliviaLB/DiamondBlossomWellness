import { createFileRoute } from '@tanstack/react-router';
import { ServicesRoute, validateServicesSearch } from '@views/Services';

export const Route = createFileRoute('/services')({
  validateSearch: validateServicesSearch,
  component: ServicesRoute
});
