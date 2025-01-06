// import content
import { useContext } from "react";
import { context } from "../App";
import { content } from "../Content";

const Hero = () => {
  const lang = useContext(context);
  const { hero } = content[lang];

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center pt-0 mt-0">
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h3 className="text-center text-[#1c7ed6] mt-[-50%]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h3>
          <h4>{hero.title}</h4>
          <br />
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
