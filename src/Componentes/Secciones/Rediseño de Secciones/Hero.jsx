import Blob from "../../Base/Blob/Blob.jsx";
import imgCarlos from "../../../assets/foto de perfil.jpeg";
import Section from "../../Base/Seccion/Seccion.jsx";

import styles from "./Hero.module.css";

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
      </div>
      <Blob>
        <img src={imgCarlos} alt="imagen Carlos Ovalles" />
      </Blob>
    </Section>
  );
}
