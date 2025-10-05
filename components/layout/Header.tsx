'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header() {
  return (
    <header>
      <div className="container mx-auto px-5 md:px-14 py-2.5 flex justify-between items-center border-b border-b-gray-300 dark:border-b-gray-700">
        {/* 로고 */}
        <a href="/" className="font-bold text-xl hover:underline">
          areumh.me
        </a>

        {/* 네비게이션 */}
        <nav className="flex items-center gap-3 md:gap-6">
          <Link href="/category" className="text-gray-800 dark:text-gray-300 hover:text-gray-500">
            category
          </Link>
          <Link href="/portfolio" className="text-gray-800 dark:text-gray-300 hover:text-gray-500">
            portfolio
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
