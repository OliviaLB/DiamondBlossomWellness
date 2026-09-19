import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
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
});
