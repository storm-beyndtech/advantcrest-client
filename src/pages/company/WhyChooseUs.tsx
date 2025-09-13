import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import Sec7 from '@/components/Sec7';
import StepsSection from '@/components/StepsSection';
import WhyChooseUsSections from '@/components/WhyChooseUsPageSections';

export default function WhyChooseUs() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <WhyChooseUsSections />
      <Sec7 />
      <StepsSection />
      <Footer />
    </main>
  );
}
