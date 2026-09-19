import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PAGES } from '@constants/pages';
import { renderWithRouter } from '../../../tests';
import Home from './Home';

describe('Home', () => {
  it('renders the hero heading', async () => {
    render(renderWithRouter(<Home />));

    expect(await screen.findByRole('heading', { name: 'Restore your crown, renew your glow.' })).toBeInTheDocument();
  });

  it('renders a card for each signature treatment', async () => {
    render(renderWithRouter(<Home />));

    expect(await screen.findByRole('heading', { name: 'Japanese Head Spa' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Facials' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Scalp Massage' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Hydrotherm 3D' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Relaxation Massage' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Deep Tissue Massage' })).toBeInTheDocument();
  });

  it('names the towns it serves in a visible section', async () => {
    render(renderWithRouter(<Home />));

    expect(
      await screen.findByRole('heading', { name: 'Wellness treatments in Farnborough, Camberley and Aldershot' })
    ).toBeInTheDocument();
    ['Farnborough', 'Camberley', 'Aldershot'].forEach((town) => {
      expect(screen.getAllByText(town).length).toBeGreaterThan(0);
    });
  });

  it('sets the home page title and description', async () => {
    render(renderWithRouter(<Home />));

    await screen.findByRole('heading', { name: 'Restore your crown, renew your glow.' });

    expect(document.title).toBe(PAGES.home.title);
    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute('content', PAGES.home.description);
  });
});
