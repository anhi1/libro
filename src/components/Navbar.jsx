"use client";
import { useState, useContext } from "react";
import Link from "next/link";
import { LuHeadphones, LuHeart, LuLogIn, LuMoon, LuSun } from "react-icons/lu";
import { ThemeContext } from "@/app/context/ThemeContext";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [iconType, setIconType] = useState("moon");

  const toggleIcon = () => {
    setIconType((prevType) => (prevType === "moon" ? "sun" : "moon"));
    toggleDarkMode();
  };

  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary ${darkMode}`}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img className="logo" alt="Logo" src="./logo.svg" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <button className="darkModeButton" onClick={toggleIcon}>
          {iconType === "moon" ? (
            <LuMoon
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              alt="moon"
              width={180}
              height={37}
            />
          ) : (
            <LuSun
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              alt="sun"
              width={180}
              height={37}
            />
          )}
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/favoritos">
                <LuHeart /> Favoritos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/spotify">
                <LuHeadphones className="w-5 h-5" />
                Spotify
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">
                <LuLogIn /> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
