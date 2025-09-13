import { Link } from 'react-router-dom';
import heroAsset from '../assets/hero.svg';

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-no-repeat bg-center py-20 sm:py-28 md:py-32 lg:py-40 min-h-[500px] max-h-[900px] flex items-center"
      id="heroSection"
    >
      <div className="max-ctn w-full flex flex-wrap justify-between items-center gap-12 px-5">
        <div className="max-w-180">
          <p className="text-[#636262] text-lg mb-5">
            Empower your financial journey with <br />
            our cutting-edge stock trading platform.
          </p>
          <h1 className="text-3xl sm:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-tr from-gray-50/70 via-white to-gray-50/40 mb-4 md:mb-10 lg:mb-12">
            Expert Trading Skills Only One Click Away.
          </h1>
          <Link to="/login" className="primaryBtn">
            Get Started <span className="ml-3">&rarr;</span>
          </Link>
        </div>
        <div className="w-100">
          <img className="w-full" src={heroAsset} alt="trade" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
