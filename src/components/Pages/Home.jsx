import { Link } from "react-router-dom";
import { SiGithub } from "react-icons/si";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const Home = () => {
  return (
    <div className="items-center gap-10">
      {/* Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
          HI, I AM
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
          ALBERT NDUKWE
        </h1>

        <p className="mt-4 text-black dark:text-gray-300">
          Nigerian-based front-end developer building responsive and user-friendly web applications.
        </p>
        <p className="text-black dark:text-gray-300">
          Skilled in React, Tailwind CSS, and modern web technologies to create engaging digital experiences.
        </p>
        <p className="text-black dark:text-gray-300">
          Passionate about continuous learning and collaborating to deliver high-quality solutions.
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-6 justify-center md:justify-start">
          <Link
            to="/Connect"
            className="bg-yellow-600 px-5 py-2 rounded-full font-semibold hover:bg-black hover:text-yellow-500 hover:border-2 hover:border-yellow-400 transition duration-500"
          >
            Contact Me
          </Link>

          <a
            href="https://github.com/albert-nd"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 p-1 bg-gray-800 text-yellow-400 rounded-full hover:text-yellow-600 transition flex items-center justify-center"
          >
            <SiGithub />
          </a>

          <a
            href="#"
            className="w-9 h-9 p-1 bg-gray-800 text-yellow-400 rounded-full hover:text-yellow-600 transition flex items-center justify-center"
          >
            <BsFacebook />
          </a>

          <a
            href="#"
            className="w-9 h-9 p-1 bg-gray-800 text-yellow-400 rounded-full hover:text-yellow-600 transition flex items-center justify-center"
          >
            <BsTwitterX />
          </a>

          <a
            href="#"
            className="w-9 h-9 p-1 bg-gray-800 text-yellow-400 rounded-full hover:text-yellow-600 transition flex items-center justify-center"
          >
            <RiInstagramFill />
          </a>

        </div>
      </div>

      {/* Image */}
      {/* <div className="flex-1">
        <img
          className="w-full max-w-md mx-auto rounded-3xl"
          src="https://randomuser.me/api/portraits/men/59.jpg"
          alt="Albert Ndukwe"
        />
      </div> */}
    </div>
  );
};

export default Home;
