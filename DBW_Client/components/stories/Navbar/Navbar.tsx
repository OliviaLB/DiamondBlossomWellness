import { useEffect, useState } from 'react';
import { faBars } from '@awesome.me/kit-c05db0aa61/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@tanstack/react-router';
import { Drawer } from '../Drawer';
import { IconButton } from '../IconButton';
import { NavLink } from '../NavLink';
import {
  BRAND_CLASSES,
  DESKTOP_LINKS_CLASSES,
  DRAWER_LINKS_CLASSES,
  getNavClassName,
  MENU_BUTTON_WRAPPER_CLASSES
} from './Navbar.styles';
import type { NavbarProps } from './Navbar.types';

/** Scroll distance, in pixels, past which the nav bar switches from transparent to its "glassy" state. */
const SCROLL_THRESHOLD = 8;

/**
 * Site-wide, mobile-first nav bar. Transparent at the top of the page, so it
 * can sit over a hero section, then crossfades to a frosted "glassy" surface
 * (`backdrop-blur` over a translucent tint of `surface-app`) once the page
 * scrolls past `SCROLL_THRESHOLD` - see `Navbar.styles.ts`.
 *
 * `businessName` renders on the left as a link home. `links` render inline
 * on desktop (`md:` and up); below that they collapse behind a hamburger
 * button into a `Drawer`, which closes itself again whenever a link inside
 * it is clicked.
 */
const Navbar = ({ businessName, 'data-testid': dataTestId, id, links }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <nav id={id} data-testid={dataTestId} className={getNavClassName(isScrolled)}>
      <Link to="/" className={BRAND_CLASSES}>
        {businessName}
      </Link>

      <div className={DESKTOP_LINKS_CLASSES}>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} label={link.label} />
        ))}
      </div>

      <div className={MENU_BUTTON_WRAPPER_CLASSES}>
        <IconButton
          aria-label="Open menu"
          variant="text"
          tone="secondary"
          icon={<FontAwesomeIcon icon={faBars} />}
          onClick={() => setIsDrawerOpen(true)}
        />
      </div>

      <Drawer aria-label="Site navigation" open={isDrawerOpen} onClose={closeDrawer}>
        <div className={DRAWER_LINKS_CLASSES}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} label={link.label} variant="block" onClick={closeDrawer} />
          ))}
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
