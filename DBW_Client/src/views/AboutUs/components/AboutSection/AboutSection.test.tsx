import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AboutSection from './AboutSection';

describe('AboutSection', () => {
  it('renders its content under a heading that names the section', () => {
    render(
      <AboutSection heading="How did I get involved?">
        <p>My story</p>
      </AboutSection>
    );

    expect(screen.getByRole('heading', { level: 2, name: 'How did I get involved?' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'How did I get involved?' })).toHaveTextContent('My story');
  });
});
