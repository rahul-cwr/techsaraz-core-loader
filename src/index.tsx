import React, { useEffect, useState } from 'react';

const defaultQuotes = [
  'Crafting Future-Ready Digital Experiences...',
  'Integrity in Every Line of Code.',
  'Designing With Purpose. Building With Precision.',
  'Where Creativity Meets Technology.',
  'Delivering Trust Through Technology.',
  'Innovating at the Speed of Thought.',
  'Smart Solutions. Real Impact.',
  'Pixels with Purpose. Code with Character.',
  "We Don't Just Build, We Engineer.",
];

export interface TechSaraZLoaderProps {
  /** Brand name to display in the loader. Defaults to "TechSaraZ" */
  brandName?: string;
  /** Brand logo URL to display above the brand name */
  brandLogo?: string;
  /** Alt text for the brand logo. Defaults to brandName value */
  brandLogoAlt?: string;
  /** Logo width in pixels. Defaults to 80 */
  logoWidth?: number;
  /** Logo height in pixels. Defaults to 80 */
  logoHeight?: number;
  /** Custom quotes to cycle through. Defaults to TechSaraZ quotes */
  quotes?: string[];
  /** Interval in milliseconds between quote changes. Defaults to 4000 */
  quoteInterval?: number;
  /** Whether to show curly braces around the brand name. Defaults to true */
  showBraces?: boolean;
  /** Custom class name for the container */
  className?: string;
}

const TechSaraZLoader: React.FC<TechSaraZLoaderProps> = ({
  brandName = 'TechSaraZ',
  brandLogo,
  brandLogoAlt,
  logoWidth = 80,
  logoHeight = 80,
  quotes = defaultQuotes,
  quoteInterval = 4000,
  showBraces = true,
  className,
}) => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    if (quotes.length === 0) return;

    const interval = setInterval(() => {
      setQuoteIndex((prev: number) => (prev + 1) % quotes.length);
    }, quoteInterval);
    return () => clearInterval(interval);
  }, [quotes.length, quoteInterval]);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/70 text-center px-4 ${className || ''}`}>
      {/* Brand Logo */}
      {brandLogo && (
        <img
          src={brandLogo}
          alt={brandLogoAlt || brandName}
          width={logoWidth}
          height={logoHeight}
          className="mb-4 object-contain"
        />
      )}

      {/* Brand Name with Animated Dots */}
      <div className="text-2xl sm:text-3xl font-mono text-blue-800 mb-6">
        {showBraces && '{'}
        {brandName}
        <span className="dots" />
        {showBraces && '}'}
      </div>

      {/* Quote Carousel */}
      {quotes.length > 0 && (
        <p className="text-lg text-blue-900 font-medium transition-opacity duration-700 ease-in-out">
          {quotes[quoteIndex]}
        </p>
      )}

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
export { TechSaraZLoader };
