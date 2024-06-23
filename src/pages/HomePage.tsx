import LandingNavbar from "../components/LandingNavbar";

const App = () => {
  return (
    <div className="px-10 py-5 w-screen h-screen flex flex-col justify-center items-center md:items-start">
      <h1 className=" text-5xl text-center font-bold uppercase">
        Aditya Tripathi
      </h1>
      <p className="text-center text-xl mb-10">
        I am a passionate
        <span className="font-bold text-primary">
          &nbsp;full-stack web, and flutter developer.
        </span>
      </p>
      <LandingNavbar />
      <div className="flex justify-center items-center gap-5">
        <a
          className="text-2xl cursor-pointer hover:bg-primary size-10 flex justify-center items-center rounded-full transition-all duration-150 hover:text-black"
          href=""
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a
          className="text-2xl cursor-pointer hover:bg-primary size-10 flex justify-center items-center rounded-full transition-all duration-150 hover:text-black"
          href=""
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          className="text-2xl cursor-pointer hover:bg-primary size-10 flex justify-center items-center rounded-full transition-all duration-150 hover:text-black"
          href=""
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          className="text-2xl cursor-pointer hover:bg-primary size-10 flex justify-center items-center rounded-full transition-all duration-150 hover:text-black"
          href=""
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          className="text-2xl cursor-pointer hover:bg-primary size-10 flex justify-center items-center rounded-full transition-all duration-150 hover:text-black"
          href=""
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
