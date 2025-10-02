import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';

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
      <body>
        <Header />
        <main className="container mx-auto px-10 py-8">{children}</main>
      </body>
    </html>
  );
}
