import Lottie from "lottie-react";
import animation from "../../public/Animation - 1738848074897.json";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
const Banner = () => {
  return (
    <>
      <div className="w-full bg-[#09031B] lg:py-10 lg:pt-0 pt-6 pb-0">
        <section className="w-11/12 mx-auto flex lg:flex-row flex-col justify-center items-center">
          <div className="lg:w-1/2 w-full space-y-4">
            <button className="relative flex items-center gap-2 px-4 py-2 rounded-full border border-transparent bg-[#422771] text-[#7463F2] font-semibold text-sm shadow-lg shadow-purple-500/30 transition-all hover:shadow-purple-500/50 hover:scale-105 hover:transition-colors hover:duration-300">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7463F2] to-[#7463F2]">
                Ready to Code
              </span>
            </button>
            <p className="text-[#7463F2] text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight">
              I am
            </p>
            <div
              className="space-y-2 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight">
                <span className="relative inline-block">
                  <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
                  <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent uppercase">
                    ahbabuzzaman
                  </span>
                </span>
              </h1>
            </div>
            <h3 className="text-xl lg:text-3xl font-light text-[#F2F3F5]">
              Frontend Developer
            </h3>

            <Link
              to="./resume.pdf"
              target="_blank"
              download
              class="w-full lg:w-auto"
            >
              <button
                data-aos="fade-up"
                data-aos-duration="800"
                class="w-1/2 lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow aos-init aos-animate"
              >
                <FaDownload></FaDownload>
                RESUME
              </button>
            </Link>
            <div
              className="flex flex-row gap-3 w-full justify-start aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="1400"
            ></div>
            <div
              className=" sm:flex gap-4 justify-start aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="1600"
            >
              <Link
                to="https://github.com/ahbab-zaman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group relative p-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
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
                      className="lucide lucide-github w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </div>
                </button>
              </Link>
              <Link
                to="https://www.linkedin.com/in/ahbab-zaman-6398b6345"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group relative p-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
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
                      className="lucide lucide-linkedin w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <Lottie animationData={animation} loop={true} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
