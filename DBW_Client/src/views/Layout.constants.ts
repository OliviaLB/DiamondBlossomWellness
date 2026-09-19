import type { NavLinkItem } from '../../components';

export { BUSINESS_NAME } from '@constants/business';

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact Us', to: '/contact-us' }
];
