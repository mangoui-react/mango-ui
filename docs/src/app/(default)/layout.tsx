import type { Metadata } from 'next';
import { Nothing_You_Could_Do } from 'next/font/google';
import localFont from 'next/font/local';
import Image from 'next/image';

import Illustration from '@/public/images/hero-illustration.svg';
import Header from '@/widgets/header';
import Sidebar from '@/widgets/sidebar';

import '../styles/globals.css';
import Theme from '../theme-provider';
import AppProvider from './app-provider';

const nycd = Nothing_You_Could_Do({
  subsets: ['latin'],
  variable: '--font-nycd',
  weight: '400',
  display: 'swap',
});

const aspekta = localFont({
  src: [
    {
      path: '../../../public/fonts/Aspekta-350.woff2',
      weight: '350',
    },
    {
      path: '../../../public/fonts/Aspekta-400.woff2',
      weight: '400',
    },
    {
      path: '../../../public/fonts/Aspekta-500.woff2',
      weight: '500',
    },
    {
      path: '../../../public/fonts/Aspekta-650.woff2',
      weight: '650',
    },
  ],
  variable: '--font-aspekta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mango UI',
  description: 'A library of open-source UI components for React.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9860531631247818"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${nycd.variable} ${aspekta.variable} font-aspekta bg-white font-[350] text-slate-800 antialiased dark:bg-slate-900 dark:text-slate-200`}
      >
        <Theme>
          <AppProvider>
            <div className="flex min-h-screen flex-col overflow-hidden">
              <Header />

              {/*  Page content */}
              <main className="grow">
                <section className="relative">
                  <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2">
                    <Image
                      className="max-w-none"
                      src={Illustration}
                      priority
                      alt="Page illustration"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    {/* Main content */}
                    <div>
                      {/* Sidebar */}
                      <Sidebar />

                      {/* Page container */}
                      <div className="md:grow md:pl-64 lg:pr-6 xl:pr-0">
                        <div className="pb-8 pt-24 md:pl-6 md:pt-28 lg:pl-12">{children}</div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </AppProvider>
        </Theme>
      </body>
    </html>
  );
}
