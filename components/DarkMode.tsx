
import React, { useState, useEffect } from "react";
import { SunIconKu } from "./Collection/sunIcon";
import { DarkIconKu } from "./Collection/darkIcon";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Cek local storage untuk mengatur mode saat load pertama kali
  useEffect(() => {
    const darkModePreference = localStorage.getItem("theme");
    if (darkModePreference === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Fungsi untuk toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={toggleDarkMode}
        className="px-2 py-2 rounded-full text-white bg-primary"
      >
        {isDarkMode ? <SunIconKu/> : <DarkIconKu/>}
      </button>
    </div>
  );
};

export default DarkModeToggle;
