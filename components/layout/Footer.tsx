import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center py-6 gap-5">
      <div className="flex gap-7 text-2xl items-center">
        <a href="https://github.com/areumH" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/%EC%95%84%EB%A6%84-%ED%95%9C-181918387/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-6 h-6"/>
        </a>
        <a href="https://velog.io/@areumh__9/posts" target="_blank" rel="noopener noreferrer">
          <SiVelog className="w-5 h-5"/>
        </a>
      </div>
      <p className="text-sm">© 2025 한아름.</p>
    </footer>
  );
}
