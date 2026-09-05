import { createContext, useContext, useEffect } from "react";

const ThemeContext = createContext({ theme: "light", isDark: false, toggleTheme: () => {} });

/**
 * ThemeProvider — Permanently locks the website to the warm editorial light theme.
 * Removes any residual dark classes and clears localStorage.
 */
export function ThemeProvider({ children }) {
  const theme = "light";
  const isDark = false;
  const toggleTheme = () => {};

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
    root.classList.add("light");
    try {
      localStorage.removeItem("sairam-theme");
    } catch {}
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
