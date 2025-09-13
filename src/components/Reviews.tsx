import { Star } from 'lucide-react';
import { AnimatedSection } from './ui/animated-section';

const Review = ({ quote, author, role, rating }: any) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 flex-shrink-0">
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-5 h-5 flex items-center justify-center mr-1 ${
              i < rating ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            <Star size={12} className="text-white fill-white" />
          </div>
        ))}
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{author}</h3>
      <h4 className="font-medium text-gray-700 mb-2 text-sm">{role}</h4>
      <p className="text-gray-700 text-sm leading-relaxed mb-3">{quote}</p>
      <div className="flex items-center text-xs text-green-600">
        <span>AdvantCrest Reviews</span>
      </div>
    </div>
  );
};

export default function Reviews() {
  const testimonials = [
    {
      quote:
        'First things first, this broker is appealing because it has a solid legal base under the belt. Renowned watch dogs in the game are supervising AdvantCrest and it definitely adds up credibility to it. Secondly, I should underline the uniqueness of their copy trading service which is entirely standalone and autonomous. These are captivating traits for me.',
      author: 'Alex Johnson',
      role: 'Copy trading works for me',
      rating: 5,
    },
    {
      quote:
        "AdvantCrest made trading accessible to everyone. For those with knowledge, and for those who lack this important part of trading. For those who have time and are willing to spend it trading, but also for those who can't afford time and have other regular jobs. How? Well, they offer an incredibly simple and interesting way to trade by copying the trades from successful traders!",
      author: 'Sarah Chen',
      role: 'Copy trading rocks!',
      rating: 5,
    },
    {
      quote:
        "I was really surprised to see such a high leverage at AdvantCrest. I'll explain why. The majority of top-tier forex brokers try to restrict leverage for their clients, maybe because they are afraid of smothing. But here I am free to apply any dicey strategy I have in my repertoire and won't concern about the security of the company.",
      author: 'Michael Rodriguez',
      role: 'Apropriate leverage',
      rating: 4,
    },
    {
      quote:
        'Am amazed at the unwavering and profession support I have receive from AdvantCrest! This is so encouraging!! THUMBS UP!',
      author: 'Emma Thompson',
      role: 'Am amazed at the unwavering and...',
      rating: 5,
    },
    {
      quote:
        "Interesting how they have managed to achieve such a high speed of execution and tight spreads at the same time. Actually it's not that interesting. I just wanted to enjoy the awesome trading conditions.",
      author: 'David Wilson',
      role: 'Speed of light.',
      rating: 5,
    },
    {
      quote: "I want understand a word about the broker's execution anyway.",
      author: 'Priya Patel',
      role: "What I've seen",
      rating: 4,
    },
    {
      quote:
        "It left me thoroughly impressed. The platform's user-friendly design, diverse investment options, social trading features, and educational resources create a well-rounded ecosystem for traders and investors. AdvantCrest has certainly set the bar high.",
      author: 'James Williams',
      role: 'My AdvantCrest experience',
      rating: 5,
    },
    {
      quote:
        'I only started to use the broker recent and I am very much impressed with all that I have seen. The customer support. WOW!',
      author: 'Olivia Garcia',
      role: 'What a platform',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-8 mx-auto max-w-7xl">
        <AnimatedSection delay={0.1} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            We're rated Excellent on Trustpilot
          </h1>

          {/* Trustpilot rating display */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center mb-2">
              <span className="text-lg font-semibold mr-3">Excellent</span>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 flex items-center justify-center mr-1 bg-green-500`}
                >
                  <Star size={16} className="text-white fill-white" />
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              Rated 4.6 / 5 based on 2,782 reviews on
              <span className="font-semibold"> Trustpilot</span>
            </p>
          </div>

          <p className="text-gray-500 text-sm mb-8">
            Showing our 4 & 5 star reviews
          </p>
        </AnimatedSection>

        {/* Reviews container with fixed height and scroll */}
        <div className="h-[600px] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Column 1 */}
            <div className="space-y-4">
              {testimonials
                .filter((_, index) => index % 4 === 0)
                .map((review, index) => (
                  <Review
                    key={`col1-${index}`}
                    quote={review.quote}
                    author={review.author}
                    role={review.role}
                    rating={review.rating}
                    delay={0.2 + index * 0.1}
                  />
                ))}
              {/* Add duplicate reviews for continuous scroll */}
              {testimonials
                .filter((_, index) => index % 4 === 0)
                .map((review, index) => (
                  <Review
                    key={`col1-dup-${index}`}
                    quote={review.quote}
                    author={review.author}
                    role={review.role}
                    rating={review.rating}
                    delay={1.0 + index * 0.1}
                  />
                ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              {testimonials
                .filter((_, index) => index % 4 === 1)
                .map((review, index) => (
                  <Review
                    key={`col2-${index}`}
                    quote={review.quote}
                    author={review.author}
                    role={review.role}
                    rating={review.rating}
                    delay={0.3 + index * 0.1}
                  />
                ))}
              {/* Add duplicate reviews for continuous scroll */}
              {testimonials
                .filter((_, index) => index % 4 === 1)
                .map((review, index) => (
                  <Review
                    key={`col2-dup-${index}`}
                    quote={review.quote}
                    author={review.author}
                    role={review.role}
                    rating={review.rating}
                    delay={1.1 + index * 0.1}
                  />
                ))}
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              {testimonials
                .filter((_, index) => index % 4 === 2)
                .map((review, index) => (
                  <Review
                    key={`col3-${index}`}
                    quote={review.quote}
                    author={review.author}
                    role={review.role}
                    rating={review.rating}
                    delay={0.4 + index * 0.1}
                  />
                ))}
              {/* Add duplicate reviews for continuous scroll */}
              {testimonials
                .filter((_, index) => index % 4 === 2)
                .map((review, index) => (
                  <Review
                    key={`col3-dup-${index}`}
                    quote={review.quote}
                    author={review.author}
                    role={review.role}
                    rating={review.rating}
                    delay={1.2 + index * 0.1}
                  />
                ))}
            </div>

            {/* Column 4 */}
            <div className="space-y-4">
              {testimonials
                .filter((_, index) => index % 4 === 3)
                .map((review, index) => (
                  <Review
                    key={`col4-${index}`}
                    quote={review.quote}
                    author={review.author}
                    role={review.role}
                    rating={review.rating}
                    delay={0.5 + index * 0.1}
                  />
                ))}
              {/* Add duplicate reviews for continuous scroll */}
              {testimonials
                .filter((_, index) => index % 4 === 3)
                .map((review, index) => (
                  <Review
                    key={`col4-dup-${index}`}
                    quote={review.quote}
                    author={review.author}
                    role={review.role}
                    rating={review.rating}
                    delay={1.3 + index * 0.1}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
