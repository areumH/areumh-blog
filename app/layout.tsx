import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: '이것저것 블로그',
  description: 'areumh.me',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-col flex-grow container mx-auto px-7 md:px-14 py-4 md:py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
