import Footer from '@/components/Footer';
import {
  CurrencyPairsTable,
  ForexHeroSection,
  GBPUSDChart,
  StartTradingSection,
} from '@/components/ForexPageSections';
import NavBar from '@/components/Navbar';
import { PopularMarkets } from '@/components/PopularMarkets';
import StepsSection from '@/components/StepsSection';

export default function FX() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <ForexHeroSection />
      <StartTradingSection />
      <PopularMarkets type="forex" />
      <GBPUSDChart />
      <CurrencyPairsTable />
      <StepsSection />
      <Footer />
    </main>
  );
}
