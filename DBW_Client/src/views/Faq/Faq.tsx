import { PAGES } from '@constants/pages';
import { Seo } from '@appComponents/Seo';

const Faq = () => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 bg-surface-app px-6 pt-32 pb-16 text-center">
      <Seo {...PAGES.faq} />

      <p className="font-heading text-sm tracking-[0.3em] text-secondary-400 uppercase">FAQ</p>

      <h1 className="font-display text-4xl font-semibold text-ink-primary sm:text-5xl">Frequently Asked Questions</h1>

      <p className="max-w-xl font-body text-base text-ink-secondary">
        Answers to our most common questions on bookings, preparation, and aftercare are being gathered here - please
        get in touch if you can't find what you're looking for.
      </p>
    </main>
  );
};

export default Faq;
