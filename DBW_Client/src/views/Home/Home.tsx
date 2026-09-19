import { ClosingCta } from './components/ClosingCta';
import { FeatureStrip } from './components/FeatureStrip';
import { HeroBanner } from './components/HeroBanner';
import { TreatmentsGrid } from './components/TreatmentsGrid';
import { MAIN_CLASSES } from './Home.styles';

const Home = () => (
  <main className={MAIN_CLASSES}>
    <HeroBanner />
    <FeatureStrip />
    <TreatmentsGrid />
    <ClosingCta />
  </main>
);

export default Home;
