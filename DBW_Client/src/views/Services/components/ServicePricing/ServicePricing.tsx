import { faArrowRight } from '@awesome.me/kit-c05db0aa61/icons/classic/solid';
import { faGem } from '@awesome.me/kit-c05db0aa61/icons/sharp/light';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from '@tanstack/react-router';
import { formatDuration, formatPrice, getPackagesForTreatment } from '@utils/pricing';
import { Button, Card, CardContent, CardFooter, Chip } from '../../../../../components';
import Typography from '../../../../../components/stories/Typography/Typography';
import {
  CARD_BODY_CLASSES,
  CARD_CLASSES,
  GROUP_CLASSES,
  INCLUDES_ITEM_CLASSES,
  INCLUDES_LIST_CLASSES,
  INCLUDES_MARKER_CLASSES,
  PACKAGE_GRID_CLASSES,
  PACKAGE_HEADER_CLASSES,
  PRICE_GRID_CLASSES,
  PRICE_CLASSES,
  PRICE_ROW_CLASSES,
  SECTION_CLASSES,
  STRUCK_PRICE_CLASSES
} from './ServicePricing.styles';
import type { ServicePricingProps } from './ServicePricing.types';

/** The pricing block beneath a treatment - a card per session length, then any package deals that include the treatment. */
export const ServicePricing = ({ treatment }: ServicePricingProps) => {
  const navigate = useNavigate();
  const packages = getPackagesForTreatment(treatment.id);
  const book = () => navigate({ to: '/contact-us' });

  return (
    <section className={SECTION_CLASSES} aria-label={`${treatment.title} pricing`}>
      <div className={GROUP_CLASSES}>
        <Typography as="h3" variant="h5">
          Pricing
        </Typography>

        <div className={PRICE_GRID_CLASSES}>
          {treatment.options.map((option) => (
            <Card key={option.id} fullWidth className={CARD_CLASSES}>
              <div className={CARD_BODY_CLASSES}>
                <CardContent paddingX="3x" paddingY="3x">
                  <Typography variant="subtitle1">{option.label}</Typography>
                  <Typography variant="body2" colour="muted">
                    {formatDuration(option.minutes)}
                  </Typography>
                  <p className={PRICE_ROW_CLASSES}>
                    <span className={PRICE_CLASSES}>{formatPrice(option.price)}</span>
                  </p>
                </CardContent>
                <CardFooter paddingX="3x">
                  <Button label="Book now" variant="text" tone="secondary" size="sm" onClick={book} />
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {packages.length > 0 && (
        <div className={GROUP_CLASSES}>
          <Typography as="h3" variant="h5">
            Package deals
          </Typography>

          <div className={PACKAGE_GRID_CLASSES}>
            {packages.map(({ deal, lines, minutes, saving, value }) => (
              <Card key={deal.id} fullWidth background="card-raised" border="secondary" className={CARD_CLASSES}>
                <div className={CARD_BODY_CLASSES}>
                  <CardContent paddingX="3x" paddingY="3x">
                    <div className={PACKAGE_HEADER_CLASSES}>
                      <Typography as="h4" variant="h6">
                        {deal.title}
                      </Typography>
                      {saving > 0 && <Chip label={`Save ${formatPrice(saving)}`} colour="tertiary" size="sm" />}
                    </div>
                    <Typography variant="body2" colour="secondary">
                      {deal.description}
                    </Typography>

                    <ul className={INCLUDES_LIST_CLASSES}>
                      {lines.map(({ option, treatment: item }) => (
                        <li key={`${item.id}-${option.id}`} className={INCLUDES_ITEM_CLASSES}>
                          <FontAwesomeIcon icon={faGem} className={INCLUDES_MARKER_CLASSES} />
                          <span>
                            {item.title} &middot; {formatDuration(option.minutes)}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <p className={PRICE_ROW_CLASSES}>
                      <span className={PRICE_CLASSES}>{formatPrice(deal.price)}</span>
                      {saving > 0 && <span className={STRUCK_PRICE_CLASSES}>{formatPrice(value)}</span>}
                      <Typography as="span" variant="body2" colour="muted">
                        &middot; {formatDuration(minutes)}
                      </Typography>
                    </p>
                  </CardContent>
                  <CardFooter paddingX="3x">
                    <Button
                      label="Book package"
                      variant="text"
                      tone="secondary"
                      size="sm"
                      endIcon={<FontAwesomeIcon icon={faArrowRight} />}
                      onClick={book}
                    />
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
