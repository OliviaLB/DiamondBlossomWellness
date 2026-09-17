import { Navbar } from '../../components';
import { BUSINESS_NAME, NAV_LINKS } from './Layout.constants';
import { LAYOUT_CLASSES } from './Layout.styles';
import type { LayoutProps } from './Layout.types';

/** App shell - the site-wide `Navbar` (business name + primary nav) above whatever route the app is currently rendering. */
export const Layout = ({ children }: LayoutProps) => (
  <div className={LAYOUT_CLASSES}>
    <Navbar businessName={BUSINESS_NAME} links={NAV_LINKS} />
    {children}
  </div>
);
