'use client';

import { useState, useEffect } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function Toc() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [currentId, setCurrentId] = useState<string>('');

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h1, h2, h3')) as HTMLElement[];

    const newHeadings = headingElements.map((el) => ({
      id: el.id,
      text: el.innerText,
      level: Number(el.tagName.replace('H', '')),
    }));

    setHeadings(newHeadings);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    const elements = document.querySelectorAll('h1, h2, h3');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getHeadingMargin = (level: number): string => {
    const indentClass = {
      1: 'ml-0',
      2: 'ml-3',
      3: 'ml-6',
    } as const;

    return indentClass[level as keyof typeof indentClass] ?? 'ml-0';
  };

  return (
    <nav className="flex pr-2 text-sm">
      <ul className="space-y-1">
        {headings.map((heading) => {
          return (
            <li
              key={heading.id}
              className={`${getHeadingMargin(heading.level)} ${
                currentId === heading.id ? 'text-indigo-400 font-semibold' : 'text-gray-400'
              } transition-colors`}
            >
              <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
