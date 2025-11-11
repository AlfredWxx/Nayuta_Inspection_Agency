import type {Config} from 'tailwindcss';

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './messages/**/*.{ts,tsx,mdx}',
    './styles/**/*.css'
  ],
  theme: {
    extend: {
      colors: {
        brand: 'var(--color-brand)',
        surface: 'var(--color-surface)',
        body: 'var(--color-body)',
        muted: 'var(--color-muted)'
      },
      fontFamily: {
        brand: ['var(--font-brand)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'Merriweather', 'serif']
      },
      boxShadow: {
        subtle: 'var(--shadow-subtle)'
      },
      maxWidth: {
        content: 'var(--layout-max-width)'
      }
    }
  },
  plugins: []
} satisfies Config;
