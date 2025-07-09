import React from "react";

import styles from "./contacto.module.css";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

export default function InformacionContacto() {
  return (
    <footer className={styles.container}>
      <div>
        <p className={styles.bold}>
          Gracias por visitar mi portafolio. Espero que encuentres interesante
          mi trabajo y no dudes en contactarme para cualquier consulta o
          colaboración.
        </p>

        <div className={styles.wrapper}>
          <div>
            <div className={styles.titulos}>
              <IoMdMail size={30} />
              <h2>Correos</h2>
            </div>
            <ul className={styles.correos}>
              <li>
                <a href="mailto:carlosamov@gmail.com">carlosamov@gmail.com</a>
              </li>
              <li>
                <a href="mailto:carlosamov@hotmail.com">
                  carlosamov@hotmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className={styles.titulos}>
              <FaUserFriends size={30} />
              <h2>Redes sociales</h2>
            </div>
            <ul className={styles.correos}>
              <li>
                <FaLinkedin size={20} />
                <a
                  href="https://www.linkedin.com/in/carlos-ovalles-4760a423b/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <FaGithub size={20} />
                <a href="https://github.com/carlosamov" target="_blank">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
