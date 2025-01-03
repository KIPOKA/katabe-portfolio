import React from "react";
import { content } from "../Content";
const experiences = [
  {
    company: "Fluid Intellect",
    role: "Junior Software Developer",
    duration: "Oct 2023 - Present",
    description: [
      "Took on diverse responsibilities in mobile front-end aesthetics, WordPress front-end design, and API development using Node.js.",
      "Contributed to creating captivating digital experiences.",
      "Focused on building intuitive and visually appealing interfaces with React Native.",
      "Ensured seamless design translation across various mobile devices.",
      "Worked under the guidance of senior team members to refine front-end design skills and back-end development.",
    ],
  },
  {
    company: "Fluid Intellect",
    role: "Software Developer Intern",
    duration: "March 2023 - August 2023",
    description: [
      "Contributed to mobile front-end aesthetics, WordPress front-end allure, and Flask for robust APIs.",
      "Explored crafting immersive digital experiences.",
      "Developed mobile front-end mastery with React Native and React.js.",
      "Built reusable components to enhance development efficiency.",
      "Created intuitive, visually striking interfaces.",
      "Ensured seamless functionality across various mobile devices.",
    ],
  },
  {
    company: "4IR Lab MICT SETA",
    role: "Software Developer Intern",
    duration: "Sep 2022 - Feb 2023",
    description: [
      "Specialized in both front-end and back-end technologies.",
      "Contributed to innovative solutions for real-world challenges.",
      "Focused on front-end technologies, including React JS for web applications and React Native for mobile applications.",
      "Designed and implemented visually appealing, responsive, and user-friendly user interfaces.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="bg-gray-300 text-white py-14" id="experience">
      <div className="container mx-auto px-5 relative">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-semibold"
            data-aos="fade-down"
          >
            Experience
          </h2>
          <h4
            className="text-lg md:text-xl text-gray-300 mt-3"
            data-aos="fade-down"
          >
            A timeline of my professional journey
          </h4>
        </div>
        <div className="flex justify-center items-center relative">
          {/* Vertical Line */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-1 bg-green-500 mr-4 z-0"></div>
          </div>
          {/* Timeline Content */}
          <div className="flex flex-col gap-12 relative z-10 w-full max-w-3xl px-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex items-start gap-6 justify-center ${
                  index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {/* Experience Details */}
                <div
                  className={`w-full md:w-1/2 text-left ${
                    index % 2 === 0 ? "ml-auto" : "mr-auto"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-black">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-300 mb-2">{exp.duration}</p>
                  <h4 className="text-xl font-medium text-green-400">
                    {exp.company}
                  </h4>
                  <ul className="mt-4 list-disc list-inside text-black">
                    {exp.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
                {/* Timeline Dot */}
                <div className="w-5 h-5 bg-dark_primary rounded-full border-2 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
