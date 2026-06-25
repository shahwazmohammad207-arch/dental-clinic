import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Lumina Dental | Premium Dental Care',
  description: 'Experience world-class dental care in a luxurious, modern setting.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans text-gray-800 antialiased bg-white selection:bg-teal-100 selection:text-teal-900" suppressHydrationWarning>{children}</body>
    </html>
  );
}
