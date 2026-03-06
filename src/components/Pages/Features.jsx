import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    id: 1,
    tag: "Conceptual Work",
    title: "IP TRACKER APPLICATION",
    description:
      "Designed and developed an IP Tracker application using React. Integrated with an IP geolocation API to provide real-time information about the user's IP address, including location, ISP information as well as the map location.",
    image:
      "/active-states.jpg",
    info: {
      type: "Web Application",
      role: "Front-end Developer",
    },
    live: "https://albert-nd.github.io/ip-tracker/",
    github: "https://github.com/albert-nd/weather-forecast",
  },
  {
    id: 2,
    tag: "Conceptual Work",
    title: "WEATHER FORECAST APPLICATION",
    description:
      "Designed and developed a weather forecast application using React. Integrated with a weather API to provide real-time weather information, including current conditions and forecasts for multiple locations with a seven days forecast.",
    image:
      "/desktop-design-imperial.jpg",
    info: {
      client: "World News",
      type: "Web Application",
      role: "Front-end Developer",
    },
    live: "https://albert-nd.github.io/weather-forecast/",
    github: "https://github.com/albert-nd/weather-forecast",
  },
  {
    id: 3,
    tag: "Conceptual Work",
    title: "ROCK, PAPER, SCISSORS GAME",
    description:
      "Designed and developed a fun and interactive Rock, Paper, Scissors game using React. Implemented engaging gameplay mechanics and a responsive design for an enjoyable user experience.",
    image:
      "https://i.pinimg.com/736x/b6/d3/1f/b6d31f0178990a682afb1e03b29c3566.jpg",
    info: {
      type: "Web Application",
      role: "Front-end Developer",
    },
    live: "https://albert-nd.github.io/rock--papper--scissors-react/",
    github: "https://github.com/albert-nd/rock--papper--scissors-react",
  },
];

const Features = () => {
  return (
    <section className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-black dark:text-white my-8">
        FEATURED PROJECTS
      </h2>

      <p className=" font-bold text-black dark:text-gray-300 mb-12">
        Here are some of my recent projects that showcase my skills and expertise
        in web development.
      </p>

      <div className="space-y-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row gap-8"
          >
            {/* Image */}
            <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <span className="inline-block bg-black dark:bg-white font-bold text-white dark:text-black text-sm px-3 py-1 rounded-full mb-6">
                {project.tag}
              </span>

              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-[350px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                {project.title}
              </h3>

              <p className="text-black dark:text-gray-300 text-sm mb-6">
                {project.description}
              </p>

              <p className="text-black dark:text-white text-sm font-semibold">
                PROJECT INFO
              </p>

              <hr className="border-gray-400 dark:border-gray-600 my-4" />

              {project.info.client && (
                <p className="text-black dark:text-gray-300 text-sm">
                  Client: {project.info.client}
                </p>
              )}

              <p className="text-black dark:text-gray-300 text-sm">
                Project Type: {project.info.type}
              </p>

              <p className="text-black dark:text-gray-300 text-sm mb-6">
                Role: {project.info.role}
              </p>

              <div className="flex items-center gap-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 font-bold hover:underline flex items-center gap-1"
                >
                  LIVE DEMO <MdArrowOutward />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 font-bold hover:underline flex items-center gap-1"
                >
                  SEE ON GITHUB <SiGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
