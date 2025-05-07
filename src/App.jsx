import React from "react";
import techImage from "./assets/tech-image.jpg"; // Ensure this image exists

export default function App() {
  return (
    <div className="font-sans text-white bg-gray-900">
      {/* Navigation */}
      <header className="bg-gray-800 shadow sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center py-6 px-8 text-xl">
          <h1 className="text-3xl font-bold text-blue-400">KukhurikanInc</h1>
          <ul className="flex gap-10">
            {[
              "Home",
              "About",
              "Services",
              "Projects",
              "Founders",
              "Contact",
            ].map((text, i) => (
              <li key={i}>
                <a
                  href={`#${text.toLowerCase()}`}
                  className="hover:text-white hover:drop-shadow-[0_0_6px_white]"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-24 text-center bg-gray-900">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in-up">
            <h2 className="text-6xl font-bold mb-6 text-blue-400 drop-shadow-[0_0_4px_green]">
              Building tech one byte at a time
            </h2>
            <p className="text-2xl max-w-2xl mx-auto">
              We’re a tech company dedicated to innovative digital solutions and
              client success.
            </p>
          </div>
          <img
            src={techImage}
            alt="Tech visual"
            className="w-full lg:w-1/2 rounded-2xl shadow-xl animate-zoom-in"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-800 text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-5xl font-semibold mb-10 text-blue-300">
            About Us
          </h3>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            KukhurikanInc offers consulting, system design, and development
            services across web and mobile platforms. We empower clients with
            modern, scalable, and user-focused solutions.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-5xl font-semibold mb-10 text-blue-300">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {[
              "App Development",
              "Web Development",
              "IT Consulting",
              "UI/UX Design",
              "System Integration",
              "Cloud Solutions",
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-10 rounded-2xl shadow-xl hover:scale-105 hover:drop-shadow-[0_0_12px_white] transition duration-300 ease-in-out"
              >
                <h4 className="text-2xl font-bold text-blue-300 mb-2">
                  {service}
                </h4>
                <p className="text-gray-300">
                  High-quality, client-centric solutions tailored to your
                  business needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <h3 className="text-5xl font-semibold text-center mb-16 text-blue-300">
            Projects Completed
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Mero Lagi",
                desc: "Android application focused on personal productivity and habit tracking.",
              },
              {
                title: "HealthResearchAndAction",
                desc: "A clean WordPress portfolio for a health advocacy group.",
              },
              {
                title: "Smart Inventory",
                desc: "Web-based inventory management system for small businesses.",
              },
              {
                title: "EduConsult Portal",
                desc: "Consulting dashboard for educational institutions to manage digital systems.",
              },
            ].map((proj, idx) => (
              <div
                key={idx}
                className="bg-gray-900 border border-blue-400 p-12 rounded-2xl shadow-xl hover:scale-105 hover:drop-shadow-[0_0_10px_white] transition duration-300 ease-in-out"
              >
                <h4 className="text-3xl font-bold text-blue-300 mb-4">
                  {proj.title}
                </h4>
                <p className="text-gray-300 text-lg">{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-5xl font-semibold mb-16 text-blue-300">
            Meet the Founders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              "Sujan Karki",
              "Manisha Rana",
              "Bikash Thapa",
              "Anjali Shrestha",
            ].map((name, i) => (
              <div
                key={i}
                className="bg-gray-800 p-10 rounded-2xl shadow-xl hover:drop-shadow-[0_0_10px_white] transition duration-300 animate-fade-in-up"
              >
                <div className="h-32 w-32 mx-auto bg-blue-500 rounded-full mb-6"></div>
                <h4 className="text-2xl font-bold text-blue-200">{name}</h4>
                <p className="text-gray-400">Co-Founder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-gray-800">
        <div className="container mx-auto px-6 max-w-2xl">
          <h3 className="text-5xl font-semibold text-center mb-10 text-blue-300">
            Contact Us
          </h3>
          <form className="bg-gray-900 border border-blue-400 p-10 rounded-2xl shadow-xl space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 text-lg bg-gray-800 text-white border border-blue-500 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 text-lg bg-gray-800 text-white border border-blue-500 rounded-lg"
              required
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-4 text-lg bg-gray-800 text-white border border-blue-500 rounded-lg"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white text-xl py-3 rounded-lg hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-blue-600 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p className="text-lg">
            &copy; 2025 KukhurikanInc. All rights reserved.
          </p>
          <div className="flex gap-6 mt-6 md:mt-0">
            {["LinkedIn", "GitHub", "Twitter"].map((platform, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-white hover:drop-shadow-[0_0_6px_white]"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
