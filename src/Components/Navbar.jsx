import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        !event.target.closest(".drawer") &&
        !event.target.closest(".menu-button")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-[#09031B] shadow-md p-4 z-50 text-[#6C64F2]`}
    >
      <div className="w-11/12 max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold ">Ahbab</div>

        {/* Large screen nav links */}
        <ul className="hidden md:flex items-center gap-5 font-semibold">
          <li className="relative group cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6C64F2] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6C64F2] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            <Link to="skill" smooth={true} duration={500}>
              Skills
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6C64F2] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6C64F2] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            <Link to="project" smooth={true} duration={500}>
              Projects
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6C64F2] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <Link
            to="./resume.pdf"
            target="_blank"
            download
            className="w-full lg:w-auto"
          >
            <button className="w-full lg:w-auto py-2 px-4 text-sm rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow aos-init">
              <FaDownload></FaDownload>
              Resume
            </button>
          </Link>
        </ul>

        {/* Mobile menu icon */}
        <div
          className="md:hidden cursor-pointer menu-button "
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </div>
      </div>

      {/* Drawer for small screens */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full  shadow-lg p-5 flex flex-col drawer bg-[#09031B]"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold">Menu</span>
              <X
                size={28}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <ul className="flex flex-col gap-4 font-semibold">
              <li
                data-aos="fade-right"
                className="relative group cursor-pointer"
              >
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6C64F2] transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li
                data-aos="fade-right"
                className="relative group cursor-pointer"
              >
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6C64F2] transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li
                data-aos="fade-right"
                className="relative group cursor-pointer"
              >
                <Link to="skill" smooth={true} duration={500}>
                  Skills
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6C64F2] transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li
                data-aos="fade-right"
                className="relative group cursor-pointer"
              >
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6C64F2] transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li
                data-aos="fade-right"
                className="relative group cursor-pointer"
              >
                <Link to="project" smooth={true} duration={500}>
                  Projects
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6C64F2] transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li data-aos="fade-right">
                <Link
                  to="./resume.pdf"
                  target="_blank"
                  download
                  className="w-full lg:w-auto"
                >
                  <button
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="w-full lg:w-auto py-2 px-4 text-sm rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow aos-init"
                  >
                    <FaDownload></FaDownload>
                    Resume
                  </button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
