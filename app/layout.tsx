import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Provider from './provider';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '시계탑 메모 시트',
  description: '시계탑에 흐른 피 메모 시트',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" bg-[url(https://i.imgur.com/ycbm5eM.png/GK41rZ4.png)] min-h-screen bg-contain bg-fixed">
          <Provider>{children}</Provider>
        </main>
        {/* <main className="min-h-screen">
          <Image
            src="https://i.imgur.com/m37opFZ.png"
            alt="Background"
            fill
            quality={75}
            className="fixed w-full h-full z-[-1] object-fit"
          />
        <Provider>{children}</Provider>
        </main> */}
        {/* <Script src="/liquid-glass.js" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}
