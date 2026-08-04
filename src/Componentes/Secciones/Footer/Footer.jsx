import styles from "./footer.module.css";

import Link from "../../Base/Link/Link";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>¡Gracias por llegar hasta aquí!</h2>

        <p className={styles.description}>
          Si te interesa mi perfil o tienes un proyecto en mente no dudes en
          escribirme!
        </p>

        <div className={styles.socials}>
          <Link href="mailto:carlosamov@gmail.com">
            <FaEnvelope size={28} />
          </Link>
          <Link href="https://www.linkedin.com/in/carlos-ovalles-4760a423b/">
            <FaLinkedin size={28} />
          </Link>
          <Link href="https://github.com/carlosamov">
            <FaGithub size={28} />
          </Link>
        </div>

        <div className={styles.copyright}>
          <p>
            © {new Date().getFullYear()} Carlos Ovalles. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
