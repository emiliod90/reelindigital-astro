import { useEffect, useState } from "preact/hooks";
// import type { FunctionalComponent } from "preact";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  console.log("theme set to:", theme);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      //   document.documentElement.classList.add("dark");
      // localStorage.setItem("theme", "dark");
      //   localStorage.setItem("theme", theme);
      console.log("local storage set to dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      //   document.documentElement.classList.remove("dark");
      //   localStorage.removeItem("theme");
      console.log("dark theme removed from local storage");
      document.documentElement.removeAttribute("data-theme", "dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button>
  );
}

// export default function ThemeToggle(): FunctionalComponent {
//     const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

//     const handleClick = () => {
//         setTheme(theme === "light" ? "dark" : "light");
//         console.log(theme)
//     };

//     useEffect(() => {
//         if (theme === "dark") {
//             document.documentElement.classList.add("dark");
//         } else {
//             document.documentElement.classList.remove("dark");
//         }
//         localStorage.setItem("theme", theme);
//     }, [theme]);

//     return (
//         <button onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button>
//     );
// }
