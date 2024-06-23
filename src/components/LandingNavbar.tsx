import { Link } from "react-router-dom";

const LandingNavbar = () => {
  return (
    <nav className="flex justify-center items-center gap-5 mb-5">
      <Link
        className="text-2xl cursor-pointer flex justify-center items-center rounded-lg transition-all duration-150 hover:text-primary px-2 py-1"
        to="/"
      >
        Home
      </Link>
      <Link
        className="text-2xl cursor-pointer flex justify-center items-center rounded-lg transition-all duration-150 hover:text-primary px-2 py-1"
        to="/about"
      >
        About
      </Link>
      <Link
        className="text-2xl cursor-pointer flex justify-center items-center rounded-lg transition-all duration-150 hover:text-primary px-2 py-1"
        to="/resume"
      >
        Resume
      </Link>
      <Link
        className="text-2xl cursor-pointer flex justify-center items-center rounded-lg transition-all duration-150 hover:text-primary px-2 py-1"
        to="/portfolio"
      >
        Portfolio
      </Link>
      <Link
        className="text-2xl cursor-pointer flex justify-center items-center rounded-lg transition-all duration-150 hover:text-primary px-2 py-1"
        to="/contact"
      >
        Contact
      </Link>
    </nav>
  );
};

export default LandingNavbar;
