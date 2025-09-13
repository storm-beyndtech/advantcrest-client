import Footer from '@/components/Footer';
import InfrastructurePageSections from '@/components/InfrastructurePageSections';
import NavBar from '@/components/Navbar';
import StepsSection from '@/components/StepsSection';

export default function OurTradingInfrastructure() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <InfrastructurePageSections />
      <StepsSection />
      <Footer />
    </main>
  );
}
