import { Typography } from '@components/Typography';
import { PAGES } from '@constants/pages';
import { Seo } from '@appComponents/Seo';
import { AboutSection } from './components/AboutSection';
import { BulletList } from './components/BulletList';
import { ABOUT_SECTIONS, INTRO_HEADING, INTRO_LEAD } from './AboutUs.constants';
import { CONTENT_CLASSES, HEADER_CLASSES, MAIN_CLASSES } from './AboutUs.styles';

/** Who's behind the business - an introduction, then a card each for qualifications, approach and background. */
const AboutUs = () => (
  <main className={MAIN_CLASSES}>
    <Seo {...PAGES.aboutUs} />

    <div className={HEADER_CLASSES}>
      <Typography variant="subtitle2" colour="secondary" textAlign="center" className="tracking-[0.3em] uppercase">
        About Us
      </Typography>
      <Typography variant="h1" textAlign="center">
        {INTRO_HEADING}
      </Typography>
      <Typography variant="body1" colour="secondary" textAlign="center">
        {INTRO_LEAD}
      </Typography>
    </div>

    <div className={CONTENT_CLASSES}>
      {ABOUT_SECTIONS.map(({ closingParagraphs = [], heading, id, list, listColumns, listIntro, paragraphs }) => (
        <AboutSection key={id} heading={heading}>
          {paragraphs.map((paragraph) => (
            <Typography key={paragraph} variant="body1" colour="secondary" textAlign="justify">
              {paragraph}
            </Typography>
          ))}
          {listIntro && (
            <Typography variant="body1" colour="secondary">
              {listIntro}
            </Typography>
          )}
          {list && <BulletList items={list} columns={listColumns} />}
          {closingParagraphs.map((paragraph) => (
            <Typography key={paragraph} variant="body1" colour="secondary" textAlign="justify">
              {paragraph}
            </Typography>
          ))}
        </AboutSection>
      ))}
    </div>
  </main>
);

export default AboutUs;
