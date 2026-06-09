import React from "react";
import jobportal from "../assets/jobportal.png";
import currency from "../assets/currency.png";
import weather from "../assets/weather.png";

const Project = () => {
  const cardItems = [
    {
      id: 1,
      logo: jobportal,
      name: "Job Portal",
      description:
        "A full-stack Job Portal built using React, Node.js, Express.js, MongoDB, Redux Toolkit, and Tailwind CSS.",
      demo: "https://jobportal-frontend-two-pi.vercel.app/",
      github: "https://github.com/Jishan-Shekh",
    },
    {
      id: 2,
      logo: currency,
      name: "Currency Converter",
      description:
        "A responsive Currency Converter that provides real-time exchange rates using API integration.",
      demo: "https://jishan-shekh.github.io/-Currency-Converter-App/",
      github: "https://github.com/Jishan-Shekh",
    },
    {
      id: 3,
      logo: weather,
      name: "Weather App",
      description:
        "A modern Weather App that displays live weather conditions and forecasts using OpenWeather API.",
      demo: "https://jishan-shekh.github.io/Weather-App-/",
      github: "https://github.com/Jishan-Shekh",
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 text-gray-900 dark:text-white"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I have developed using modern web
            technologies. These projects showcase my skills in frontend,
            backend, APIs, and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{item.name}</h2>

                <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="flex gap-3">
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-gray-400 py-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr />
    </>
  );
};

export default Project;
