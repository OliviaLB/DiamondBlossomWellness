export function HomeView() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 bg-surface-app px-6 py-16 text-center">
      <p className="font-heading text-sm tracking-[0.3em] text-secondary-400 uppercase">Diamond Blossom Wellness</p>

      <h1 className="font-display text-5xl font-semibold text-text-primary">Diamond Blossom Wellness</h1>

      <h2 className="font-heading text-2xl text-tertiary-400 italic">Restore. Renew. Radiate.</h2>

      <p className="max-w-xl font-body text-base text-text-secondary">
        A calm, considered space for wellness treatments — where every visit is guided with care and every detail is
        held to a premium standard.
      </p>

      <a href="#" className="font-body text-sm text-text-link hover:text-text-link-hover">
        Explore our treatments &rarr;
      </a>

      <p className="font-body text-xs text-text-muted">Bookings open Tuesday &ndash; Saturday</p>

      <div className="flex flex-wrap justify-center gap-3 pt-4">
        <span className="rounded-full border border-success-border bg-success-bg px-3 py-1 font-body text-xs text-success-text">
          Appointment confirmed
        </span>
        <span className="rounded-full border border-warning-border bg-warning-bg px-3 py-1 font-body text-xs text-warning-text">
          Limited availability
        </span>
        <span className="rounded-full border border-danger-border bg-danger-bg px-3 py-1 font-body text-xs text-danger-text">
          Fully booked
        </span>
      </div>

      <div className="mt-6 rounded-2xl border border-surface-border bg-surface-card px-8 py-6">
        <p className="font-heading text-lg text-accent-300">A note on our card surface</p>
        <p className="mt-2 font-body text-sm text-text-secondary">
          This card sits on the raised surface tone, showing how body copy and accents read against it.
        </p>
      </div>
    </main>
  );
}
