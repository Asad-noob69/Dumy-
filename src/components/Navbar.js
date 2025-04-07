import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Impor
import logoimg from "../assests/TMM-LANDING PAGE 1.svg";
import "./Navbar.css";
import iconmenu from "../assests/Menu Icon.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white w-full z-50 relative">
      <div className="bg-[#00603A] "></div>
      <div className="flex justify-evenly items-center p-4 ">
        <img src={logoimg} className="image ml-4" alt="Logo" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto md:hidden text-gray-800"
        >
          {isOpen ? (
            <X size={25} />
          ) : (
            <img src={iconmenu} className="w-6" alt="imgae" />
          )}
        </button>
      </div>
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md md:static p-3 md:bg-transparent md:shadow-none md:flex md:justify-center  md:items-start ${
          isOpen ? "block " : "hidden"
        }`}
      >
        <div className="flex flex-col items-start md:flex-row md:space-x-[4.9rem] mt-4 mb-4 space-y-2 md:space-y-0 pl-6">
          {[
            { name: "Mansions", href: "/mansions" },
            { name: "Penthouses", href: "/penthouses" },
            { name: "New Developments", href: "/listingpage" },
            { name: "Magazine", href: "/magazine" },
            { name: "Luxe Collectibles", href: "/listingpage" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="font-inter pb-2 text-gray-800 hover:text-[#00603A] text-base md:text-xl"
            >
              {link.name}
            </a>
          ))}
        </div>

        <p
          className="flex justify-start border-t border-[#000000] mx-6 space-x-4 pt-6 md:hidden"
          style={{ textTransform: "capitalize" }}
        >
          FOLLOW THE MANSION MARKET
        </p>
        <div className="flex justify-start pl-6 mt-4 py-4 space-x-6 mb-2 md:hidden">
          <a
            href="#"
            className="text-[#00603A] hover:text-gray-400 text-2xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="hover:text-gray-400 text-[#00603A] text-2xl"
            aria-label="Twitter X"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="hover:text-gray-400 text-[#00603A] text-2xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-gray-400 text-[#00603A] text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="hover:text-gray-400 text-2xl text-[#00603A]"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
