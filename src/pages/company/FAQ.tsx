import FAQSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import StepsSection from '@/components/StepsSection';

export default function FAQ() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <FAQSection />
      <StepsSection />
      <Footer />
    </main>
  );
}
