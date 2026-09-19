import { PACKAGE_DEALS, TREATMENTS } from '@constants/services';
import type { PackageDeal, PriceOption, Treatment } from '@constants/services';

const CURRENCY_FORMAT = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  maximumFractionDigits: 0
});

/** `75` -> `£75`. */
export const formatPrice = (pounds: number): string => CURRENCY_FORMAT.format(pounds);

/** `45` -> `45 min`, `90` -> `1 hr 30 min`. */
export const formatDuration = (minutes: number): string => {
  if (minutes < 60) return `${minutes} min`;

  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;

  return remainder === 0 ? `${hours} hr` : `${hours} hr ${remainder} min`;
};

export interface ResolvedPackageLine {
  treatment: Treatment;
  option: PriceOption;
}

export interface ResolvedPackage {
  deal: PackageDeal;
  lines: ResolvedPackageLine[];
  minutes: number;
  /** What the same treatments cost when booked individually. */
  value: number;
  saving: number;
}

/** Looks up each item's treatment/option and works out the package's total time and saving, so a package can never disagree with the individual prices. */
export const resolvePackage = (deal: PackageDeal): ResolvedPackage => {
  const lines = deal.includes.flatMap(({ treatmentId, optionId }): ResolvedPackageLine[] => {
    const treatment = TREATMENTS.find(({ id }) => id === treatmentId);
    const option = treatment?.options.find(({ id }) => id === optionId);

    return treatment && option ? [{ treatment, option }] : [];
  });

  const value = lines.reduce((total, { option }) => total + option.price, 0);
  const minutes = lines.reduce((total, { option }) => total + option.minutes, 0);

  return { deal, lines, minutes, value, saving: value - deal.price };
};

/** Every package that includes the given treatment. */
export const getPackagesForTreatment = (treatmentId: string): ResolvedPackage[] =>
  PACKAGE_DEALS.filter(({ includes }) => includes.some((item) => item.treatmentId === treatmentId)).map(resolvePackage);
