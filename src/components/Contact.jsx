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
    <section className="bg-dark_primary text-white py-14" id="contact">
      <Toaster />
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-semibold text-white"
            data-aos="fade-down"
          >
            {Contact.title}
          </h2>
          <h4
            className="text-lg md:text-xl text-gray-300 mt-3 text-white"
            data-aos="fade-down"
          >
            {Contact.subtitle}
          </h4>
        </div>

        <div className="flex flex-col md:flex-row gap-2 justify-between items-start">
          {/* Social Media Section on the left */}
          <div className="flex flex-col gap-6 w-full md:w-1/3">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 200}
                className="flex items-center gap-3 text-lg"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a
                  className="text-white hover:underline"
                  href={content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.text}
                </a>
              </div>
            ))}
          </div>

          {/* Form Section on the right */}
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="bg-white p-8 rounded-lg shadow-xl flex flex-col gap-2 w-1/2  "
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="border border-slate-600 p-3 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none text-black"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}"
              placeholder="Your Email"
              required
              className="border border-slate-600 p-3 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none text-black"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="border border-slate-600 p-3 rounded-md h-44 focus:ring-2 focus:ring-green-600 focus:outline-none text-black"
            ></textarea>
            <button
              type="submit"
              className="btn bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300"
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
