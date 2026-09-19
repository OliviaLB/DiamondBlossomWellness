import { describe, expect, it } from 'vitest';
import { PACKAGE_DEALS, TREATMENTS } from '@constants/services';
import { formatDuration, formatPrice, getPackagesForTreatment, resolvePackage } from './pricing';

describe('formatPrice', () => {
  it('formats whole pounds without pence', () => {
    expect(formatPrice(75)).toBe('£75');
    expect(formatPrice(1250)).toBe('£1,250');
  });
});

describe('formatDuration', () => {
  it('uses minutes under an hour and hours from there', () => {
    expect(formatDuration(45)).toBe('45 min');
    expect(formatDuration(60)).toBe('1 hr');
    expect(formatDuration(90)).toBe('1 hr 30 min');
  });
});

describe('resolvePackage', () => {
  it('sums the included options and derives the saving from them', () => {
    const [deal] = PACKAGE_DEALS;
    const resolved = resolvePackage(deal);
    const expectedValue = resolved.lines.reduce((total, { option }) => total + option.price, 0);

    expect(resolved.lines).toHaveLength(deal.includes.length);
    expect(resolved.value).toBe(expectedValue);
    expect(resolved.saving).toBe(expectedValue - deal.price);
  });
});

describe('package data', () => {
  it('only references treatments and options that exist, and always saves money', () => {
    PACKAGE_DEALS.forEach((deal) => {
      const resolved = resolvePackage(deal);

      expect(resolved.lines).toHaveLength(deal.includes.length);
      expect(resolved.saving).toBeGreaterThan(0);
    });
  });

  it('gives every treatment at least one package and at least one price', () => {
    TREATMENTS.forEach(({ id, options }) => {
      expect(options.length).toBeGreaterThan(0);
      expect(getPackagesForTreatment(id).length).toBeGreaterThan(0);
    });
  });
});
