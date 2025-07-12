import  React, { useEffect, useState } from 'react';

const quotes = [
  'Crafting Future-Ready Digital Experiences...',
  'Integrity in Every Line of Code.',
  'Designing With Purpose. Building With Precision.',
  'Where Creativity Meets Technology.',
  'Delivering Trust Through Technology.',
  'Innovating at the Speed of Thought.',
  'Smart Solutions. Real Impact.',
  'Pixels with Purpose. Code with Character.',
  'We Don’t Just Build, We Engineer.',
];

const TechSaraZLoader: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev: number) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/70 text-center px-4">
      {/* TechSaraZ with Animated Dots */}
      <div className="text-2xl sm:text-3xl font-mono text-blue-800 mb-6">
        {'{'}TechSaraZ
        <span className="dots" />
        {'}'}
      </div>

      {/* Quote Carousel */}
      <p className="text-lg text-blue-900 font-medium transition-opacity duration-700 ease-in-out">
        {quotes[quoteIndex]}
      </p>

      {/* Dot animation style */}
      <style>{`
        .dots::after {
          content: '';
          animation: dots 1.5s steps(4, end) infinite;
        }
        @keyframes dots {
          0%   { content: ''; }
          25%  { content: '.'; }
          50%  { content: '..'; }
          75%  { content: '...'; }
          100% { content: ''; }
        }
      `}</style>
    </div>
  );
};

export default TechSaraZLoader;