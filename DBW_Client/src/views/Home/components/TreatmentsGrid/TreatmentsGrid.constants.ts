import { TREATMENTS } from '@constants/services';

export interface ServiceItem {
  description: string;
  /** The treatment's id - used as the `treatment` query param when linking through to the services page. */
  id: string;
  imageName: string;
  title: string;
}

/** The treatments called out on the homepage, in display order - derived from the shared treatment data so the grid and the services page can't drift apart. */
export const SERVICES: ServiceItem[] = TREATMENTS.map(({ id, imageName, summary, title }) => ({
  description: summary,
  id,
  imageName,
  title
}));
