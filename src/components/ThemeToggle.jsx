import { useEffect, useState } from "preact/hooks";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  // console.log("theme set to:", theme);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      // console.log("local storage set to dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      // console.log("dark theme removed from local storage");
      document.documentElement.removeAttribute("data-theme", "dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button>
  );
}
