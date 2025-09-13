import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import Sec7 from '@/components/Sec7';
import SpreadsTableSection, {
  SpreadsHeroSection,
} from '@/components/SpreadsPageSections';
import StepsSection from '@/components/StepsSection';

export default function Spreads() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <SpreadsHeroSection />
      <SpreadsTableSection />
      <Sec7 />
      <StepsSection />
      <Footer />
    </main>
  );
}
