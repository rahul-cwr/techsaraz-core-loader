# TechSaraZ Loader

An animated full-screen React loader with rotating inspirational quotes. Fully customizable with dynamic brand name, logo, and quotes.

## Installation

```bash
npm install @techsaraz/core-loader
```

## Usage

### Basic Usage (with TechSaraZ defaults)

```tsx
import TechSaraZLoader from '@techsaraz/core-loader';

function App() {
  return <TechSaraZLoader />;
}
```

### Custom Brand Name

```tsx
import TechSaraZLoader from '@techsaraz/core-loader';

function App() {
  return <TechSaraZLoader brandName="MyBrand" />;
}
```

### With Brand Logo

```tsx
import TechSaraZLoader from '@techsaraz/core-loader';

function App() {
  return (
    <TechSaraZLoader 
      brandName="MyCompany"
      brandLogo="/logo.png"
      logoWidth={100}
      logoHeight={100}
    />
  );
}
```

### Custom Quotes

```tsx
import TechSaraZLoader from '@techsaraz/core-loader';

function App() {
  const customQuotes = [
    'Loading your experience...',
    'Almost there...',
    'Preparing something awesome...',
  ];

  return (
    <TechSaraZLoader 
      brandName="MyApp"
      quotes={customQuotes}
      quoteInterval={3000}
    />
  );
}
```

### Without Braces

```tsx
import TechSaraZLoader from '@techsaraz/core-loader';

function App() {
  return <TechSaraZLoader brandName="MyBrand" showBraces={false} />;
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `brandName` | `string` | `"TechSaraZ"` | Brand name to display in the loader |
| `brandLogo` | `string` | `undefined` | URL of the brand logo to display above the brand name |
| `brandLogoAlt` | `string` | `brandName` | Alt text for the brand logo |
| `logoWidth` | `number` | `80` | Logo width in pixels |
| `logoHeight` | `number` | `80` | Logo height in pixels |
| `quotes` | `string[]` | Default TechSaraZ quotes | Custom quotes to cycle through |
| `quoteInterval` | `number` | `4000` | Interval in milliseconds between quote changes |
| `showBraces` | `boolean` | `true` | Whether to show curly braces around the brand name |
| `className` | `string` | `undefined` | Custom class name for the container |

## Styling

The loader uses Tailwind CSS classes. Make sure you have Tailwind CSS configured in your project for proper styling.

## License

MIT
