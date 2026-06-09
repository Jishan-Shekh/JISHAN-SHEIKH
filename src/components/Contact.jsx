import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "0b8ecfa6-8c6b-4dc0-8978-b2edd1c24765");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully ✅");
        event.target.reset();
      } else {
        setResult(data.message || "Failed to send message ❌");
      }
    } catch (error) {
      setResult("Something went wrong ❌");
    }
  };

  return (
    <section
      id="contact"
      className="bg-white text-black dark:bg-black dark:text-white py-20 px-6 transition-colors duration-300"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact <span className="text-red-500">Me</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mt-3">
          Feel free to reach out — I’m always open to opportunities & collaboration.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <div className="bg-gray-100 dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:scale-105 transition text-center">
            <FaEnvelope className="text-red-500 text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              shekhjishan804@gmail.com
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:scale-105 transition text-center">
            <FaPhoneAlt className="text-red-500 text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              +91 7376416430
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:scale-105 transition text-center">
            <FaMapMarkerAlt className="text-red-500 text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Bhadohi, Uttar Pradesh
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-100 dark:bg-slate-900 p-8 rounded-xl shadow-lg transition">

          <h2 className="text-2xl font-semibold mb-6 text-center">
            Send Me a Message
          </h2>

          <form className="space-y-5" onSubmit={onSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border
              bg-white text-black border-gray-300
              dark:bg-slate-800 dark:text-white dark:border-slate-700
              focus:border-red-500 outline-none transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border
              bg-white text-black border-gray-300
              dark:bg-slate-800 dark:text-white dark:border-slate-700
              focus:border-red-500 outline-none transition"
              required
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border
              bg-white text-black border-gray-300
              dark:bg-slate-800 dark:text-white dark:border-slate-700
              focus:border-red-500 outline-none transition"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 transition py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>

            {result && (
              <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-2">
                {result}
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;