import ContactForm from '@/components/ContactUs';
import Footer from '@/components/Footer';
import Hero2 from '@/components/Hero2';
import NavBar from '@/components/Navbar';

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <Hero2
        title="Contact Support"
        subtitle="Send a message and get a response Asap"
        backgroundUrl='https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/contact-us-banner-bg%EF%B9%96v=1.webp'
      />
      <ContactForm />
      <Footer />
    </main>
  );
}
