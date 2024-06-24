import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import useMetadata from "../hooks/useMetadata";

const AboutPage = () => {
  useMetadata({
    title: "Aditya Tripathi | About",
    description:
      "I am a passionate full-stack web, and flutter developer. I love to build web applications and mobile applications.",
    author: "Aditya Tripathi",
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
    url: "https://adityatripathi.vercel.app/about",
  });

  return (
    <>
      <Navbar />
      <div className="w-full px-0 md:px-10 py-5 flex justify-center items-center">
        <div className="flex flex-col gap-5 p-5 bg-[#00000090]">
          <small className="uppercase tracking-[3px]">About</small>
          <div className="flex flex-col md:flex-row gap-5">
            <img
              className="w-[100%] h-auto md:w-[300px] md:h-[300px] mx-auto md:m-0 rounded-xl"
              src="/me.webp"
              alt="Aditya"
            />
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl text-primary font-bold">
                Web & Native Enthusiast.
              </h1>
              <p>
                Indian student pursuing Bachelor's in Engineering (Software
                Engineering Hons.) from Monash University, Melbourne, Australia
              </p>

              <div className="grid grid-cols-1 gap-2">
                <div>
                  <span className="font-bold">Birthday:&nbsp;</span>
                  <span>16th April 2004</span>
                </div>
                <div>
                  <span className="font-bold">City:&nbsp;</span>
                  <span>Clayton, Melbourne, Australia</span>
                </div>
                <div>
                  <span className="font-bold">Age:&nbsp;</span>
                  <span>{new Date().getFullYear() - 2004}</span>
                </div>
                <div>
                  <span className="font-bold">Degree:&nbsp;</span>
                  <span>B. Engg. (Software Engg. Hons.)</span>
                </div>
                <div>
                  <span className="font-bold">Email:&nbsp;</span>
                  <a href="mailto:adityatripathi.at04@gmail.com">
                    adityatripathi.at04@gmail.com
                  </a>
                </div>
              </div>
              <p>
                I am interested in full-stack web development, native mobile
                development. I also like to explore other domains, to expand my
                horizons and build a better understanding of the tech industry.
              </p>
            </div>
          </div>
          <small className="uppercase tracking-[3px]">Skills</small>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProgressBar title="python" percent={90} />
            <ProgressBar title="react" percent={70} />
            <ProgressBar title="flutter" percent={85} />
            <ProgressBar title="java" percent={80} />
            <ProgressBar title="html/css" percent={80} />
            <ProgressBar title="c++" percent={70} />
            <ProgressBar title="firebase" percent={90} />
            <ProgressBar title="javascript" percent={87} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
