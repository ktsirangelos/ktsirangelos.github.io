import { useState } from "react";
import { MoonIcon } from "../resources/MoonIcon";
import { SunIcon } from "../resources/SunIcon";
import "./Header.scss";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    const app = document.querySelector<HTMLElement>(".app");

    if (app) {
      if (app.classList.contains("dark-mode")) {
        app.classList.remove("dark-mode");
      } else {
        app.classList.add("dark-mode");
      }

      setIsDarkMode(!isDarkMode);
    }
  };

  return (
    <>
      <div className="title">
        <p>Konstantinos Tsirangelos, Full Stack Software Engineer</p>
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
        {isDarkMode ? <MoonIcon /> : <SunIcon />}
      </button>
    </>
  );
};
