import { IoShareSocialOutline } from "react-icons/io5";
import Title from "./Title";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import emailIcon from "../../public/emailIcon.png";
import addressIcon from "../../public/addressIcon.png";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_oso2p98", "template_3o42yf8", form.current, {
        publicKey: "cyXF2OtdeMME4QePo",
      })
      .then(
        () => {
          toast.success("Successfully Sent!");
          form.current.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          toast.error("Email Sent Error");
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <section
        id="contact"
        className="w-full bg-[#09031B] lg:py-10 lg:pt-0 pt-6 pb-0"
      >
        <Title title="Contact Me"></Title>
        <section>
          <div className="lg:w-3/4 w-11/12 mx-auto bg-[#16122c] rounded-xl py-16">
            <div
              data-aos="fade-right"
              className="flex justify-center items-center gap-6"
            >
              <h2 className="lg:text-4xl text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-center capitalize mb-4">
                Get in touch
              </h2>
              <IoShareSocialOutline className="text-[#a855f7] text-4xl"></IoShareSocialOutline>
            </div>
            <p
              data-aos="fade-left"
              class="text-gray-400 text-center text-lg mb-6"
            >
              Have something to discuss? Send me a message and let's talk.
            </p>
            <div className="w-3/4 mx-auto bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
              <div className="space-y-4">
                <div className="flex lg:flex-row flex-col items-center justify-between gap-4">
                  <a
                    href="mailto:zamanahbab007@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-4 rounded-lg 
             bg-white/5 border border-white/10 overflow-hidden
             hover:border-white/20 transition-all duration-500 w-full"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
               bg-gradient-to-r from-[#0A66C2] to-[#0077B5]"
                    ></div>
                    <div className="relative flex items-center justify-center gap-4">
                      <div className="relative flex items-center justify-center">
                        <div
                          className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                   group-hover:scale-110 group-hover:opacity-30"
                        ></div>
                        <div className="relative lg:p-2 p-0 rounded-md w-full">
                          <img
                            className="lucide lucide-linkedin w-6 h-6 transition-all duration-500 group-hover:scale-105"
                            src={emailIcon}
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                          Connect On Gmail
                        </span>
                        <span class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          zamanahbab007@gmail.com
                        </span>
                      </div>
                    </div>
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
                      class="lucide lucide-external-link relative w-5 h-5 text-gray-500 group-hover:text-white
               opacity-0 group-hover:opacity-100 transition-all duration-300
               transform group-hover:translate-x-0 -translate-x-1"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                      ></div>
                    </div>
                  </a>
                  <Link
                    to=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-4 rounded-lg 
             bg-white/5 border border-white/10 overflow-hidden
             hover:border-white/20 transition-all duration-500 w-full"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
               bg-gradient-to-r from-[#0A66C2] to-[#0077B5]"
                    ></div>
                    <div className="relative flex items-center gap-4">
                      <div className="relative flex items-center justify-center">
                        <div
                          className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                   group-hover:scale-110 group-hover:opacity-30"
                        ></div>
                        <div className="relative p-2 rounded-md">
                          <img
                            className="lucide lucide-linkedin w-6 h-6 transition-all duration-500 group-hover:scale-105"
                            src={addressIcon}
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                          Address
                        </span>
                        <span class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          Subid Bazar, Sylhet
                        </span>
                      </div>
                    </div>
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
                      class="lucide lucide-external-link relative w-5 h-5 text-gray-500 group-hover:text-white
               opacity-0 group-hover:opacity-100 transition-all duration-300
               transform group-hover:translate-x-0 -translate-x-1"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                      ></div>
                    </div>
                  </Link>
                </div>
                <Link
                  to="http://www.linkedin.com/in/zaman-ahbab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between p-4 rounded-lg 
             bg-white/5 border border-white/10 overflow-hidden
             hover:border-white/20 transition-all duration-500"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
               bg-gradient-to-r from-[#0A66C2] to-[#0077B5]"
                  ></div>
                  <div className="relative flex items-center gap-4">
                    <div className="relative flex items-center justify-center">
                      <div
                        className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                   group-hover:scale-110 group-hover:opacity-30"
                      ></div>
                      <div className="relative p-2 rounded-md">
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
                          className="lucide lucide-linkedin w-6 h-6 transition-all duration-500 group-hover:scale-105"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </div>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                        Let's Connect
                      </span>
                      <span class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        on LinkedIn
                      </span>
                    </div>
                  </div>
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
                    class="lucide lucide-external-link relative w-5 h-5 text-gray-500 group-hover:text-white
               opacity-0 group-hover:opacity-100 transition-all duration-300
               transform group-hover:translate-x-0 -translate-x-1"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                    ></div>
                  </div>
                </Link>
                <Link
                  to="https://github.com/ahbab-zaman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between p-4 rounded-lg 
             bg-white/5 border border-white/10 overflow-hidden
             hover:border-white/20 transition-all duration-500"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
               bg-gradient-to-r from-[#0A66C2] to-[#0077B5]"
                  ></div>
                  <div className="relative flex items-center gap-4">
                    <div className="relative flex items-center justify-center">
                      <div
                        className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                   group-hover:scale-110 group-hover:opacity-30"
                      ></div>
                      <div className="relative p-2 rounded-md">
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
                          class="lucide lucide-github w-5 h-5 transition-all duration-500 group-hover:scale-110"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      </div>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                        Let's Connect
                      </span>
                      <span class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        on LinkedIn
                      </span>
                    </div>
                  </div>
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
                    class="lucide lucide-external-link relative w-5 h-5 text-gray-500 group-hover:text-white
               opacity-0 group-hover:opacity-100 transition-all duration-300
               transform group-hover:translate-x-0 -translate-x-1"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                    ></div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="pt-4 pb-12 space-y-4">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div
                  data-aos="fade-up"
                  className="relative group w-3/4 mx-auto"
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
                    class="lucide lucide-user absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="relative group aos-init  w-3/4 mx-auto"
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
                    class="lucide lucide-mail absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="relative group aos-init  w-3/4 mx-auto"
                >
                  <img
                    className="lucide lucide-mail absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors"
                    src="./telephone (1).png"
                    alt=""
                  />
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>

                  <input
                    type="text"
                    name="number"
                    placeholder="Your Number"
                    className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="relative group aos-init aos-animate w-3/4 mx-auto"
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
                    className="lucide lucide-message-square absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9.9rem] disabled:opacity-50"
                    required=""
                  ></textarea>
                </div>

                <button
                  data-aos="fade-up"
                  data-aos-delay="200"
                  type="submit"
                  className="w-3/4 mx-auto bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 aos-init aos-animate"
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
                    class="lucide lucide-send w-5 h-5"
                  >
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
