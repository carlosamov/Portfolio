import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { useGlobalContext } from "../../../Contexto/GlobalContext.jsx";

import styles from "./cabecera.module.css";

import { BtnHeader } from "../../Base/Botones/Botones.jsx";
import Link from "../../Base/Link/Link.jsx";

export default function Header() {
  const ctx = useGlobalContext();

  return (
    <header ref={ctx.refs.header} className={styles.header}>
      <h1>Mi portafolio</h1>
      <div className={styles.buttons}>
        <BtnHeader onClick={() => ctx.scrollTo("certificaciones")}>
          Certificaciones
        </BtnHeader>
        <BtnHeader onClick={() => ctx.scrollTo("proyectos")}>
          Proyectos
        </BtnHeader>
        <BtnHeader
          onClick={() => ctx.setTheme(ctx.theme === "light" ? "dark" : "light")}
        >
          {ctx.theme === "light" ? <FaMoon /> : <FaSun />}
        </BtnHeader>
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
