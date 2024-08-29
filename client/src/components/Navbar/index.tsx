import { FaGithub } from "react-icons/fa6";
import LatLngBar from "./LatLngBar";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <header>
      <nav className="bg-blue-900 border-blue-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <Logo />
          <LatLngBar />
          <a
            href="https://github.com/matheuseabra/satellimap"
            target="_blank"
            className="flex items-center text-base font-bold text-white ml-4 hover:text-white"
            rel="noreferrer"
          >
            <FaGithub color="#fff" className="mr-2" size={20} />
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
