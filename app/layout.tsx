import './globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import Footer from '@/components/footer';
import Header from '@/components/header';
import ThemeSwitch from '@/components/theme-switch';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sports Betting Odds | { biaji }',
  description:
    'Sports Betting Odds and Spreads for all in-season sports. NFL, NHL, NBA, etc.',
  // metadataBase: new URL('https://bijan-parvin-portfolio-fe.vercel.app/'),
  applicationName: 'Sports Betting Odds | { biaji }',
  authors: { name: 'biaji' },
  generator: 'react, nextjs, vercel, tailwind, typescript',
  keywords: [
    'react',
    'nextjs',
    'vercel',
    'tailwind',
    'typescript',
    'portfolio',
  ],
  themeColor: 'dark',
  creator: 'biaji',
  openGraph: {
    type: 'website',
    title: 'Sports Betting Odds | { biaji }',
    description:
      'Sports Betting Odds and Spreads for all in-season sports. NFL, NHL, NBA, etc.',
    emails: 'bparvin12@gmail.com',
    siteName: 'Sports Betting Odds | { biaji }',
    locale: 'en-US',
    url: 'https://bijan-parvin-portfolio-fe.vercel.app/',
  },
  twitter: {
    site: 'Sports Betting Odds | { biaji }',
    creator: 'biaji',
    description:
      'Sports Betting Odds and Spreads for all in-season sports. NFL, NHL, NBA, etc.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-tan pt-28 text-policeBlue dark:bg-sky-950 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        {/* top */}
        <div className="absolute right-[11rem] top-[-6rem] -z-10 size-[31.25rem] rounded-full bg-white/50 blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        {/* bottom */}
        <div className="absolute bottom-[10rem] right-[11rem] -z-10 size-[31.25rem] rounded-full blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
        <div className="absolute bottom-[1rem] left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <GoogleAnalytics
              gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
            />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
