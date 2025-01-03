import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

import { Autoplay, Pagination } from "swiper/modules";
import { context } from "../App";
import { useContext } from "react";

const Projects = () => {
  const lang = useContext(context);

  const { Projects } = content[lang];
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 5000 }}
            spaceBetween={20}
            modules={[Pagination, Autoplay]}
            className="rounded-xl max-w-screen-md w-full"
            data-aos="fade-left"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all"
              >
                <a
                  href={content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-4"
                >
                  <img
                    loading="lazy"
                    src={content.image}
                    alt={content.title}
                    className="rounded-lg w-full h-68 object-cover mb-4"
                  />
                </a>
                <h5 className="text-lg font-semibold text-gray-800">
                  {content.title}
                </h5>
                <p className="text-gray-600 mt-2 text-sm">{content.para}</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-2 ">
                    {content.link && (
                      <a
                        href={content.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <AiOutlineLink className="text-xl" />
                      </a>
                    )}
                    {content.githubLink && (
                      <a
                        href={content.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <AiFillGithub className="text-xl" />
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
