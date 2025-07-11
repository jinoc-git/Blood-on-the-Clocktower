import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

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
        <main className=" bg-[url(https://i.imgur.com/dXOYa9N.png/GK41rZ4.png)] min-h-screen bg-contain bg-fixed">
          {children}
        </main>
        <Script src="/liquid-glass.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
