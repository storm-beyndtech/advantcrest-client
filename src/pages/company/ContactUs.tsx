import ContactForm from '@/components/ContactUs';
import Footer from '@/components/Footer';
import Hero2 from '@/components/Hero2';
import NavBar from '@/components/Navbar';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Reach out to us through any of our global offices or contact channels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* London Office */}
          <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white ml-3">London Office</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              24/25th Floor, One Canada Square<br />
              Canary Wharf<br />
              London, E14 5AB<br />
              United Kingdom
            </p>
          </div>

          {/* US Office */}
          <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white ml-3">US Office</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              85/ 88 Willow Road<br />
              Menlo Park<br />
              California 94025<br />
              USA
            </p>
          </div>

          {/* Phone Numbers */}
          <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white ml-3">Phone</h3>
            </div>
            <div className="space-y-2">
              <a 
                href="tel:+19299335402" 
                className="block text-slate-300 hover:text-white transition-colors duration-200"
              >
                +1 929 933 5402
              </a>
              <a 
                href="tel:+16072029084" 
                className="block text-slate-300 hover:text-white transition-colors duration-200"
              >
                +1 607 202 9084
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white ml-3">Business Hours</h3>
            </div>
            <div className="space-y-2 text-slate-300">
              <p>Monday - Friday</p>
              <p className="font-medium">9:00 AM - 6:00 PM</p>
              <p className="text-sm text-slate-400">(Local Time)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <Hero2
        title="Contact Support"
        subtitle="Send a message and get a response Asap"
        backgroundUrl='https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/contact-us-banner-bg%EF%B9%96v=1.webp'
      />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </main>
  );
}
