import Footer from '@/components/Footer';
import Hero2 from '@/components/Hero2';
import NavBar from '@/components/Navbar';
import StepsSection from '@/components/StepsSection';

const AwardsSection = () => {
  const awardImages = [
    'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/about-us-award-row1-img1.webp',
    'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/about-us-award-row1-img2.webp',
    'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/about-us-award-row1-img3.webp',
    'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/about-us-award-row1-img4.webp',
    'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/about-us-award-row1-img5.webp',
    'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/about-us-award-row1-img6.webp',
    'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/about-us-award-row1-img7.webp',
    'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/about-us-award-row1-img8.webp',
    'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/about-us-award-row1-img9.webp',
    'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/about-us-award-row1-img10.webp',
    'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/about-us-award-row1-img11.webp',
    'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/about-us-award-row1-img12.webp',
    'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/about-us-award-row1-img13.webp',
    'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/about-us-award-row1-img14.webp',
    'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/about-us-award-row1-img15.webp',
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Our Awards
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {awardImages.map((imageUrl, index) => (
            <div key={index} className="group relative">
              <div className="w-48 h-48 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <img
                  src={imageUrl}
                  alt={`Award ${index + 1}`}
                  className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Awards() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <Hero2
        title="Exlore Awards"
        subtitle="Trade up to an award-winning broker"
      />
      <AwardsSection />
      <StepsSection />
      <Footer />
    </main>
  );
}
