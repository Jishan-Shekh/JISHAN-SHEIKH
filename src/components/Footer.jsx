import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="relative mt-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold mb-3">
              Jishan{" "}
              <span className="text-red-500">Shekh</span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer specializing in MERN Stack.
              Passionate about building modern, responsive and
              scalable web applications.
            </p>
          </div>

          {/* Center */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#home" className="hover:text-red-400 transition">
                Home
              </a>

              <a href="#about" className="hover:text-red-400 transition">
                About
              </a>

              <a href="#projects" className="hover:text-red-400 transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-red-400 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Connect With Me
            </h3>

            <a
              href="mailto:shekhjishan804@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-5"
            >
              <FaEnvelope />
              <span>shekhjishan804@gmail.com</span>
            </a>

            <div className="flex gap-5 text-2xl">
              <a
                href="https://github.com/Jishan-Shekh"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:scale-125 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/jishan-shekh-37111a290/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 hover:scale-125 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/mrsheikh.x/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 hover:scale-125 transition duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Jishan Shekh. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed & Developed with ❤️ using React & Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            className="bg-red-500 hover:bg-red-600 p-3 rounded-full shadow-lg hover:scale-110 transition duration-300"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;