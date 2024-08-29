import LogoSrc from "../../../assets/logo.png";

const Logo = () => {
  return (
    <span className="flex">
      <img src={LogoSrc} className="mr-3 h-6 sm:h-9" alt="SatelliMap Logo" />
      <span className="text-white self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        SatelliMap
      </span>
    </span>
  );
};

export default Logo;
