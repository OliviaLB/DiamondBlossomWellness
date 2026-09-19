import { describe, expect, it } from 'vitest';
import { TREATMENTS } from '@constants/services';
import { validateServicesSearch } from './Services.search';

describe('validateServicesSearch', () => {
  it('keeps a treatment id that exists', () => {
    TREATMENTS.forEach(({ id }) => {
      expect(validateServicesSearch({ treatment: id })).toEqual({ treatment: id });
    });
  });

  it('drops anything that is not a known treatment id', () => {
    expect(validateServicesSearch({ treatment: 'not-a-treatment' })).toEqual({});
    expect(validateServicesSearch({ treatment: 42 })).toEqual({});
    expect(validateServicesSearch({ treatment: ['facials'] })).toEqual({});
    expect(validateServicesSearch({})).toEqual({});
  });
});
