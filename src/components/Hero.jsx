import React from "react";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-center">
      
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
        Full-Stack Developer
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        I build performant web applications using React and scalable backend systems.
        Focused on solving real-world problems for startups.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <a
          href="#projects"
          className="bg-white text-black px-6 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-gray-600 px-6 py-2 rounded-xl text-sm hover:border-white transition"
        >
          Contact Me
        </a>
      </div>

    </section>
  );
};

export default Hero;