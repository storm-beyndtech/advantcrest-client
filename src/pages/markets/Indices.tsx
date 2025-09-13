import Footer from '@/components/Footer';
import {
  IndicesChart,
  IndicesHeroSection,
  IndicesTableSection,
  StartTradingSection,
} from '@/components/IndicesPageSections';
import NavBar from '@/components/Navbar';
import { PopularMarkets } from '@/components/PopularMarkets';
import StepsSection from '@/components/StepsSection';

export default function Indices() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <IndicesHeroSection />
      <StartTradingSection />
      <PopularMarkets type="indices" />
      <IndicesTableSection />
      <IndicesChart />
      <StepsSection />
      <Footer />
    </main>
  );
}
