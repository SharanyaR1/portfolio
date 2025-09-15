import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Top bar */}
      <div className="flex mt-5 justify-between items-center py-6">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 text-base md:text-sm lg:text-md tracking-wide">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navbar-link font-semibold ${isActive ? "active" : ""}`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `navbar-link font-semibold ${isActive ? "active" : ""}`
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              `navbar-link font-semibold ${isActive ? "active" : ""}`
            }
          >
            BOOKS
          </NavLink>
          <a
            href="https://blog-sharanya.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-link font-semibold"
          >
            BLOGS
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RiMenu4Line size={25} />
        </button>
      </div>

      {/* Dropdown Mobile Menu */}
      <div
        className={`md:hidden fixed top-[72px] left-0 w-full bg-white shadow-md overflow-hidden transition-all duration-300 z-50 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 text-sm py-6">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "font-bold text-gray-800" : ""
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "font-bold text-gray-800" : ""
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/books"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "font-bold text-gray-800" : ""
            }
          >
            BOOKS
          </NavLink>
          <a
            href="https://blog-sharanya.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            BLOGS
          </a>
        </div>
      </div>
    </nav>
  );
}
