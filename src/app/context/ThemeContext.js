'use client';

import { createContext, useState } from 'react';


export const ThemeContext = createContext();


export default function ThemeContextProvider({children}) {
    const [darkMode, setDarkMode] = useState("light"); // Por defecto, establecer el modo claro
    const [darkModeButton, setDarkModeButton] = useState("show");
    const [lightModeButton, setLightModeButton] = useState("hidden");
  
    const toggleDarkMode = () => {
      if (darkMode === "light") {
        setDarkMode("darkmode");
        setDarkModeButton("hidden");
        setLightModeButton("show");
      } else {
        setDarkMode("light");
        setDarkModeButton("show");
        setLightModeButton("hidden");
      }
    };


    const values = {
        darkMode: darkMode,
        setDarkMode: setDarkMode,
        lang: "ES",
        toggleDarkMode: toggleDarkMode,
        darkModeButton: darkModeButton,
        lightModeButton: lightModeButton
    }

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}