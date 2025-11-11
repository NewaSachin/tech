import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PanelLeft, MoonIcon, SunIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/themeSlice";
import { assets } from "../assets/assets";

const Navbar = ({ setIsSidebarOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const navLinks = [
    { name: "Dashboard", path: "/" },
    { name: "Project", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "Setting", path: "#" },
  ];

  return (
    <div className="w-full bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 px-6 xl:px-16 py-3 flex-shrink-0">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Left section */}
        <div className="flex items-center gap-4 min-w-0 flex-1">
          {/* Sidebar Trigger */}
          <button
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className="sm:hidden p-2 rounded-lg transition-colors text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            <PanelLeft size={20} />
          </button>

          {/* Navbar */}
          <nav className="flex items-center border mx-4 max-md:w-full max-md:justify-between border-slate-700 px-6 py-4 rounded-full text-sm relative text-gray-900 dark:text-white">
            {/* Logo */}
            <NavLink to="/">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
                <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
                <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
                <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
              </svg>
            </NavLink>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 ml-7">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative overflow-hidden h-6 group ${
                      isActive
                        ? "text-indigo-500"
                        : "text-gray-900 dark:text-white"
                    }`
                  }
                >
                  <span className="block group-hover:-translate-y-full transition-transform duration-300">
                    {link.name}
                  </span>
                  <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>

            {/* Buttons */}
            <div className="hidden ml-14 md:flex items-center gap-4">
              <button className="border border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition text-gray-900 dark:text-white">
                Contact
              </button>
              <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black dark:text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-zinc-700 transition duration-300">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-900 dark:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="absolute top-16 left-0 w-full flex flex-col items-center gap-4 py-6 z-50 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors ${
                        isActive ? "text-indigo-500" : ""
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <button className="border border-slate-600 hover:bg-gray-200 dark:hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
                  Contact
                </button>
                <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black dark:text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-zinc-700 transition duration-300">
                  Get Started
                </button>
              </div>
            )}
          </nav>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="size-8 flex items-center justify-center bg-white dark:bg-zinc-800 shadow rounded-lg transition hover:scale-105 active:scale-95"
          >
            {theme === "light" ? (
              <MoonIcon className="size-4 text-gray-800 dark:text-gray-200" />
            ) : (
              <SunIcon className="size-4 text-yellow-400" />
            )}
          </button>

          {/* User Avatar */}
          <img
            src={assets.profile_img_a}
            alt="User Avatar"
            className="size-7 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
