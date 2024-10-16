import React, { createContext, useContext, useState, ReactNode } from "react";

// Define tipe untuk context value
interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Buat context
const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

// Provider untuk membungkus aplikasi dan menyediakan state dark mode
export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false); // Default dark mode adalah false (light mode)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Hook untuk mengakses context di komponen lain
export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
