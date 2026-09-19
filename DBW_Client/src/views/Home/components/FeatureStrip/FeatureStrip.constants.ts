import { faAward, faGem, faHandsHoldingHeart, faLeaf } from '@awesome.me/kit-c05db0aa61/icons/classic/solid';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface FeatureItem {
  icon: IconDefinition;
  label: string;
}

/** Short trust/feature callouts shown in the icon strip beneath the hero. */
export const FEATURES: FeatureItem[] = [
  { icon: faAward, label: 'Certified Therapists' },
  { icon: faGem, label: 'Premium, Considered Products' },
  { icon: faLeaf, label: 'Calm & Private Rooms' },
  { icon: faHandsHoldingHeart, label: 'Rituals Tailored to You' }
];
