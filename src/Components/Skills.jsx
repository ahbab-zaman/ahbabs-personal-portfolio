import { GrTechnology } from "react-icons/gr";
import Title from "./Title";
import Marquee from "react-fast-marquee";

const Projects = () => {
  return (
    <>
      <section className="w-full bg-[#09031B] lg:py-10 lg:pt-0 pt-6 pb-0">
        <div className="w-11/12 mx-auto">
          <Title title="Tech Skills"></Title>
          <Marquee pauseOnHover={true}>
          <div className="flex items-center gap-5 overflow-y-hidden">
            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="aos-init aos-animate ml-4"
            >
              <div class="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                <div class="relative">
                  <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                  <img
                    src="./html.svg"
                    alt=""
                    className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
                  />
                </div>
                <span class="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                  HTML
                </span>
              </div>
            </div>

            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="aos-init aos-animate"
            >
              <div class="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                <div class="relative">
                  <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                  <img
                    src="./css.svg"
                    alt=""
                    className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
                  />
                </div>
                <span class="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                  CSS
                </span>
              </div>
            </div>

            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="aos-init aos-animate"
            >
              <div class="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                <div class="relative">
                  <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                  <img
                    src="./javascript.svg"
                    alt=""
                    className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
                  />
                </div>
                <span class="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                  JavaScript
                </span>
              </div>
            </div>

            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="aos-init aos-animate"
            >
              <div class="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                <div class="relative">
                  <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                  <img
                    src="./tailwind.svg"
                    alt=""
                    className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
                  />
                </div>
                <span class="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="aos-init aos-animate"
            >
              <div class="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                <div class="relative">
                  <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                  <img
                    src="./reactjs.svg"
                    alt=""
                    className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
                  />
                </div>
                <span class="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                  React JS
                </span>
              </div>
            </div>

            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="aos-init aos-animate"
            >
              <div class="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                <div class="relative">
                  <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                  <img
                    src="./nodejs.svg"
                    alt=""
                    className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
                  />
                </div>
                <span class="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                  Node JS
                </span>
              </div>
            </div>

            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="aos-init aos-animate"
            >
              <div class="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                <div class="relative">
                  <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                  <img
                    src="./mongodb-icon.svg"
                    alt=""
                    className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
                  />
                </div>
                <span class="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                  Mongodb
                </span>
              </div>
            </div>

            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="aos-init aos-animate"
            >
              <div class="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                <div class="relative">
                  <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                  <img
                    src="./firebase.svg"
                    alt=""
                    className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
                  />
                </div>
                <span class="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                  Firebase
                </span>
              </div>
            </div>

            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="aos-init aos-animate"
            >
              <div class="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                <div class="relative">
                  <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                  <img
                    src="./nextjs-icon.svg"
                    alt=""
                    className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
                  />
                </div>
                <span class="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                  NextJS
                </span>
              </div>
            </div>

            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="aos-init aos-animate"
            >
              <div class="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                <div class="relative">
                  <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                  <img
                    src="./vite.svg"
                    alt=""
                    className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
                  />
                </div>
                <span class="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                  Vite
                </span>
              </div>
            </div>
          </div>
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Projects;
