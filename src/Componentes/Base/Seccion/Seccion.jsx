import styles from "./seccion.module.css";
import React from "react";

export default function Seccion(props) {
  const sectionRef = props.secRef || React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Opciones del observer
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    //creación del observer
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      }
    }, options);

    //observar el elemento
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    //limpiar el observer al desmontar el componente
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className={
        styles.seccion +
        " " +
        (isVisible ? styles.fadeIn : "") +
        " " +
        (props.direction === "row" ? styles.row : styles.column)
      }
      style={props.style ? props.style : {}}
    >
      {props.children}
    </section>
  );
}
