import { PAGES } from '@constants/pages';
import { Seo } from '../components/Seo';

export function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 bg-surface-app px-6 pt-32 pb-16 text-center">
      <Seo {...PAGES.aboutUs} />

      <p className="font-heading text-sm tracking-[0.3em] text-secondary-400 uppercase">About Us</p>

      <h1 className="font-display text-4xl font-semibold text-ink-primary sm:text-5xl">Our Story</h1>

      <p className="max-w-xl font-body text-base text-ink-secondary">
        Diamond Blossom Wellness was founded on the belief that every treatment should feel considered, unhurried, and
        held to a premium standard - a calm space to restore, renew, and radiate.
      </p>
    </main>
  );
}
