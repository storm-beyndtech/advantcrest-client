import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import visuals from '../assets/start-copy-trading.png';
import textureBg from '../assets/texture-bg.png'; // Import the background image

export default function Sec2() {
  return (
    <section className="max-ctn text-white py-20 flex items-center justify-between gap-10 flex-wrap">
      {/* Left Content */}
      <div className="space-y-6 max-w-150">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Start copying <br /> & start earning
        </h1>
        <p className="text-gray-400 text-lg font-medium sm:pr-5">
          AdvantCrest Trading provides the ability to copy successful strategies
          OR to share your own strategy and start earning when others copy it.
        </p>
        <p className="text-sm text-gray-500">
          Experience the sheer brilliance of AdvantCrest Trading - a
          revolutionary platform that effortlessly mirrors the success of
          profitable traders and lets you copy successful strategies or provide
          your own strategy to others to be copied and profit from that.
        </p>

        <Link to="/register" className="mt-5 block">
          <Button size="lg" className="hover:opacity-90 text-white text-sm">
            Start Copytrading
          </Button>
        </Link>
      </div>

      {/* Right Visual Placeholder */}
      <div
        className="grid place-content-center w-full max-w-[660px] h-[400px]"
        style={{
          backgroundImage: `url(${textureBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img
          src={visuals}
          alt="Copy Trading Visual"
          className="w-full object-cover mt-[-60px]"
        />
      </div>
    </section>
  );
}
