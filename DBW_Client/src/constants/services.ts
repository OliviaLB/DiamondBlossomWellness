import { SERVICE_AREAS_TEXT } from './business';

export interface PriceOption {
  id: string;
  label: string;
  /** Session length, in minutes. */
  minutes: number;
  /** Price in pounds. */
  price: number;
}

export interface Treatment {
  id: string;
  title: string;
  /** Short blurb, as shown on the homepage treatment cards. */
  summary: string;
  /** Path of the treatment photo, relative to `public/`. Compressed copies (1600px wide) - keep the full-size originals out of `public/`. */
  imageName: string;
  /** Meta description for this treatment's own search result (keep under ~160 characters). */
  seoDescription: string;
  /** Longer copy for the services page, one entry per paragraph. */
  about: string[];
  /** Short "what's involved" bullets. */
  highlights: string[];
  options: PriceOption[];
}

export interface PackageItem {
  treatmentId: string;
  optionId: string;
}

export interface PackageDeal {
  id: string;
  title: string;
  description: string;
  includes: PackageItem[];
  /** Bundle price in pounds. The saving is worked out from the included options' own prices. */
  price: number;
}

/*
 * PLACEHOLDER CONTENT - the prices, session lengths, option names and package bundles below are
 * stand-in figures to be replaced with the real menu before launch. Copy is drafted from the
 * homepage descriptions and should be reviewed for accuracy too.
 */

/** Every treatment on offer, in display order - drives both the homepage grid and the services page. */
export const TREATMENTS: Treatment[] = [
  {
    id: 'japanese-head-spa',
    title: 'Japanese Head Spa',
    summary:
      'A slow, sensory ritual of warm oil, deep scalp massage and a gentle cleanse. Tension melts away, leaving hair glossy, light and revived.',
    imageName: 'treatments/japanese-head-spa.jpg',
    seoDescription: `Japanese head spa for ${SERVICE_AREAS_TEXT} - warm oil, deep scalp massage and a gentle cleanse for glossy, revived hair and a calmer mind.`,
    about: [
      'Rooted in Japanese tradition, the head spa is a slow, sensory ritual for both scalp and mind. Warm oil is worked in with deep, rhythmic massage, before a gentle cleanse leaves the scalp refreshed and the hair glossy and light.',
      'It is as much about switching off as it is about your hair. Come with nothing to do but unwind.'
    ],
    highlights: [
      'Warm oil scalp treatment',
      'Deep, rhythmic scalp massage',
      'Gentle, thorough cleanse',
      'A calm, unhurried pace'
    ],
    options: [
      { id: 'express', label: 'Express', minutes: 45, price: 55 },
      { id: 'signature', label: 'Signature', minutes: 60, price: 75 },
      { id: 'deluxe', label: 'Deluxe', minutes: 90, price: 105 }
    ]
  },
  {
    id: 'hydrotherm-3d',
    title: 'Hydrotherm 3D',
    summary:
      'Warmth, steam and deep hydration work together to nourish the scalp and hair, leaving them balanced, soft and visibly refreshed.',
    imageName: 'treatments/hydrotherm-3d.jpg',
    seoDescription: `Hydrotherm 3D scalp and hair treatment for ${SERVICE_AREAS_TEXT} - warmth, steam and deep hydration for balanced, soft, refreshed hair.`,
    about: [
      'Hydrotherm 3D pairs gentle warmth and steam with deep hydration, caring for the scalp and the hair together. The result is a scalp that feels balanced and hair that looks soft and visibly refreshed.',
      'A lovely choice if your hair feels dry or dull, or as a companion to a head spa.'
    ],
    highlights: ['Warmth and steam', 'Deep hydration', 'Scalp and hair care in one', 'A soft, refreshed finish'],
    options: [
      { id: 'signature', label: 'Signature', minutes: 45, price: 60 },
      { id: 'extended', label: 'Extended', minutes: 60, price: 80 }
    ]
  },
  {
    id: 'facials',
    title: 'Facials',
    summary:
      'Tailored to your skin and made with considered, premium products, to cleanse, nourish and restore a calm, healthy glow.',
    imageName: 'treatments/facials.jpg',
    seoDescription: `Tailored facials with premium products for ${SERVICE_AREAS_TEXT} - cleanse, nourish and restore a calm, healthy glow.`,
    about: [
      'Every facial is tailored to your skin on the day, using considered, premium products to cleanse, nourish and restore a calm, healthy glow.',
      'Tell us how your skin feels and what you would like to achieve, and we will shape the treatment around you.'
    ],
    highlights: [
      'Tailored to your skin',
      'A deep, thorough cleanse',
      'Nourishing, premium products',
      'A calm, glowing finish'
    ],
    options: [
      { id: 'express', label: 'Express', minutes: 30, price: 45 },
      { id: 'signature', label: 'Signature', minutes: 60, price: 75 },
      { id: 'luxe', label: 'Luxe', minutes: 90, price: 110 }
    ]
  },
  {
    id: 'scalp-massage',
    title: 'Scalp Massage',
    summary:
      'Focused pressure-point work to release tension, encourage circulation and quieten a busy mind. A restorative reset in its own right.',
    imageName: 'treatments/scalp-massage.jpg',
    seoDescription: `Scalp massage near ${SERVICE_AREAS_TEXT} - focused pressure-point work to release tension, encourage circulation and quieten a busy mind.`,
    about: [
      'Focused pressure-point work releases the tension held in the scalp, neck and temples, encouraging circulation and quietening a busy mind.',
      'A restorative reset in its own right - ideal when you want to unwind without a full head spa, or as a top-up between rituals.'
    ],
    highlights: [
      'Focused pressure-point work',
      'Releases scalp and neck tension',
      'Encourages circulation',
      'Quietens a busy mind'
    ],
    options: [
      { id: 'express', label: 'Express', minutes: 30, price: 40 },
      { id: 'signature', label: 'Signature', minutes: 45, price: 55 }
    ]
  },
  {
    id: 'relaxation-massage',
    title: 'Relaxation Massage',
    summary:
      'A flowing full-body massage with light to medium pressure, adapted to you on the day, to soothe tired muscles and settle the mind.',
    imageName: 'treatments/relaxation-massage.jpg',
    seoDescription: `Relaxation massage near ${SERVICE_AREAS_TEXT} - a flowing full-body massage to soothe tired muscles and settle the mind.`,
    about: [
      'A flowing full-body massage using light to medium pressure, adapted to you on the day, to soothe tired muscles and settle the mind.',
      'Let us know where you are holding tension, or simply where you would like more time, and we will tailor the treatment as we go.'
    ],
    highlights: [
      'Full-body, flowing massage',
      'Light to medium pressure',
      'Adapted to you on the day',
      'Deeply calming'
    ],
    options: [
      { id: 'signature', label: 'Signature', minutes: 60, price: 65 },
      { id: 'extended', label: 'Extended', minutes: 90, price: 90 }
    ]
  },
  {
    id: 'deep-tissue-massage',
    title: 'Deep Tissue Massage',
    summary:
      'Firm, focused work on knots and stubborn tension in the back, neck and shoulders. Ideal for tight muscles, desk-bound days and recovery.',
    imageName: 'treatments/deep-tissue-massage.jpg',
    seoDescription: `Deep tissue massage near ${SERVICE_AREAS_TEXT} - firm, focused work on knots and tension in the back, neck and shoulders.`,
    about: [
      'Firm, focused work on knots and stubborn tension in the back, neck and shoulders. Ideal for tight muscles, desk-bound days and recovery.',
      'Pressure is firm but never forced - we work with your body, and you stay in control of how deep we go.'
    ],
    highlights: [
      'Firm, focused pressure',
      'Back, neck and shoulder tension',
      'Targets knots and tight muscles',
      'Pressure adjusted to you'
    ],
    options: [
      { id: 'signature', label: 'Signature', minutes: 60, price: 70 },
      { id: 'extended', label: 'Extended', minutes: 90, price: 95 }
    ]
  }
];

/** Bundles that combine treatments at a saving. A package is listed under each treatment it includes. */
export const PACKAGE_DEALS: PackageDeal[] = [
  {
    id: 'crown-and-glow',
    title: 'Crown & Glow',
    description: 'A head spa and a facial, from scalp to skin, in one unhurried visit.',
    includes: [
      { treatmentId: 'japanese-head-spa', optionId: 'signature' },
      { treatmentId: 'facials', optionId: 'signature' }
    ],
    price: 135
  },
  {
    id: 'deep-renewal',
    title: 'Deep Renewal',
    description: 'Hydrating warmth and steam, followed by a scalp massage to release what is left.',
    includes: [
      { treatmentId: 'hydrotherm-3d', optionId: 'extended' },
      { treatmentId: 'scalp-massage', optionId: 'signature' }
    ],
    price: 120
  },
  {
    id: 'full-body-reset',
    title: 'Full Body Reset',
    description: 'A flowing relaxation massage finished with a short scalp massage.',
    includes: [
      { treatmentId: 'relaxation-massage', optionId: 'signature' },
      { treatmentId: 'scalp-massage', optionId: 'express' }
    ],
    price: 95
  },
  {
    id: 'tension-release',
    title: 'Tension Release',
    description: 'Deep tissue work on the back and shoulders, then a scalp massage to soften the rest.',
    includes: [
      { treatmentId: 'deep-tissue-massage', optionId: 'signature' },
      { treatmentId: 'scalp-massage', optionId: 'signature' }
    ],
    price: 110
  }
];
