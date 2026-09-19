import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import BulletList from './BulletList';

describe('BulletList', () => {
  it('renders a list item per entry', () => {
    render(<BulletList items={['One', 'Two', 'Three']} />);

    expect(screen.getAllByRole('listitem').map((item) => item.textContent)).toEqual(['One', 'Two', 'Three']);
  });

  it('is a single column unless two are asked for', () => {
    const { rerender } = render(<BulletList items={['One']} />);
    expect(screen.getByRole('list')).not.toHaveClass('sm:grid-cols-2');

    rerender(<BulletList items={['One']} columns={2} />);
    expect(screen.getByRole('list')).toHaveClass('sm:grid-cols-2');
  });
});
