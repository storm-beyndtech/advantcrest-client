import CryptoCarousel from '@/components/cryptoCarousel/CryptoCarousel';
import FAQSection from '@/components/FaqSection';
import { FeaturesSection } from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import {
  AboutSection,
  CTASection,
  HowItWorks,
  InvestmentRationale,
  MobileApp,
  SecurityOfFunds,
  Support,
  TopTraders,
  TradingPlatforms,
  TrustSecurity,
} from '@/components/HomeSecs';
import LiquiditySlides from '@/components/liquiditySlides/LiquiditySlides';
import NavBar from '@/components/Navbar';
import Pricing from '@/components/pricing/Pricing';
import Reviews from '@/components/Reviews';
import Sec5 from '@/components/Sec5';
import Sec9 from '@/components/Sec9';
import StepsSection from '@/components/StepsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-bodydark">
      <NavBar />
      <Hero />
      <AboutSection />
      <HowItWorks />
      <CryptoCarousel />
      <InvestmentRationale />
      <SecurityOfFunds />
      <TradingPlatforms />
      <TopTraders />
      <TrustSecurity />
      <MobileApp />
      <Pricing />
      <Support />
      <CTASection />
      <FeaturesSection />
      <Sec5 />
      <Reviews />
      <Sec9 />
      <LiquiditySlides />
      <StepsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
