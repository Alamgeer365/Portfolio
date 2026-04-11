import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 text-center">
      
      <h2 className="text-3xl font-bold mb-4">
        Let’s build something together
      </h2>

      <p className="text-gray-400 mb-8">
        I’m open to opportunities and collaborations. Feel free to reach out.
      </p>

      {/* Contact Info */}
      <div className="space-y-2 text-gray-300">
        <p>Email: your@email.com</p>
        <p>GitHub: github.com/yourname</p>
        <p>
          LinkedIn: your-profile
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-8">
        <a
          href="mailto:your@email.com"
          className="bg-white text-black px-6 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition"
        >
          Send Email
        </a>
      </div>

    </section>
  );
};

export default Contact;