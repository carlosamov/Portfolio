import Blob from "../../Base/Blob/Blob.jsx";
import Section from "../../Base/Seccion/Seccion.jsx";
import Link from "../../Base/Link/Link.jsx";
import { BtnPrimary } from "../../Base/Botones/Botones.jsx";

import styles from "./hero.module.css";

import imgCarlos from "../../../assets/foto_carlos.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <Section style={{ flexDirection: "row" }}>
      <div>
        <div className={styles.hero_name}>
          <p>Hola, soy</p>
          <p>Carlos Ovalles</p>
          <p>Full Stack Developer | .NET, React.js y Node.js.</p>
        </div>

        <p className={styles.hero_description}>
          Especializado en la digitalización de procesos técnicos y la creación
          de aplicaciones robustas con persistencia de datos en PostgreSQL. Con
          experiencia en el diseño de interfaces en Figma y su implementación en
          arquitecturas de componentes reutilizables, aseguro una integración
          fluida entre la experiencia de usuario y la lógica de servidor.
        </p>

        <div className={styles.hero_links}>
          <Link href="https://www.linkedin.com/in/carlos-ovalles-4760a423b/">
            <FaLinkedin size={28} />
          </Link>
          <Link href="https://github.com/carlosamov">
            <FaGithub size={28} />
          </Link>
          <BtnPrimary
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/11dtzW-gtkDluDV0oEnuRqmg7KAh0GN20/view?usp=drive_link",
                "_blank"
              )
            }
          >
            Descargar CV
          </BtnPrimary>
        </div>
      </div>
      <Blob>
        <img src={imgCarlos} alt="imagen Carlos Ovalles" />
      </Blob>
    </Section>
  );
}
