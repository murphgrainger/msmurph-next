import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Nav = () => (
    <nav className="z-10 w-full flex justify-between items-center p-10">
      <Link href='/'>
        <img src='/assets/oliveoyl.png' alt="Logo" className="h-12" />
      </Link>
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/your-linkedin-id/" target="_blank" rel="noreferrer" className="hover:text-red-600">
          <FaTwitter size={30}/>
          </a>
          <a href="https://www.twitter.com/your-twitter-handle/" target="_blank" rel="noreferrer" className="hover:text-red-600">
          <FaLinkedin size={30}/>
         </a>
        </div>
      </nav>
    )

    export default Nav;