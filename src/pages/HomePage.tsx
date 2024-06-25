import LandingNavbar from "../components/LandingNavbar";
import useMetadata from "../hooks/useMetadata";

import {
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

const App = () => {
  useMetadata({
    title: "Aditya Tripathi | Full-stack Web Developer",
    description:
      "I am a passionate full-stack web, and flutter developer. I love to build web applications and mobile applications.",
    author: "Aditya Tripathi",
    url: "https://adityatripathi.vercel.app/",
    keywords: [
      "Aditya Tripathi",
      "Aditya",
      "Tripathi",
      "full-stack web developer",
      "flutter developer",
      "web developer",
      "mobile developer",
      "web applications",
      "mobile applications",
      "ios developer",
      "android developer",
    ],
  });

  return (
    <div className="landing px-10 py-5 w-screen h-screen flex flex-col justify-center items-center md:items-start">
      <h1 className="text-3xl md:text-5xl text-center font-bold uppercase">
        Aditya Tripathi
      </h1>
      <p className="text-center md:text-xl mb-10">
        I am a passionate
        <span className="font-bold text-primary">
          &nbsp;full-stack web, and flutter developer.
        </span>
      </p>
      <LandingNavbar />
      <div className="flex justify-center items-center gap-5">
        <a
          aria-label="Visit my Twitter profile"
          className="text-2xl cursor-pointer hover:bg-primary size-10 flex justify-center items-center rounded-full transition-all duration-150"
          href="https://x.com/adity04tripathi"
          target="_blank"
        >
          <FaXTwitter />
        </a>
        <a
          aria-label="Visit my Facebook profile"
          className="text-2xl cursor-pointer hover:bg-primary size-10 flex justify-center items-center rounded-full transition-all duration-150"
          href="https://www.facebook.com/profile.php?id=61554203205503"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          aria-label="Visit my Instagram profile"
          className="text-2xl cursor-pointer hover:bg-primary size-10 flex justify-center items-center rounded-full transition-all duration-150"
          href="https://www.instagram.com/i_adityatripathi2412"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          aria-label="Visit my LinkedIn profile"
          className="text-2xl cursor-pointer hover:bg-primary size-10 flex justify-center items-center rounded-full transition-all duration-150"
          href="https://www.linkedin.com/in/aditya-tripathi-at04/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          aria-label="Visit my GitHub profile"
          className="text-2xl cursor-pointer hover:bg-primary size-10 flex justify-center items-center rounded-full transition-all duration-150"
          href="https://www.github.com/adityatrips"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default App;
