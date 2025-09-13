import { Link } from 'react-router-dom';
import heroAsset from '../assets/hero.svg';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen max-h-[1000px] bg-no-repeat bg-center"
      id="heroSection"
    >
      <div className="max-ctn h-full max-md:px-5 max-md:pb-10 pt-40 flex flex-wrap justify-between items-center gap-20">
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
