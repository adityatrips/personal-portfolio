import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="h-[10vh] bg-[#00000090]  flex justify-between items-center px-10">
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
        <div className={isMenuOpen ? "hidden" : ""}>
          <button onClick={handleMenu}>Menu</button>
        </div>
      </nav>
      <div
        className={`z-10 ${
          !isMenuOpen && "hidden"
        } fixed top-0 w-full bg-black opacity-90`}
      >
        <div className="flex justify-center items-center px-10 h-screen">
          <div className={`fixed top-5 right-5 ${!isMenuOpen ? "hidden" : ""}`}>
            <button onClick={handleMenu}>Menu</button>
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
