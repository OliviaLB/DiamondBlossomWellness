import { PAGES } from '@constants/pages';
import { Seo } from '../../components/Seo';
import { AreasServed } from './components/AreasServed';
import { ClosingCta } from './components/ClosingCta';
import { FeatureStrip } from './components/FeatureStrip';
import { HeroBanner } from './components/HeroBanner';
import { TreatmentsGrid } from './components/TreatmentsGrid';
import { MAIN_CLASSES } from './Home.styles';

const Home = () => (
  <main className={MAIN_CLASSES}>
    <Seo {...PAGES.home} />
    <HeroBanner />
    <FeatureStrip />
    <TreatmentsGrid />
    <AreasServed />
    <ClosingCta />
  </main>
);

export default Home;
