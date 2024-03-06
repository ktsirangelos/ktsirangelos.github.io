import { useState } from "react";
import { MoonIcon } from "../resources/MoonIcon";
import { SunIcon } from "../resources/SunIcon";
import "./Header.scss";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    const root = document.getElementById("root");

    root?.classList.contains("dark-mode")
      ? root?.classList.remove("dark-mode")
      : root?.classList.add("dark-mode");

    setIsDarkMode(!isDarkMode);
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
      <button id="theme-toggle" className="theme" onClick={toggleTheme}>
        {isDarkMode ? <MoonIcon /> : <SunIcon />}
      </button>
    </>
  );
};
