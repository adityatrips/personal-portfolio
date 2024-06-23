import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="h-[10vh] bg-[#00000090]  flex justify-between items-center px-10">
        <a href="/" className="text-primary font-black text-4xl">
          AT.
        </a>
        <div className="md:flex gap-5 hidden">
          <a className="animated-underline" href="/">
            Home
          </a>
          <a className="animated-underline" href="/about">
            About
          </a>
          <a className="animated-underline" href="/resume">
            Resume
          </a>
          <a className="animated-underline" href="/portfolio">
            Portfolio
          </a>
          <a className="animated-underline" href="/contact">
            Contact
          </a>
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
            <a className="animated-underline" href="/">
              Home
            </a>
            <a className="animated-underline" href="/about">
              About
            </a>
            <a className="animated-underline" href="/resume">
              Resume
            </a>
            <a className="animated-underline" href="/portfolio">
              Portfolio
            </a>
            <a className="animated-underline" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
