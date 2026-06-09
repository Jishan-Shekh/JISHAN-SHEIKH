import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { TypeAnimation } from "react-type-animation";

import pic from "../assets/JISHAN SHEKH (3).jpg";
const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-12 md:mt-24 mb-10 text-gray-900 dark:text-white"
      >
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 mt-1 md:mt-2 space-y-2">
            <span className="text-xl">Welcome to My Portfolio</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1 className="text-3xl md:text-4xl font-bold">
                Hello, I'm a{" "}
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent font-bold">
                  <TypeAnimation
                    sequence={[
                      "MERN Stack Developer",
                      2000,
                      "Full Stack Developer",
                      2000,
                      "Programmer",
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    cursor={true}
                  />
                </span>
              </h1>
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Passionate MERN Stack Developer focused on creating modern,
              responsive, and high-performance web applications. I specialize in
              building full-stack solutions using MongoDB, Express.js, React.js,
              and Node.js, with a strong foundation in Java, JavaScript, and
              MySQL. Driven by continuous learning and innovation, I aim to
              transform ideas into impactful digital experiences.
            </p>
            <br />
            {/*social media icons*/}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-8 md:gap-6 mt-8">
              {/* Social Links */}
              <div className="text-center md:text-left">
                <h1 className="text-lg md:text-xl font-semibold mb-3">
                  Available on:
                </h1>

                <ul className="flex justify-center md:justify-start gap-5 text-3xl">
                  <li className="text-[#1877F2] hover:text-[#166FE5] hover:scale-110 transition-all duration-300 cursor-pointer">
                    <a
                      href="https://www.facebook.com/jishanshekh"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareFacebook />
                    </a>
                  </li>

                  <li className="text-[#0A66C2] hover:text-[#004182] hover:scale-110 transition-all duration-300 cursor-pointer">
                    <a
                      href="https://www.linkedin.com/in/jishan-shekh-37111a290/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </li>

                  <li className="text-[#E4405F] hover:text-[#C13584] hover:scale-110 transition-all duration-300 cursor-pointer">
                    <a
                      href="https://www.instagram.com/mrsheikh.x/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareInstagram />
                    </a>
                  </li>

                  <li className="text-[#229ED9] hover:text-[#0088CC] hover:scale-110 transition-all duration-300 cursor-pointer">
                    <a
                      href="https://web.telegram.org/k/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTelegram />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="text-center md:text-left">
                <h1 className="text-lg md:text-xl font-semibold mb-3">
                  Currently Working On:
                </h1>

                <ul className="flex justify-center md:justify-start gap-5 text-3xl">
                  <li className="hover:scale-125 transition-all duration-300 cursor-pointer text-green-500">
                    <DiMongodb />
                  </li>
                  <li className="hover:scale-125 transition-all duration-300 cursor-pointer">
                    <SiExpress />
                  </li>
                  <li className="hover:scale-125 transition-all duration-300 cursor-pointer text-cyan-500">
                    <FaReact />
                  </li>
                  <li className="hover:scale-125 transition-all duration-300 cursor-pointer text-green-600">
                    <FaNodeJs />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
            <div className="relative">
              {/* Gradient Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 blur-xl opacity-40 animate-pulse"></div>

              {/* Profile Image */}
              <img
                src={pic}
                alt="Profile"
                className="relative h-72 w-72 md:h-96 md:w-96 rounded-full object-cover border-4 border-white shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Hero;
