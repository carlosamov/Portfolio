import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { useGlobalContext } from "../../../Contexto/GlobalContext.jsx";

import styles from "./cabecera.module.css";

import { BotonHeader } from "../../Atomos/Boton/Boton.jsx";
import Link from "../../Atomos/Link/Link.jsx";

export default function Header() {
  const ctx = useGlobalContext();

  return (
    <header className={styles.header}>
      <h1>Mi portafolio</h1>
      <div className={styles.buttons}>
        <BotonHeader onClick={() => ctx.scrollTo("certificaciones")}>
          Certificaciones
        </BotonHeader>
        <BotonHeader onClick={() => ctx.scrollTo("proyectos")}>
          Proyectos
        </BotonHeader>
        <BotonHeader
          onClick={() => ctx.setTheme(ctx.theme === "light" ? "dark" : "light")}
        >
          {ctx.theme === "light" ? <FaMoon /> : <FaSun />}
        </BotonHeader>
        <Link href="https://www.linkedin.com/in/carlos-ovalles-4760a423b/">
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/carlosamov">
          <FaGithub />
        </Link>
      </div>
    </header>
  );
}
