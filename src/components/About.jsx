import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-8 text-gray-900 dark:text-white"
    >
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <p className="text-md text-justify">
        I am Jishan Shekh, a passionate MERN Stack Developer with a strong
        foundation in Java, JavaScript, and MySQL. I specialize in building
        full-stack web applications using MongoDB, Express.js, React.js, and
        Node.js. With a keen eye for detail and a commitment to writing clean,
        efficient code, I strive to create modern, responsive, and
        high-performance web solutions. I am driven by continuous learning and
        innovation, always seeking to stay updated with the latest technologies
        and best practices in the industry. My goal is to transform ideas into
        impactful digital experiences that solve real-world problems.
      </p>
      <br />
      {/* Education, Skills, and Achievements Sections */}
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        Education & Training
      </h1>

      <p className="text-md text-justify mb-3">
        Bachelor of Computer Applications (BCA), United University, Prayagraj
        (2023–2026).
      </p>

      <p className="text-md text-justify mb-3">
        Pursuing O-Level Certification from NIELIT with completed modules in IT
        Tools, Basics of Networks, and Web Designing & Publishing.
      </p>
      <br />
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 via-yellow-400 via-green-500 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
        Skills & Expertise
      </h1>

      <p className="text-md text-justify mb-3">
        <span className="font-bold">Frontend Development:</span> Building
        responsive and interactive user interfaces using React.js, HTML5, CSS3,
        Tailwind CSS, Bootstrap, and JavaScript.
      </p>

      <p className="text-md text-justify mb-3">
        <span className="font-bold">Backend Development:</span> Developing
        scalable server-side applications and RESTful APIs using Node.js and
        Express.js.
      </p>

      <p className="text-md text-justify mb-3">
        <span className="font-bold">Database Management:</span> Working with
        MongoDB and MySQL to design, manage, and optimize database solutions.
      </p>

      <p className="text-md text-justify mb-3">
        <span className="font-bold">Version Control & Tools:</span> Experienced
        with Git, GitHub, VS Code, Postman, Vercel, and Render for efficient
        development and deployment workflows.
      </p>

      <p className="text-md text-justify mb-3">
        <span className="font-bold">Web Development Concepts:</span> Strong
        understanding of Authentication, Authorization, CRUD Operations, REST
        APIs, and Responsive Design.
      </p>

      <p className="text-md text-justify">
        <span className="font-bold">Problem Solving:</span> Passionate about
        learning new technologies, debugging applications, and creating
        user-friendly web solutions.
      </p>
      <br />
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 via-yellow-400 via-green-500 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
        Internship / Achievements
      </h1>

      <p className="text-md text-justify mb-3">
        Successfully completed Web Development Internship at Codsoft, gaining
        hands-on experience in building responsive web applications.
      </p>

      <p className="text-md text-justify mb-3">
        Completed Java Programming Internship at Codsoft, working with Java,
        JDBC, MySQL, debugging, and optimization techniques.
      </p>

      <p className="text-md text-justify mb-3">
        Developed a Full-Stack Job Portal Application using React.js, Node.js,
        Express.js, and MongoDB with authentication and job management features.
      </p>

      <p className="text-md text-justify mb-3">
        Built a Currency Converter Application integrating ExchangeRate API for
        real-time currency conversion.
      </p>

      <p className="text-md text-justify mb-3">
        Designed and developed a responsive Personal Portfolio Website to
        showcase projects, skills, and professional achievements.
      </p>

      <p className="text-md text-justify">
        Pursuing O-Level Certification from NIELIT to strengthen technical and
        professional competencies.
      </p>
      <br />
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 via-yellow-400 via-green-500 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
        Mission Statement
      </h1>

      <p className="text-md text-justify">
        Driven by curiosity and innovation, my mission is to develop modern,
        scalable, and user-centric web applications that make a meaningful
        impact. I aim to combine creativity with technology, continuously learn
        and adapt to industry trends, and contribute to building digital
        solutions that empower businesses and enhance user experiences
        worldwide.
      </p>
    </div>
  );
};

export default About;
