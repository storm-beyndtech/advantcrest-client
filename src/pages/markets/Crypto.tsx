import { CryptoCFDsSection, CryptoHeroSection, TradingFeaturesSection } from '@/components/CryptoPageSections';
import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import { PopularMarkets } from '@/components/PopularMarkets';
import StepsSection from '@/components/StepsSection';

export default function Crypto() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <CryptoHeroSection />
      <PopularMarkets type="crypto" />
      <TradingFeaturesSection />
      <CryptoCFDsSection />
      <StepsSection />
      <Footer />
    </main>
  );
}
