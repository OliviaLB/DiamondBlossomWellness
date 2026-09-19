import { Link } from '@tanstack/react-router';
import { getNavLinkClassName, INLINE_UNDERLINE_CLASSES } from './NavLink.styles';
import type { NavLinkProps } from './NavLink.types';

/**
 * Route-aware nav link, built on Tanstack Router's `Link` - `to` is kept as
 * a plain `string` (rather than the router's own literal route-path
 * generic) so this component stays usable without every caller fighting
 * that generic; the one `as never` cast below is the deliberate, isolated
 * opt-out for it, matching `Link`'s own guidance for untyped destinations.
 *
 * `inline` (default) is a compact text link for the desktop nav bar, with an
 * underline that grows from the centre on hover and stays fully drawn while
 * active. `block` is a full-width row for the mobile drawer.
 */
const NavLink = ({ 'data-testid': dataTestId, id, label, onClick, to, variant = 'inline' }: NavLinkProps) => (
  <Link id={id} data-testid={dataTestId} to={to as never} onClick={onClick} className={getNavLinkClassName(variant)}>
    {label}
    {variant === 'inline' && <span aria-hidden className={INLINE_UNDERLINE_CLASSES} />}
  </Link>
);

export default NavLink;
