import { Link } from "react-router-dom";
import useMetadata from "../hooks/useMetadata";

const FourZeroFour = () => {
  useMetadata({
    author: "Aditya Tripathi",
    description:
      "The page you are looking for might have be on a vacation, let it have the time of it's life.",
    keywords: [
      "404",
      "page not found",
      "not found",
      "vacation",
      "time of it's life",
    ],
    title: "Aditya Tripathi | 404",
    url: "https://adityatripathi.vercel.app/",
  });

  return (
    <div className="w-screen px-10 h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row md:items-baseline mb-5">
        <h1 className="text-9xl font-black text-center md:text-left">404</h1>
        <p className="text-2xl text-center md:text-left">Page not found.</p>
      </div>
      <p className="text-center mb-5 md:text-left">
        The page you are looking for might have be on a vacation, let it have
        the time of it&apos;s life.
      </p>
      <Link className="animated-underline" to="/">
        Return home
      </Link>
    </div>
  );
};

export default FourZeroFour;
