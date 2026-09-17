import { createFileRoute } from '@tanstack/react-router';
import { Faq } from '@views/Faq';

export const Route = createFileRoute('/faq')({
  component: Faq
});
