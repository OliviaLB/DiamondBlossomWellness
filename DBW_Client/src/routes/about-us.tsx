import { createFileRoute } from '@tanstack/react-router';
import { AboutUs } from '@views/AboutUs';

export const Route = createFileRoute('/about-us')({
  component: AboutUs
});
