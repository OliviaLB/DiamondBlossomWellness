import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FooterColumn from './FooterColumn';

describe('FooterColumn', () => {
  it('renders its title as a heading, followed by its content', () => {
    render(<FooterColumn title="Explore">column content</FooterColumn>);

    expect(screen.getByRole('heading', { name: 'Explore' })).toBeInTheDocument();
    expect(screen.getByText('column content')).toBeInTheDocument();
  });
});
