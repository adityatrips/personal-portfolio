import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import MenuIcon from "/bars.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="h-[10vh] max-w-full bg-[#00000090] flex justify-between items-center px-5">
        <Link to="/" className="text-primary font-black text-4xl">
          AT.
        </Link>
        <div className="md:flex gap-5 hidden">
          <Link className="animated-underline" to="/">
            Home
          </Link>
          <Link className="animated-underline" to="/about">
            About
          </Link>
          <Link className="animated-underline" to="/resume">
            Resume
          </Link>
          <Link className="animated-underline" to="/portfolio">
            Portfolio
          </Link>
          <Link className="animated-underline" to="/contact">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <div onClick={handleMenu} className="cursor-pointer fa fa-bars"></div>
        </div>
      </nav>
      <div
        className={`z-10 ${
          !isMenuOpen && "hidden"
        } fixed top-0 w-full bg-black opacity-90`}
      >
        <div className="flex justify-center items-center px-10 h-screen">
          <div className={`fixed top-5 right-5 ${!isMenuOpen ? "hidden" : ""}`}>
            <div
              onClick={handleMenu}
              className="cursor-pointer fa fa-bars"
            ></div>
          </div>
          <div className="gap-5 flex flex-col items-center justify-center">
            <Link className="animated-underline" to="/">
              Home
            </Link>
            <Link className="animated-underline" to="/about">
              About
            </Link>
            <Link className="animated-underline" to="/resume">
              Resume
            </Link>
            <Link className="animated-underline" to="/portfolio">
              Portfolio
            </Link>
            <Link className="animated-underline" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
