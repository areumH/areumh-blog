import { InputHTMLAttributes } from 'react';
import { IoIosSearch } from 'react-icons/io';

type SearchBarProps = InputHTMLAttributes<HTMLInputElement>;

export default function SearchBar(props: SearchBarProps) {
  return (
    <div className="flex md:mx-3 px-4 py-3 gap-2 rounded-full bg-gray-100">
      <IoIosSearch className="w-7 h-7 text-gray-500" />
      <input type="text" placeholder="포스트를 검색해 보세요!" className="w-full outline-0" {...props} />
    </div>
  );
}
