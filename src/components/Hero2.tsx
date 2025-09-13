type HeroProps = {
  title: string;
  subtitle: string;
  textColor?: string;
  accentColor?: string;
  backgroundUrl?: string;
};

export default function Hero2({
  title,
  subtitle,
  textColor = 'text-gray-200',
  backgroundUrl = 'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/our-trading-infrastructure-banner-bg.webp',
}: HeroProps) {
  return (
    <section
      className="bg-gray-900 min-h-150 grid place-content-center bg-center bg-screen bg-no-repeat"
      style={{
        backgroundImage: `url('${backgroundUrl}')`,
      }}
    >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 relative z-10">
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className={`block font-bold text-5xl ${textColor}`}>{title}</h1>
        </div>

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p
            className={`text-lg ${
              textColor === 'text-gray-200' ? 'text-gray-400' : textColor
            }`}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
