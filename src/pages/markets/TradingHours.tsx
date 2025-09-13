import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import Sec7 from '@/components/Sec7';
import StepsSection from '@/components/StepsSection';
import {
  TradingHoursHeroSection,
  TradingHoursTable,
} from '@/components/TradingHoursPageSections';

export default function TradingHours() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <TradingHoursHeroSection />
      <TradingHoursTable />
      <Sec7 />
      <StepsSection />
      <Footer />
    </main>
  );
}
