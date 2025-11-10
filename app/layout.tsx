import type {ReactNode} from 'react';
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://inspection.example.com')
};

export const dynamic = 'force-dynamic';

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-body antialiased">{children}</body>
    </html>
  );
}
