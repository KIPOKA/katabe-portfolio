import { createElement, useContext, useRef } from "react";
import { content } from "../Content";
import toast, { Toaster } from "react-hot-toast";
import { context } from "../App";

const Contact = () => {
  const lang = useContext(context);
  const { Contact } = content[lang];
  const form = useRef();

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz3VjPhHrM1SAxK3DsbB_gYZZk4ouI93zNRyvTxpFnIZnkANMS8QD-Q1qaNvzDp2fphxg/exec";

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    fetch(scriptURL, { method: "POST", body: new FormData(form.current) })
      .then((response) => {
        console.log("Success!", response);
        form.current.reset(); // Reset the form
        toast.success("Message has been successfully sent!");
      })
      .catch((error) => {
        console.error("Error!", error.message);
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <section
      className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-14"
      id="contact"
    >
      <Toaster />
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-semibold"
            data-aos="fade-down"
          >
            {Contact.title}
          </h2>
          <h4
            className="text-lg md:text-xl text-gray-300 mt-3"
            data-aos="fade-down"
          >
            {Contact.subtitle}
          </h4>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* Form Section on the right */}
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="bg-[#1c7ed6] p-8 rounded-lg shadow-xl flex flex-col gap-4 w-full md:w-1/2"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none text-black transition duration-300 hover:border-green-500"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}"
              placeholder="Your Email"
              required
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none text-black transition duration-300 hover:border-green-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="border border-gray-300 p-3 rounded-md h- 44 focus:ring-2 focus:ring-green-600 focus:outline-none text-black transition duration-300 hover:border-green-500"
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300 w-[40%] flex items-center justify-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Social Media Section on the left */}

      <div className="flex flex-col md:flex-row gap-6 w-full md:w-1/3 items-center justify-center text-black">
        {Contact.social_media.map((content, i) => (
          <div
            key={i}
            data-aos="fade-down"
            data-aos-delay={i * 200}
            className="flex flex-col items-center md:flex-row gap-3 text-lg"
          >
            {/* Icon */}
            <div className="p-3 bg-gray-200 rounded-full flex items-center justify-center">
              {createElement(content.icon, { className: "text-xl text-black" })}
            </div>

            {/* Text and Link */}
            <a
              href={content.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              {content.text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
