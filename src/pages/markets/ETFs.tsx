import {
  EtfsHeroSection,
  ETFsTableSection,
  StartTradingSection,
} from '@/components/EtfsPageSections';
import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import { PopularMarkets } from '@/components/PopularMarkets';
import StepsSection from '@/components/StepsSection';

export default function ETFs() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <EtfsHeroSection />
      <StartTradingSection />
      <PopularMarkets type="etfs" />
      <ETFsTableSection />
      <StepsSection />
      <Footer />
    </main>
  );
}
