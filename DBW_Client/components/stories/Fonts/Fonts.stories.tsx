import type { Meta, StoryObj } from '@storybook/react-vite';
import Typography from '../Typography/Typography';

interface FontFamily {
  name: string;
  cssVar: string;
  tailwindClass: string;
  role: string;
  weights: string;
}

const FAMILIES: FontFamily[] = [
  {
    name: 'Playfair Display',
    cssVar: '--font-display',
    tailwindClass: 'font-display',
    role: 'Primary — display serif for h1–h6 and the wordmark',
    weights: '400, 500, 600, 700, italic 400'
  },
  {
    name: 'Cormorant Garamond',
    cssVar: '--font-heading',
    tailwindClass: 'font-heading',
    role: 'Complementary serif — taglines and subtitle1/subtitle2',
    weights: '400, 500, 600, italic 400'
  },
  {
    name: 'Poppins',
    cssVar: '--font-body',
    tailwindClass: 'font-body',
    role: 'Secondary — sans-serif for body copy, labels, and buttons',
    weights: '200, 300, 400, 500, 600'
  }
];

const ALPHABET = 'ABCDEFGHIJKLM abcdefghijklm 0123456789';

const FontCard = ({ name, cssVar, tailwindClass, role, weights }: FontFamily) => (
  <div className="flex flex-col gap-3 rounded-lg border border-line-primary bg-surface-card p-6">
    <div className="flex flex-col gap-1">
      <span className={`${tailwindClass} text-3xl text-ink-primary`}>{name}</span>
      <span className="font-body text-sm text-ink-secondary">{role}</span>
      <span className="font-body text-xs text-ink-muted">
        {cssVar} → {tailwindClass} · weights: {weights}
      </span>
    </div>
    <p className={`${tailwindClass} text-xl text-ink-primary`}>{ALPHABET}</p>
    <p className={`${tailwindClass} text-base text-ink-secondary`}>The quick brown fox jumps over the lazy dog.</p>
  </div>
);

const meta = {
  title: 'Foundations/Fonts',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs']
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** The three font stacks defined in `src/themeColours.css` (`--font-display`/`--font-heading`/`--font-body`), each shown with its role, available weights, and a sample. */
export const Families: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6">
      {FAMILIES.map((family) => (
        <FontCard key={family.name} {...family} />
      ))}
    </div>
  )
};

/** The pairing in practice, via the `Typography` component's own variant → font mapping (`VARIANT_FONT` in `Typography.styles.ts`). */
export const Pairing: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-3 px-6 py-16 text-center">
      <Typography variant="subtitle2" colour="secondary" className="tracking-[0.3em] uppercase">
        Diamond Blossom Wellness
      </Typography>
      <Typography variant="h1">Diamond Blossom Wellness</Typography>
      <Typography as="h2" variant="subtitle1" colour="secondary" className="text-2xl text-tertiary-400 italic">
        Restore. Renew. Radiate.
      </Typography>
      <Typography variant="body1" colour="secondary" className="max-w-xl">
        A calm, considered space for wellness treatments — where every visit is guided with care and every detail is
        held to a premium standard.
      </Typography>
    </div>
  )
};
