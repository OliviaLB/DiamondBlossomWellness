import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { TREATMENTS } from '@constants/services';
import { renderWithRouter } from '../../../tests';
import Services from './Services';

describe('Services', () => {
  it('renders the page title', async () => {
    render(renderWithRouter(<Services />));

    expect(await screen.findByRole('heading', { name: 'Our Treatments' })).toBeInTheDocument();
  });

  it('lists every treatment as a tab, with the first selected', async () => {
    render(renderWithRouter(<Services />));

    const tabs = await screen.findAllByRole('tab');

    expect(tabs.map((tab) => tab.textContent)).toEqual(TREATMENTS.map(({ title }) => title));
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('heading', { level: 2, name: TREATMENTS[0].title })).toBeInTheDocument();
  });

  it('shows the pricing for the selected treatment', async () => {
    render(renderWithRouter(<Services />));

    const pricing = await screen.findByRole('region', { name: 'Japanese Head Spa pricing' });

    expect(within(pricing).getByText('Express')).toBeInTheDocument();
    expect(within(pricing).getByText('45 min')).toBeInTheDocument();
    expect(within(pricing).getByText('£55')).toBeInTheDocument();
  });

  it('switches the panel when another tab is chosen', async () => {
    const user = userEvent.setup();
    render(renderWithRouter(<Services />));

    await user.click(await screen.findByRole('tab', { name: 'Facials' }));

    expect(screen.getByRole('tab', { name: 'Facials' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'Japanese Head Spa' })).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByRole('heading', { level: 2, name: 'Facials' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 2, name: 'Japanese Head Spa' })).not.toBeInTheDocument();
  });

  it('moves between tabs with the arrow keys, wrapping at either end', async () => {
    const user = userEvent.setup();
    render(renderWithRouter(<Services />));

    const first = await screen.findByRole('tab', { name: TREATMENTS[0].title });
    first.focus();

    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('tab', { name: TREATMENTS[1].title })).toHaveAttribute('aria-selected', 'true');

    await user.keyboard('{End}');
    expect(screen.getByRole('tab', { name: TREATMENTS[TREATMENTS.length - 1].title })).toHaveAttribute(
      'aria-selected',
      'true'
    );

    await user.keyboard('{ArrowDown}');
    expect(first).toHaveAttribute('aria-selected', 'true');
  });

  it('lists only the package deals that include the selected treatment', async () => {
    const user = userEvent.setup();
    render(renderWithRouter(<Services />));

    expect(await screen.findByRole('heading', { name: 'Crown & Glow' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Deep Renewal' })).not.toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: 'Hydrotherm 3D' }));

    expect(screen.getByRole('heading', { name: 'Deep Renewal' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Crown & Glow' })).not.toBeInTheDocument();
  });

  it('shows the treatment it is given, and reports a change without switching itself', async () => {
    const user = userEvent.setup();
    const onTreatmentChange = vi.fn();
    render(renderWithRouter(<Services treatmentId="deep-tissue-massage" onTreatmentChange={onTreatmentChange} />));

    expect(await screen.findByRole('tab', { name: 'Deep Tissue Massage' })).toHaveAttribute('aria-selected', 'true');

    await user.click(screen.getByRole('tab', { name: 'Facials' }));

    expect(onTreatmentChange).toHaveBeenCalledWith('facials');
    expect(screen.getByRole('tab', { name: 'Deep Tissue Massage' })).toHaveAttribute('aria-selected', 'true');
  });

  it('falls back to the first treatment for an unknown id', async () => {
    render(renderWithRouter(<Services treatmentId="nope" />));

    expect(await screen.findByRole('tab', { name: TREATMENTS[0].title })).toHaveAttribute('aria-selected', 'true');
  });
});
