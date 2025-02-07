import { useContext } from "react";
import { context } from "../App";
import { content } from "../Content";

const Aboutme = () => {
  const lang = useContext(context);
  const { Aboutme } = content[lang];

  return (
    <section id="aboutme" className="bg-bg_light_primary py-14">
      <div className="md:container px-5 text-center">
        <h2 className="title" data-aos="fade-down">
          {Aboutme.title}
        </h2>
        <h4 className="subtitle mb-8" data-aos="fade-down">
          {Aboutme.subtitle}
        </h4>
        <div className="flex items-center justify-center md:flex-row flex-col-reverse gap-10">
          <img
            loading="lazy"
            src={Aboutme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            loading="lazy"
            src={Aboutme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{Aboutme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
              <a href=" \src\assets\cv\CV.pdf" download="My_CV.pdf">
                {Aboutme.btnText}
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
