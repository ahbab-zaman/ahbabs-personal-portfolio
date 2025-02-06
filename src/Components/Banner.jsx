import Lottie from "lottie-react";
import animation from "../../public/Animation - 1738848074897.json";
import { Sparkles } from "lucide-react";
import "./common.css";
const Banner = () => {
  return (
    <>
      <div className="w-full bg-[#09031B]">
        <section className="w-11/12 mx-auto flex justify-center items-center">
          <div className="w-1/2 space-y-4">
            <button className="relative flex items-center gap-2 px-4 py-2 rounded-full border border-transparent bg-[#422771] text-[#7463F2] font-semibold text-sm shadow-lg shadow-purple-500/30 transition-all hover:shadow-purple-500/50 hover:scale-105 hover:transition-colors hover:duration-300">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7463F2] to-[#7463F2]">
                Ready to Code
              </span>
            </button>
            <p className="text-[#7463F2] text-3xl">I am</p>
            <div
              class="space-y-2 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h1 class="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                <span class="relative inline-block">
                  <span class="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
                  <span class="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent uppercase">
                    ahbab <br /> uz <br /> zaman
                  </span>
                </span>
              </h1>
            </div>
            <h3 className="text-3xl font-light text-[#F2F3F5]">
              Frontend Developer
            </h3>
            <div
              class="flex flex-row gap-3 w-full justify-start aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="1400"
            >
              <a href="https://drive.google.com/file/d/1JO9nwd26_u9SGHkaP7oB366Jwns9KpMM/view?usp=sharing">
                <button class="group relative w-[160px]">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                  <div class="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                    <div class="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
                    <span class="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                      <span class="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                        Resume
                      </span>
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
                        class="lucide lucide-external-link w-4 h-4 text-gray-200 group-hover:rotate-45 transform transition-all duration-300 z-10"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </span>
                  </div>
                </button>
              </a>
              <a href="#Contact">
                <button class="group relative w-[160px]">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                  <div class="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                    <div class="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
                    <span class="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                      <span class="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                        Contact
                      </span>
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
                        class="lucide lucide-mail w-4 h-4 text-gray-200 group-hover:translate-x-1 transform transition-all duration-300 z-10"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </span>
                  </div>
                </button>
              </a>
            </div>
            <div
              class="hidden sm:flex gap-4 justify-start aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="1600"
            >
              <a
                href="https://github.com/abnahid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="group relative p-3">
                  <div class="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div class="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
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
                      class="lucide lucide-github w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </div>
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/ajanhid/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="group relative p-3">
                  <div class="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div class="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
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
                      class="lucide lucide-linkedin w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                </button>
              </a>
              
            </div>
          </div>
          <div className="w-1/2">
            <Lottie animationData={animation} loop={true} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
