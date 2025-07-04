import { FaMoon, FaSun } from "react-icons/fa";
import { useGlobalContext } from "../../../Contexto/GlobalContex.jsx";

import styles from "./cabecera.module.css";

import { BotonHeader } from "../../Atomos/Boton/Boton.jsx";

export default function Header() {
  const ctx = useGlobalContext();

  return (
    <header className={styles.header}>
      <h1>Mi portafolio</h1>
      <BotonHeader
        onClick={() => ctx.setTheme(ctx.theme === "light" ? "dark" : "light")}
      >
        Cambiar a {ctx.theme === "light" ? "modo oscuro" : "modo claro"}{" "}
        {ctx.theme === "light" ? <FaMoon /> : <FaSun />}
      </BotonHeader>
    </header>
  );
}
