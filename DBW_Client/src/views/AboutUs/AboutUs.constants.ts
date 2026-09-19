import { BUSINESS_NAME, SERVICE_AREAS_TEXT } from '@constants/business';
import type { AboutSectionContent } from './AboutUs.types';

export const INTRO_HEADING = 'Hello there! My name is Lois!';

export const INTRO_LEAD = `I'm the founder of ${BUSINESS_NAME}.`;

/*
 * Copy drafted from Lois's own account of her background. Health-related wording deliberately
 * says only what she does and specialises in - it makes no promise to treat, cure or heal a
 * condition. Osteopathy is mentioned once, as something she has studied: she did not complete the
 * degree, and "osteopath" is a protected title in the UK, so nothing here may present her as one
 * or describe osteopathic practice as something she offers.
 *
 * The "only a few practitioners in the UK" claim is hers and should be kept substantiated
 * (ASA/CAP rules apply to claims like this).
 */

/** The page's sections, in reading order. */
export const ABOUT_SECTIONS: AboutSectionContent[] = [
  {
    id: 'why-i-started',
    heading: `Why I started ${BUSINESS_NAME}`,
    paragraphs: [
      `${BUSINESS_NAME} is my way of providing a premium service in health and wellness. I have completed beauty and holistic therapies courses, and I currently work in a luxury spa - now I want to take that experience and offer it to clients across ${SERVICE_AREAS_TEXT}.`,
      'I founded it on the belief that every treatment should feel considered, unhurried, and held to a premium standard - a calm space to restore, renew, and radiate.'
    ]
  },
  {
    id: 'understanding-the-body',
    heading: 'A thorough understanding of the body',
    paragraphs: [
      'My background is in Pilates, and I have also studied Osteopathy, which has given me an extensive and thorough understanding of anatomy. I bring years of that knowledge to every treatment session to make sure you are thoroughly taken care of.',
      'I chose the Body Control methodology for my Pilates qualifications as it is simply the international benchmark for high quality Pilates.'
    ],
    listIntro: 'I have extended my training and passed (with distinctions) Pilates exams in:',
    list: [
      'Pilates Specialist Back4Good Practitioner',
      'Pilates Matwork, Magic Circle, Foam Roller & Small Equipment Instructor',
      'Pilates Specialist for Osteopenia/Osteoporosis',
      'Pilates Specialist for Pre and Post Pregnancy'
    ]
  },
  {
    id: 'osteoporosis-and-3d-massage',
    heading: 'Osteoporosis management and 3D massage',
    paragraphs: [
      'I specialise in osteoporosis treatment management and rehabilitation, which is why 3D massage is a particular focus of the studio. The hydro treatment does not involve moving you much during the session, so it is designed to maximise relief while minimising movement.',
      'It is a rare and specialised skill - only a few practitioners in the UK are qualified to offer it as a service.'
    ]
  },
  {
    id: 'how-i-got-here',
    heading: 'How I got here',
    paragraphs: [
      'After leaving school my passion for sports never really left me; I took up figure skating and went on to specialise in Ice Dance, then in 2010 I completed a Sports Science Degree thus enabling me to become a Level 3 Advanced Personal Trainer. Shortly after I had a skating accident which left me with a broken ankle and persistent Achilles problems and this was how I became more heavily involved in Pilates.',
      'During this time, I realised the amazing benefits of Pilates with regards to recovering from injury. I also noticed how strong my core became, which in the long run made me a far better skater as a result. This was when I decided to switch from Personal Training to becoming a full-time Pilates Instructor and never looked back.'
    ]
  }
];
