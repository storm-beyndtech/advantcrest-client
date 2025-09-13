import { TradingFeaturesSection } from '@/components/CryptoPageSections';
import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import { PopularMarkets } from '@/components/PopularMarkets';
import {
  ShareCDFsChart,
  ShareCDFsHeroSection,
  ShareCFDsTabble,
  StartTradingSection,
} from '@/components/ShareCDFsPageSections';
import StepsSection from '@/components/StepsSection';

export default function ShareCFDs() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <ShareCDFsHeroSection />
      <PopularMarkets type="shareCFDs" />
      <StartTradingSection />
      <TradingFeaturesSection />
      <ShareCFDsTabble />
      <ShareCDFsChart />
      <StepsSection />
      <Footer />
    </main>
  );
}
