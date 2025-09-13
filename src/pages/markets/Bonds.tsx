import {
  BondMarketsSection,
  StartTradingSection,
} from '@/components/BondPageSections';
import Footer from '@/components/Footer';
import Hero2 from '@/components/Hero2';
import NavBar from '@/components/Navbar';
import { PopularMarkets } from '@/components/PopularMarkets';
import StepsSection from '@/components/StepsSection';
import bondBg from '../../assets/bonds/bonds-banner-bg1.webp';

export default function Bonds() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <Hero2
        title="Bonds"
        subtitle="Start trading futures of bond markets"
        backgroundUrl={bondBg}
      />
      <StartTradingSection />
      <PopularMarkets type="bonds" />
      <BondMarketsSection />
      <StepsSection />
      <Footer />
    </main>
  );
}
