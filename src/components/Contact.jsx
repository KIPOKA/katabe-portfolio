import { createElement, useContext } from "react";
import { content } from "../Content";
import { context } from "../App";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  const lang = useContext(context);
  const { Contact } = content[lang];

  return (
    <section className="bg-bg_light_primary py-16 px-6" id="contact">
      <h2
        className="text-3xl md:text-4xl font-bold text-center "
        data-aos="fade-down"
      >
        {Contact.title}
      </h2>
      <h4
        className="text-lg md:text-xl text-gray-200 mt-3 text-center"
        data-aos="fade-down"
      >
        {Contact.subtitle}
      </h4>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 mt-10">
        {/* Left Section */}
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4  text-[#0a192f]">
            Get In Touch
          </h2>
          <p className="mb-6 text-lg text-gray-200  text-[#0a192f]">
            Feel free to contact me! Submit your queries here and we will get
            back to you as soon as possible.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-3xl  text-[#0a192f] " />{" "}
              {/* Using FaEnvelope icon */}
              <p className="text-lg">ladykipoka@gmail.com</p>
            </div>
          </div>

          <div className="mt-8 flex gap-5">
            {/* Social Icons */}
            {Contact.social_media.map((content, i) => (
              <a
                key={i}
                href={content.link}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-down"
                data-aos-delay={i * 200}
                className="bg-[#0a192f] p-3 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
              >
                {createElement(content.icon, {
                  className: "text-white text-xl",
                })}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div
          className="bg-white p-10 rounded-lg shadow-lg border-t-4 border-[#0a192f]"
          data-aos="fade-left"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Send Us Message
          </h3>
          <form
            className="space-y-6"
            action="https://getform.io/f/d030d418-bf31-43e3-8b25-f7c2eb9b149f"
            method="POST"
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#0a192f] text-white py-3 rounded-md font-semibold shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
