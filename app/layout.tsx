import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: '이것저것 블로그',
    template: '%s | 이것저것 블로그',
  },
  description: 'areumh.me',
  openGraph: {
    title: '이것저것 블로그',
    description: 'areumh.me',
    url: 'https://areumh.me',
    siteName: '이것저것 블로그',
    images: [
      {
        url: '/image/areumh-thumbnail.png',
        width: 1200,
        height: 630,
        alt: '이것저것 블로그',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '이것저것 블로그',
    description: 'areumh.me',
    images: '/image/areumh-thumbnail.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex flex-col flex-grow w-full mx-auto px-7 md:px-20 py-5 md:py-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
