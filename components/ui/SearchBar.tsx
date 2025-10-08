import { InputHTMLAttributes } from 'react';
import { IoIosSearch } from 'react-icons/io';

export default function SearchBar(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex md:mx-3 px-3 md:px-4 py-2 md:py-3 gap-2 rounded-full bg-gray-100 dark:bg-gray-700">
      <IoIosSearch className="w-7 h-7 text-gray-500" />
      <input type="text" placeholder="포스트를 검색해 보세요!" className="w-full outline-0 text-sm md:text-base " {...props} />
    </div>
  );
}
