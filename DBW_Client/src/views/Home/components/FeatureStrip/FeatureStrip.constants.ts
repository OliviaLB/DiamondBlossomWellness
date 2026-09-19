import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { faGem, faAward, faLeaf, faHandsHoldingHeart } from '@awesome.me/kit-c05db0aa61/icons/sharp/light';

export interface FeatureItem {
  icon: IconDefinition;
  label: string;
}

export const FEATURES: FeatureItem[] = [
  { icon: faAward, label: 'Certified Therapists' },
  { icon: faGem, label: 'Premium High Quality Products' },
  { icon: faLeaf, label: 'Calm Treatment Environment' },
  { icon: faHandsHoldingHeart, label: 'Treatments Tailored to You' }
];
