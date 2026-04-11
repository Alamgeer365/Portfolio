import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <h1 className="text-lg font-semibold tracking-wide">
          YourName
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;