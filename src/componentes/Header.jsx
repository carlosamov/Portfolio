import { FaMoon, FaSun } from "react-icons/fa";
import { useGlobalContext } from "./GlobalContex.jsx";

import "./estilos/header.css";

export default function Header() {
  const ctx = useGlobalContext();

  return (
    <header>
      <h1>Mi portafolio</h1>
      <button
        onClick={() => ctx.setTheme(ctx.theme === "light" ? "dark" : "light")}
      >
        Cambiar a {ctx.theme === "light" ? "modo oscuro" : "modo claro"}{" "}
        {ctx.theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </header>
  );
}
