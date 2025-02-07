import { Link } from "react-router-dom";
import img from ".././assets/pic-2.jpg";
import Title from "./Title";
import "./about.css";
const About = () => {
  return (
    <>
      <section className="w-full mx-auto bg-[#09031B]" id="about">
        <div className="w-11/12 mx-auto">
        <div data-aos="fade-up">
            <Title title="About Me"></Title>
          </div>

          <div className="flex lg:flex-row flex-col justify-between items-center gap-12 lg:py-12 py-0">
            <div className="space-y-6 text-center lg:text-left lg:w-1/2 w-full">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  This is
                </span>
                <span
                  className="block mt-2 text-gray-200 aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-duration="1300"
                >
                  Ahbabuzzman
                </span>
              </h2>
              <p
                className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                I am a Junior Full-stack Developer with expertise in React,
                Node.js, Express, and MongoDB. I specialize in building
                responsive, user-friendly web applications and optimizing
                performance. Passionate about learning and innovation, I strive
                to create efficient and scalable solutions.
              </p>
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
                <Link to="/" class="w-full lg:w-auto">
                  <button
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="w-1/2 mx-auto lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200 aos-init"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-code w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    View Projects
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <img
                className="w-[70%] mx-auto rounded-full opacity-0 aos-init aos-animate"
                src={img}
                alt=""
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
