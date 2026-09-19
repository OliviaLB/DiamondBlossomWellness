import {
  faDroplet,
  faFaceSmileRelaxed,
  faHandHoldingDroplet,
  faHandsHoldingCircle
} from '@awesome.me/kit-c05db0aa61/icons/classic/solid';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ServiceItem {
  description: string;
  icon: IconDefinition;
  title: string;
}

/** The four treatments called out on the homepage, in display order. */
export const SERVICES: ServiceItem[] = [
  {
    icon: faDroplet,
    title: 'Japanese Head Spa',
    description:
      'A restorative ritual of warm oil, deep scalp massage and gentle cleansing that melts tension and leaves hair radiant.'
  },
  {
    icon: faFaceSmileRelaxed,
    title: 'Facials',
    description:
      'Tailored skincare rituals using premium, considered products to cleanse, nourish and restore a healthy glow.'
  },
  {
    icon: faHandHoldingDroplet,
    title: 'Scalp Massage',
    description: 'Targeted pressure-point techniques to ease tension, boost circulation and quiet a busy mind.'
  },
  {
    icon: faHandsHoldingCircle,
    title: 'General Massage',
    description:
      'Full-body therapeutic massage, adapted to what you need that day, for deep relaxation and renewal.'
  }
];
