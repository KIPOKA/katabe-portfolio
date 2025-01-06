// import content
import { useContext } from "react";
import { context } from "../App";
import { content } from "../Content";

const Skills = () => {
  const lang = useContext(context);

  const { skills } = content[lang];

  return (
    <section className="min-h-fit bg-gray-300 py-14" id="skills">
      {/* content */}
      <div className="md:container px-5">
        <h2
          className="text-4xl font-extrabold text-start text-gray-800 mb-4"
          data-aos="fade-down"
        >
          {skills.title}
        </h2>
        <h4 className="subtitle mb-4" data-aos="fade-down">
          {skills.subtitle}
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white shadow-lg rounded-xl border-2 border-slate-200 hover:shadow-2xl transition-all duration-300 group p-6 flex flex-col items-center justify-start gap-4 cursor-pointer transform hover:scale-105"
            >
              <div className="flex-shrink-0">
                <img
                  loading="lazy"
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-all duration-200"
                />
              </div>
              <div className="flex-1 text-center">
                <h6 className="text-lg font-semibold text-gray-800 mb-2">
                  {skill.name}
                </h6>
                <p className="text-base text-gray-500">{skill.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
