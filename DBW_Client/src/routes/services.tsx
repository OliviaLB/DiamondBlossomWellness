import { createFileRoute } from '@tanstack/react-router';
import { Services } from '@views/Services';

export const Route = createFileRoute('/services')({
  component: Services
});
