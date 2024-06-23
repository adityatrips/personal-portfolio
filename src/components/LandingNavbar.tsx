const LandingNavbar = () => {
  return (
    <nav className="flex justify-center items-center gap-5 mb-5">
      <a
        className="text-2xl cursor-pointer flex justify-center items-center rounded-lg transition-all duration-150 hover:text-primary px-2 py-1"
        href="/"
      >
        Home
      </a>
      <a
        className="text-2xl cursor-pointer flex justify-center items-center rounded-lg transition-all duration-150 hover:text-primary px-2 py-1"
        href="/about"
      >
        About
      </a>
      <a
        className="text-2xl cursor-pointer flex justify-center items-center rounded-lg transition-all duration-150 hover:text-primary px-2 py-1"
        href="/resume"
      >
        Resume
      </a>
      <a
        className="text-2xl cursor-pointer flex justify-center items-center rounded-lg transition-all duration-150 hover:text-primary px-2 py-1"
        href="/portfolio"
      >
        Portfolio
      </a>
      <a
        className="text-2xl cursor-pointer flex justify-center items-center rounded-lg transition-all duration-150 hover:text-primary px-2 py-1"
        href="/contact"
      >
        Contact
      </a>
    </nav>
  );
};

export default LandingNavbar;
