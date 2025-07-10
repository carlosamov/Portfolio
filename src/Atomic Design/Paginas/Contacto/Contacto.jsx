import React from "react";

import styles from "./contacto.module.css";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

export default function InformacionContacto() {
  return (
    <footer className={styles.container}>
      <p className={styles.bold}>
        Gracias por visitar mi portafolio. Espero que encuentres interesante mi
        trabajo y no dudes en contactarme para cualquier consulta o
        colaboración.
      </p>

      <div className={styles.wrapper}>
        <div>
          <div className={styles.titulos}>
            <IoMdMail size={30} />
            <h2>Correos</h2>
          </div>
          <div className={styles.correos}>
            <a href="mailto:carlosamov@gmail.com">carlosamov@gmail.com</a>
            <a href="mailto:carlosamov@hotmail.com">carlosamov@hotmail.com</a>
          </div>
        </div>

        <div>
          <div className={styles.titulos}>
            <FaUserFriends size={30} />
            <h2>Redes sociales</h2>
          </div>
          <div className={styles.correos}>
            <a
              href="https://www.linkedin.com/in/carlos-ovalles-4760a423b/"
              target="_blank"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>

            <a href="https://github.com/carlosamov" target="_blank">
              <FaGithub size={20} /> Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
