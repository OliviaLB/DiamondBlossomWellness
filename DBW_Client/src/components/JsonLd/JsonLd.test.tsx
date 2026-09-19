import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import JsonLd from './JsonLd';

const scriptText = (container: HTMLElement) =>
  container.querySelector('script[type="application/ld+json"]')?.textContent;

describe('JsonLd', () => {
  it('renders the data as an application/ld+json script', () => {
    const { container } = render(
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'DaySpa', name: 'Spa' }} />
    );

    expect(JSON.parse(scriptText(container) ?? '')).toEqual({
      '@context': 'https://schema.org',
      '@type': 'DaySpa',
      name: 'Spa'
    });
  });

  it('accepts several objects', () => {
    const { container } = render(<JsonLd data={[{ '@type': 'A' }, { '@type': 'B' }]} />);

    expect(JSON.parse(scriptText(container) ?? '')).toHaveLength(2);
  });

  it('cannot be broken out of by a value containing a closing script tag', () => {
    const { container } = render(<JsonLd data={{ name: '</script><img src=x onerror=alert(1)>' }} />);

    expect(container.innerHTML).not.toContain('</script><img');
    expect(JSON.parse(scriptText(container) ?? '').name).toBe('</script><img src=x onerror=alert(1)>');
  });
});
