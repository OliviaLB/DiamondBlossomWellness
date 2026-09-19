export interface ServiceItem {
  description: string;
  /** Filename of the treatment photo in `public/`. */
  imageName: string;
  title: string;
}

/** The treatments called out on the homepage, in display order. */
export const SERVICES: ServiceItem[] = [
  {
    title: 'Japanese Head Spa',
    description:
      'A slow, sensory ritual of warm oil, deep scalp massage and a gentle cleanse. Tension melts away, leaving hair glossy, light and revived.',
    imageName: 'AdobeStock_1966172251.jpeg'
  },
  {
    title: 'Hydrotherm 3D',
    description:
      'Warmth, steam and deep hydration work together to nourish the scalp and hair, leaving them balanced, soft and visibly refreshed.',
    imageName: 'AdobeStock_117700241.jpeg'
  },
  {
    title: 'Facials',
    description:
      'Tailored to your skin and made with considered, premium products, to cleanse, nourish and restore a calm, healthy glow.',
    imageName: 'AdobeStock_492699325.jpeg'
  },
  {
    title: 'Scalp Massage',
    description:
      'Focused pressure-point work to release tension, encourage circulation and quieten a busy mind. A restorative reset in its own right.',
    imageName: 'AdobeStock_2169279143.jpeg'
  },
  {
    title: 'Relaxation Massage',
    description:
      'A flowing full-body massage with light to medium pressure, adapted to you on the day, to soothe tired muscles and settle the mind.',
    imageName: 'AdobeStock_258379234.jpeg'
  },
  {
    title: 'Deep Tissue Massage',
    description:
      'Firm, focused work on knots and stubborn tension in the back, neck and shoulders. Ideal for tight muscles, desk-bound days and recovery.',
    imageName: 'AdobeStock_250901528.jpeg'
  }
];
