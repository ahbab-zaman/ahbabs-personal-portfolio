import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
    <nav className="fixed top-0 left-0 w-full bg-[#09031B] shadow-md p-4 z-50 text-[#6C64F2]">
      <div className="w-11/12 max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold ">Ahbab</div>

        {/* Large screen nav links */}
        <div className="hidden md:flex gap-6 font-semibold">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Projects</Link>
        </div>

        {/* Mobile menu icon */}
        <div
          className="md:hidden cursor-pointer menu-button"
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
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-5 flex flex-col drawer"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold">Menu</span>
              <X
                size={28}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <nav className="flex flex-col gap-4">
              <Link>Home</Link>
              <Link>About</Link>
              <Link>Contact</Link>
              <Link>Projects</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
