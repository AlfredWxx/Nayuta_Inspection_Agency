import type {ReactNode} from 'react';
import type {Metadata} from 'next';
import {Merriweather} from 'next/font/google';
import './globals.css';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://inspection.example.com')
};

export const dynamic = 'force-dynamic';

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning className={merriweather.variable}>
      <body className="bg-white text-body antialiased">{children}</body>
    </html>
  );
}
