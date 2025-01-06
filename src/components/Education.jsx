import { useContext } from "react";
import { context } from "../App";
import { content } from "../Content";

const Education = () => {
  const lang = useContext(context);
  const { education } = content[lang];
  return (
    <section className="bg-bg_light_primary text-white py-14" id="education">
      <div className="container mx-auto px-5 relative">
        <div className="text-center mb-10">
          <h2
            className="title text-3xl md:text-4xl font-bold"
            data-aos="fade-down"
          >
            {education.title}
          </h2>
          <h4
            className="subtitle text-lg md:text-xl text-gray-700 mb-8"
            data-aos="fade-down"
          >
            {education.subtitle}
          </h4>
        </div>
        <div className="flex justify-center items-center relative">
          {/* Vertical Line */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-1 bg-green-500 z-0 hidden md:block mx-2"></div>
          </div>
          {/* Timeline Content */}
          <div className="flex flex-col gap-12 relative z-10 w-full max-w-3xl px-4 md:px-8">
            {education.education_content.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-start gap-6 justify-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div
                  className={`w-full md:w-1/2 text-left ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-black ml-4 ">
                    {exp.institution}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-2 ml-8">
                    {exp.qualification}
                  </p>
                  <h4 className="text-lg md:text-xl font-medium text-green-400 ml-8">
                    {exp.duration}
                  </h4>
                  <ul className="mt-4 list-disc list-inside text-black text-sm md:text-base ml-8">
                    {exp.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="w-5 h-5 bg-dark_primary rounded-full border-2 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
