import { Navbar } from '../../components';
import { JsonLd } from '../components/JsonLd';
import { buildBusinessSchema } from '@utils/seo';
import { BUSINESS_NAME, NAV_LINKS } from './Layout.constants';
import { LAYOUT_CLASSES } from './Layout.styles';
import type { LayoutProps } from './Layout.types';

const businessSchema = buildBusinessSchema();

/** App shell - the site-wide `Navbar` (business name + primary nav) above whatever route the app is currently rendering. */
export const Layout = ({ children }: LayoutProps) => (
  <div className={LAYOUT_CLASSES}>
    <JsonLd data={businessSchema} />
    <Navbar businessName={BUSINESS_NAME} links={NAV_LINKS} />
    {children}
  </div>
);
