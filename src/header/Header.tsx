import { useState, useEffect } from "react";
import { MoonIcon } from "../resources/MoonIcon";
import { SunIcon } from "../resources/SunIcon";
import "./Header.scss";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <div className="title">
        <p>Konstantinos Tsirangelos, Software Engineer</p>
      </div>
      <div className="separator"></div>
      <div className="link">
        <a href="mailto:ktsirangelos@proton.me">Email</a>
      </div>
      <div className="link">
        <a
          href="https://github.com/ktsirangelos"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <button
        id="theme-toggle"
        className="theme"
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </>
  );
};
