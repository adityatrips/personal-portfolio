import { Link } from "react-router-dom";

const LandingNavbar = () => {
  return (
    <nav className="grid grid-cols-3 md:grid-cols-5 justify-items-center mb-5">
      <Link
        className="md:text-2xl animated-underline cursor-pointer flex justify-center items-center rounded-lg transition-all duration-150 hover:text-primary px-2 py-1"
        to="/"
      >
        Home
      </Link>
      <Link
        className="md:text-2xl animated-underline cursor-pointer flex justify-center items-center rounded-lg transition-all duration-150 hover:text-primary px-2 py-1"
        to="/about"
      >
        About
      </Link>
      <Link
        className="md:text-2xl animated-underline cursor-pointer flex justify-center items-center rounded-lg transition-all duration-150 hover:text-primary px-2 py-1"
        to="/resume"
      >
        Resume
      </Link>
      <Link
        className="md:text-2xl animated-underline cursor-pointer flex justify-center items-center rounded-lg transition-all duration-150 hover:text-primary px-2 py-1"
        to="/portfolio"
      >
        Portfolio
      </Link>
      <div className="md:hidden"></div>
      <Link
        className="md:text-2xl animated-underline cursor-pointer flex justify-center items-center rounded-lg transition-all duration-150 hover:text-primary px-2 py-1"
        to="/contact"
      >
        Contact
      </Link>
    </nav>
  );
};

export default LandingNavbar;
