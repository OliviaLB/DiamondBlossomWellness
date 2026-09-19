import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SERVICE_AREAS } from '@constants/business';
import { PAGES } from '@constants/pages';
import AboutUs from './AboutUs';
import { ABOUT_SECTIONS, INTRO_HEADING, INTRO_LEAD } from './AboutUs.constants';

const section = (id: string) => {
  const { heading } = ABOUT_SECTIONS.find((candidate) => candidate.id === id)!;

  return screen.getByRole('region', { name: heading });
};

describe('AboutUs', () => {
  it('introduces the founder', () => {
    render(<AboutUs />);

    expect(screen.getByRole('heading', { level: 1, name: INTRO_HEADING })).toBeInTheDocument();
    expect(screen.getByText(INTRO_LEAD)).toBeInTheDocument();
  });

  it('has a titled section for each part of the story', () => {
    render(<AboutUs />);

    ABOUT_SECTIONS.forEach(({ heading }) => {
      expect(screen.getByRole('region', { name: heading })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2, name: heading })).toBeInTheDocument();
    });
  });

  it('says why the studio was started, and which towns it serves', () => {
    render(<AboutUs />);

    const why = section('why-i-started');

    expect(why).toHaveTextContent('luxury spa');
    SERVICE_AREAS.forEach((town) => expect(why).toHaveTextContent(town));
  });

  it('lists the Pilates qualifications, in order after their lead-in', () => {
    render(<AboutUs />);

    const body = section('understanding-the-body');
    const text = body.textContent ?? '';

    expect(within(body).getAllByRole('listitem')).toHaveLength(4);
    expect(within(body).getByText('Pilates Specialist for Osteopenia/Osteoporosis')).toBeInTheDocument();
    expect(text.indexOf('passed (with distinctions) Pilates exams in:')).toBeLessThan(
      text.indexOf('Pilates Specialist Back4Good Practitioner')
    );
  });

  it('describes the osteoporosis specialism and 3D massage without promising a cure', () => {
    render(<AboutUs />);

    const specialism = section('osteoporosis-and-3d-massage');

    expect(specialism).toHaveTextContent('osteoporosis');
    expect(specialism).toHaveTextContent('3D massage');
    expect(specialism).toHaveTextContent('only a few practitioners in the UK');
    expect(specialism.textContent).not.toMatch(/\b(cure|cures|treats osteoporosis|reverses)\b/i);
  });

  it('mentions osteopathy only as something studied, never as a qualification or a service', () => {
    render(<AboutUs />);

    const text = document.body.textContent ?? '';

    expect(text.match(/osteopathy/gi)).toHaveLength(1);
    expect(text).toContain('I have also studied Osteopathy');
    // "Osteopath" is a protected title, and she did not finish the degree.
    expect(text).not.toMatch(/\bosteopaths?\b/i);
    expect(text).not.toMatch(/\btrainee\b/i);
    expect(text).not.toMatch(/University College of Osteopathy|British School of Osteopathy/i);
  });

  it('sets its own title and description', () => {
    render(<AboutUs />);

    expect(document.title).toBe(PAGES.aboutUs.title);
    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      PAGES.aboutUs.description
    );
  });
});
