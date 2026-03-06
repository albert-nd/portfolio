import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./components/Pages/Home";
import AboutMe from "./components/Pages/AboutMe";
import Connect from "./components/Pages/Connect";
import Features from "./components/Pages/Features";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/AboutMe" },
    { name: "Projects", path: "/Features" },
    { name: "Connect", path: "/Connect" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors pb-5">
      <header
        className={`sticky top-0 z-50 ${
          scrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1640px] mx-auto px-4 py-5 flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-xl font-bold text-black dark:text-white">
            ALBERT NDUKWE
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 font-semibold"
                    : "text-black dark:text-white font-semibold hover:text-yellow-500"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
          >
            <span
              className={`absolute w-6 h-[2px] bg-black dark:bg-white transition-transform duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-black dark:bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-black dark:bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white/5 dark:bg-gray-900/5 backdrop-blur shadow-lg"
            >
              <div className="flex flex-col items-center py-6 gap-6">

                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-semibold text-black dark:text-white hover:text-yellow-500"
                  >
                    {item.name}
                  </NavLink>
                ))}

                {/* Dark Mode Toggle */}
                <button
                  onClick={() => setDarkMode((p) => !p)}
                  className="px-4 py-2 rounded-lg border text-black dark:text-white hover:border-amber-400"
                >
                  {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
                </button>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page Animation */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="max-w-[1640px] mx-auto px-4 mt-10"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Features" element={<Features />} />
            <Route path="/Connect" element={<Connect />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}