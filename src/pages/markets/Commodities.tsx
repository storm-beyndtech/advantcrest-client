import {
  CommoditiesChart,
  CommoditiesHeroSection,
  CommoditiesTable,
  StartTradingSection,
} from '@/components/CommoditiesPageSections';
import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import { PopularMarkets } from '@/components/PopularMarkets';
import StepsSection from '@/components/StepsSection';

export default function Commodities() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <CommoditiesHeroSection />
      <StartTradingSection />
      <PopularMarkets type="commodity" />
      <CommoditiesTable />
      <CommoditiesChart />
      <StepsSection />
      <Footer />
    </main>
  );
}
