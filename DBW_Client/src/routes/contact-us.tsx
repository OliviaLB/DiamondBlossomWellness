import { createFileRoute } from '@tanstack/react-router';
import { ContactUs } from '@views/ContactUs';

export const Route = createFileRoute('/contact-us')({
  component: ContactUs
});
