import type { Meta, StoryObj } from '@storybook/react-vite';
import clsx from 'clsx';

interface Swatch {
  label: string;
  hex: string;
  className: string;
}

interface PaletteGroup {
  title: string;
  swatches: Swatch[];
}

const PRIMARY: Swatch[] = [
  { label: 'Primary 100', hex: '#e9ebf7', className: 'bg-primary-100 text-ink-contrast' },
  { label: 'Primary 200', hex: '#c6cbeb', className: 'bg-primary-200 text-ink-contrast' },
  { label: 'Primary 300', hex: '#9aa3dc', className: 'bg-primary-300 text-ink-contrast' },
  { label: 'Primary 400', hex: '#6c77c4', className: 'bg-primary-400 text-ink-primary' },
  { label: 'Primary 500', hex: '#3d4696', className: 'bg-primary-500 text-ink-primary' },
  { label: 'Primary 600', hex: '#262c6e', className: 'bg-primary-600 text-ink-primary' },
  { label: 'Primary 700', hex: '#171b4c', className: 'bg-primary-700 text-ink-primary' },
  { label: 'Primary 800', hex: '#0f1233', className: 'bg-primary-800 text-ink-primary' },
  { label: 'Primary 900', hex: '#080a1f', className: 'bg-primary-900 text-ink-primary' }
];

const SECONDARY: Swatch[] = [
  { label: 'Secondary 100', hex: '#f5f1fb', className: 'bg-secondary-100 text-ink-contrast' },
  { label: 'Secondary 200', hex: '#e4d9f4', className: 'bg-secondary-200 text-ink-contrast' },
  { label: 'Secondary 300', hex: '#cbb7e8', className: 'bg-secondary-300 text-ink-contrast' },
  { label: 'Secondary 400', hex: '#ac90d8', className: 'bg-secondary-400 text-ink-contrast' },
  { label: 'Secondary 500', hex: '#8b6ec4', className: 'bg-secondary-500 text-ink-primary' },
  { label: 'Secondary 600', hex: '#6d51a3', className: 'bg-secondary-600 text-ink-primary' },
  { label: 'Secondary 700', hex: '#533c80', className: 'bg-secondary-700 text-ink-primary' },
  { label: 'Secondary 800', hex: '#392a5c', className: 'bg-secondary-800 text-ink-primary' },
  { label: 'Secondary 900', hex: '#221a3a', className: 'bg-secondary-900 text-ink-primary' }
];

const TERTIARY: Swatch[] = [
  { label: 'Tertiary 100', hex: '#fdf3f7', className: 'bg-tertiary-100 text-ink-contrast' },
  { label: 'Tertiary 200', hex: '#f8dde9', className: 'bg-tertiary-200 text-ink-contrast' },
  { label: 'Tertiary 300', hex: '#f0bad3', className: 'bg-tertiary-300 text-ink-contrast' },
  { label: 'Tertiary 400', hex: '#e496bc', className: 'bg-tertiary-400 text-ink-contrast' },
  { label: 'Tertiary 500', hex: '#d473a4', className: 'bg-tertiary-500 text-ink-primary' },
  { label: 'Tertiary 600', hex: '#b4557f', className: 'bg-tertiary-600 text-ink-primary' },
  { label: 'Tertiary 700', hex: '#8c3f61', className: 'bg-tertiary-700 text-ink-primary' },
  { label: 'Tertiary 800', hex: '#632b44', className: 'bg-tertiary-800 text-ink-primary' },
  { label: 'Tertiary 900', hex: '#3c1a29', className: 'bg-tertiary-900 text-ink-primary' }
];

const ACCENT: Swatch[] = [
  { label: 'Accent 100', hex: '#ffffff', className: 'bg-accent-100 text-ink-contrast' },
  { label: 'Accent 200', hex: '#f4f5f9', className: 'bg-accent-200 text-ink-contrast' },
  { label: 'Accent 300', hex: '#e2e4ec', className: 'bg-accent-300 text-ink-contrast' },
  { label: 'Accent 400', hex: '#c7cbda', className: 'bg-accent-400 text-ink-contrast' },
  { label: 'Accent 500', hex: '#a7adc2', className: 'bg-accent-500 text-ink-contrast' },
  { label: 'Accent 600', hex: '#82889f', className: 'bg-accent-600 text-ink-primary' },
  { label: 'Accent 700', hex: '#5f6478', className: 'bg-accent-700 text-ink-primary' },
  { label: 'Accent 800', hex: '#414454', className: 'bg-accent-800 text-ink-primary' },
  { label: 'Accent 900', hex: '#262834', className: 'bg-accent-900 text-ink-primary' }
];

const SUCCESS: Swatch[] = [
  { label: 'Success Subtle', hex: '#e4f5ee', className: 'bg-success-subtle text-ink-contrast' },
  { label: 'Success Edge', hex: '#7fcbae', className: 'bg-success-edge text-ink-contrast' },
  { label: 'Success Ink', hex: '#1f7a57', className: 'bg-success-ink text-ink-primary' },
  { label: 'Success Subtle Dark', hex: '#103528', className: 'bg-success-subtle-dark text-ink-primary' },
  { label: 'Success Edge Dark', hex: '#2c7a56', className: 'bg-success-edge-dark text-ink-primary' },
  { label: 'Success Ink Dark', hex: '#7fe0b8', className: 'bg-success-ink-dark text-ink-contrast' }
];

const WARNING: Swatch[] = [
  { label: 'Warning Subtle', hex: '#fbf1de', className: 'bg-warning-subtle text-ink-contrast' },
  { label: 'Warning Edge', hex: '#e6c27a', className: 'bg-warning-edge text-ink-contrast' },
  { label: 'Warning Ink', hex: '#8a6412', className: 'bg-warning-ink text-ink-primary' },
  { label: 'Warning Subtle Dark', hex: '#3a2e12', className: 'bg-warning-subtle-dark text-ink-primary' },
  { label: 'Warning Edge Dark', hex: '#8a6a26', className: 'bg-warning-edge-dark text-ink-primary' },
  { label: 'Warning Ink Dark', hex: '#f0ce86', className: 'bg-warning-ink-dark text-ink-contrast' }
];

const DANGER: Swatch[] = [
  { label: 'Danger Subtle', hex: '#fbe7ec', className: 'bg-danger-subtle text-ink-contrast' },
  { label: 'Danger Edge', hex: '#e28fa3', className: 'bg-danger-edge text-ink-contrast' },
  { label: 'Danger Ink', hex: '#a5233f', className: 'bg-danger-ink text-ink-primary' },
  { label: 'Danger Subtle Dark', hex: '#3a121b', className: 'bg-danger-subtle-dark text-ink-primary' },
  { label: 'Danger Edge Dark', hex: '#8a3349', className: 'bg-danger-edge-dark text-ink-primary' },
  { label: 'Danger Ink Dark', hex: '#f0a3b5', className: 'bg-danger-ink-dark text-ink-contrast' }
];

const SURFACES: Swatch[] = [
  { label: 'Surface App', hex: '#080a1f', className: 'bg-surface-app text-ink-primary' },
  { label: 'Surface Canvas', hex: '#0f1233', className: 'bg-surface-canvas text-ink-primary' },
  { label: 'Surface Card', hex: '#12173c', className: 'bg-surface-card text-ink-primary' },
  { label: 'Surface Card Raised', hex: '#1a2050', className: 'bg-surface-card-raised text-ink-primary' },
  { label: 'Surface Sunken', hex: '#060811', className: 'bg-surface-sunken text-ink-primary' },
  { label: 'Surface Inverse', hex: '#ffffff', className: 'bg-surface-inverse text-ink-contrast' },
  { label: 'Surface Inverse Card', hex: '#fbfbfd', className: 'bg-surface-inverse-card text-ink-contrast' }
];

const INK: Swatch[] = [
  { label: 'Ink Primary', hex: '#f5f4fa', className: 'bg-ink-primary text-ink-contrast' },
  { label: 'Ink Secondary', hex: '#b9bcd4', className: 'bg-ink-secondary text-ink-contrast' },
  { label: 'Ink Contrast', hex: '#08090f', className: 'bg-ink-contrast text-ink-primary' },
  { label: 'Ink Muted', hex: '#7b7fa0', className: 'bg-ink-muted text-ink-primary' },
  { label: 'Ink Link', hex: '#ac90d8', className: 'bg-ink-link text-ink-contrast' },
  { label: 'Ink Link Hover', hex: '#e496bc', className: 'bg-ink-link-hover text-ink-contrast' }
];

const GROUPS: PaletteGroup[] = [
  { title: 'Primary — Midnight Navy', swatches: PRIMARY },
  { title: 'Secondary — Blossom Lavender', swatches: SECONDARY },
  { title: 'Tertiary — Sakura Pink', swatches: TERTIARY },
  { title: 'Accent — Diamond Silver', swatches: ACCENT },
  { title: 'Success', swatches: SUCCESS },
  { title: 'Warning', swatches: WARNING },
  { title: 'Danger', swatches: DANGER },
  { title: 'Surfaces', swatches: SURFACES },
  { title: 'Ink', swatches: INK }
];

const SwatchCard = ({ label, hex, className }: Swatch) => (
  <div
    className={clsx(
      'flex h-20 min-w-[4rem] flex-1 flex-col items-center justify-center gap-1 rounded border border-line px-2 text-center',
      className
    )}
  >
    <span className="font-body text-xs font-medium">{label}</span>
    <span className="font-body text-[10px] opacity-70">{hex}</span>
  </div>
);

const PaletteRow = ({ title, swatches }: PaletteGroup) => (
  <div className="flex flex-col gap-3">
    <h3 className="font-heading text-lg text-ink-primary">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {swatches.map((swatch) => (
        <SwatchCard key={swatch.label} {...swatch} />
      ))}
    </div>
  </div>
);

const meta = {
  title: 'Foundations/Colour Palette',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs']
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** Every brand, status, surface, and ink colour token defined in `src/themeColours.css`, rendered as swatch cards. */
export const Palette: Story = {
  render: () => (
    <div className="flex flex-col gap-8 bg-surface-app p-6">
      {GROUPS.map((group) => (
        <PaletteRow key={group.title} {...group} />
      ))}
    </div>
  )
};
