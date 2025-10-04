'use client';

import { Moon } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container mx-auto px-5 md:px-14 py-2.5 flex justify-between items-center border-b-1 border-b-gray-300">
        {/* 로고 */}
        <a href="/" className="font-bold text-xl">
          areumh.me
        </a>

        {/* 네비게이션 */}
        <nav className="flex items-center gap-3 md:gap-6">
          <Link href="/category" className="text-gray-800 hover:text-gray-500">
            category
          </Link>
          <Link href="/portfolio" className="text-gray-800 hover:text-gray-500">
            portfolio
          </Link>
          <button className="flex w-8 h-8 rounded-full justify-center items-center hover:bg-gray-200 cursor-pointer">
            <Moon />
          </button>
        </nav>
      </div>
    </header>
  );
}
