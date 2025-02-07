import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#09031B] py-2">
        <hr className=" border-gray-400 opacity-15 sm:mx-auto text-center py-3" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400 ">
          © 2025
          <Link to="/" className="hover:underline">
            AHBAB
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
