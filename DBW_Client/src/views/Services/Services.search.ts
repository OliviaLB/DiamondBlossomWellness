import { TREATMENTS } from '@constants/services';

export interface ServicesSearch {
  /** Id of the treatment to show - see `TREATMENTS`. */
  treatment?: string;
}

/** Keeps `?treatment=` only when it names a real treatment, so a stale or mistyped link just lands on the default treatment. (The URL itself is left as typed - only the route's validated search is cleaned.) */
export const validateServicesSearch = (search: Record<string, unknown>): ServicesSearch => {
  const treatment = TREATMENTS.find(({ id }) => id === search.treatment)?.id;

  return treatment ? { treatment } : {};
};
