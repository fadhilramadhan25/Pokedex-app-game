import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  const storedTheme = localStorage.getItem("theme") as Theme;
  const [theme, setTheme] = useState<Theme>(storedTheme || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newValue = theme === "dark" ? "light" : "dark";
    setTheme(newValue);
  };

  return {theme, toggleTheme};
};
