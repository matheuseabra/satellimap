import logo from "../../assets/logo.png";
import LatLngBar from "./LatLngBar";

const NavBar = () => {
  return (
    <header>
      <nav className="bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <span className="flex items-center">
            <img
              src={logo}
              className="mr-3 h-6 sm:h-9"
              alt="SatelliMap Logo"
            />
            <span className="text-white self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              SatelliMap
            </span>
            <LatLngBar />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
