import { faCalendarCheck, faClock, faEnvelope, faPhone } from '@awesome.me/kit-c05db0aa61/icons/sharp/light';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@components/Button';
import { Typography } from '@components/Typography';
import { BUSINESS_NAME, SERVICE_AREAS_TEXT } from '@constants/business';
import { TREATMENTS } from '@constants/services';
import { SITE } from '@constants/site';
import { NAV_LINKS } from '../../Layout.constants';
import { FooterColumn } from './components/FooterColumn';
import { FOOTER_TAGLINE, OPENING_DAYS } from './Footer.constants';
import {
  BOOK_BUTTON_WRAPPER_CLASSES,
  BOTTOM_BAR_CLASSES,
  BRAND_CLASSES,
  BRAND_LINK_CLASSES,
  DETAIL_CLASSES,
  DETAIL_ICON_CLASSES,
  FOOTER_CLASSES,
  GRID_CLASSES,
  INNER_CLASSES,
  LINK_CLASSES,
  LIST_CLASSES
} from './Footer.styles';

/**
 * Site-wide footer - the business's name and tagline, links to every page and treatment, opening days and
 * a booking prompt, above a copyright line. Telephone and email only appear once they are set in `SITE`.
 */
const Footer = () => {
  const navigate = useNavigate();
  const { email, telephone } = SITE;

  return (
    <footer className={FOOTER_CLASSES}>
      <div className={INNER_CLASSES}>
        <div className={GRID_CLASSES}>
          <div className={BRAND_CLASSES}>
            <Link to="/" className={BRAND_LINK_CLASSES}>
              {BUSINESS_NAME}
            </Link>
            <Typography variant="body2" colour="secondary">
              {FOOTER_TAGLINE}
            </Typography>
          </div>

          <FooterColumn title="Explore">
            <ul className={LIST_CLASSES}>
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to as never} className={LINK_CLASSES}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Treatments">
            <ul className={LIST_CLASSES}>
              {TREATMENTS.map(({ id, title }) => (
                <li key={id}>
                  <Link to="/services" search={{ treatment: id }} className={LINK_CLASSES}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Visit us">
            <ul className={LIST_CLASSES}>
              <li className={DETAIL_CLASSES}>
                <FontAwesomeIcon icon={faClock} className={DETAIL_ICON_CLASSES} />
                <span>Open {OPENING_DAYS}</span>
              </li>
              {telephone && (
                <li className={DETAIL_CLASSES}>
                  <FontAwesomeIcon icon={faPhone} className={DETAIL_ICON_CLASSES} />
                  <a href={`tel:${telephone.replace(/\s+/g, '')}`} className={LINK_CLASSES}>
                    {telephone}
                  </a>
                </li>
              )}
              {email && (
                <li className={DETAIL_CLASSES}>
                  <FontAwesomeIcon icon={faEnvelope} className={DETAIL_ICON_CLASSES} />
                  <a href={`mailto:${email}`} className={LINK_CLASSES}>
                    {email}
                  </a>
                </li>
              )}
            </ul>
            <div className={BOOK_BUTTON_WRAPPER_CLASSES}>
              <Button
                label="Book a Consultation"
                tone="secondary"
                variant="outlined"
                size="md"
                endIcon={<FontAwesomeIcon icon={faCalendarCheck} />}
                onClick={() => navigate({ to: '/contact-us' })}
              />
            </div>
          </FooterColumn>
        </div>

        <div className={BOTTOM_BAR_CLASSES}>
          <Typography variant="body2" colour="muted">
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </Typography>
          <Typography variant="body2" colour="muted">
            Serving {SERVICE_AREAS_TEXT}
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
