import { useContext } from "react";
import { context } from "../App";
import { content } from "../Content";

const Hero = () => {
  const lang = useContext(context);
  const { hero } = content[lang];

  return (
    <section
      id="home"
      className="overflow-hidden bg-gradient-to-b from-blue-300 via-white to-blue-100"
    >
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        {/* Centered Content */}
        <div
          className="flex flex-col items-center gap-8"
          style={{
            animation: "fadeInLeft 1s ease-in-out",
          }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#1c7ed6]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800">
            {hero.title}
          </h2>
          <div className="flex flex-col gap-5 mt-6">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2"
                style={{
                  animation: `fadeInUp ${0.5 + i * 0.3}s ease-in-out`,
                }}
              >
                <h3 className="text-4xl font-bold text-blue-700">
                  {content.count}
                </h3>
                <p className="text-lg text-gray-600">{content.text}</p>
              </div>
            ))}
          </div>
          {/* Call to Action Button */}
          <a
            href="#contact"
            className="mt-8 px-6 py-3 bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="block w-4 h-4 bg-blue-700 rounded-full mb-2"></span>
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
