import { IoShareSocialOutline } from "react-icons/io5";
import Title from "./Title";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

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
        <div className="lg:w-3/4 w-11/12 mx-auto bg-[#16122c] rounded-xl py-12 space-y-4">
          <div data-aos="fade-right" className="flex justify-center items-center gap-6">
            <h2 className="lg:text-4xl text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-center capitalize">
              Get in touch
            </h2>
            <IoShareSocialOutline className="text-[#a855f7] text-4xl"></IoShareSocialOutline>
          </div>
          <p data-aos="fade-left" class="text-gray-400 text-center text-lg">
            Have something to discuss? Send me a message and let's talk.
          </p>

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

            <div data-aos="fade-up"
              data-aos-delay="100" className="relative group aos-init  w-3/4 mx-auto">
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

            <div data-aos="fade-up"
              data-aos-delay="200" className="relative group aos-init  w-3/4 mx-auto">
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
      </section>
    </>
  );
};

export default Contact;
