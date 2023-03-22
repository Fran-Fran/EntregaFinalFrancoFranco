import React from "react";
import ItemListContainer from "../ItemListContainer";
import styles from "./home.module.scss";
import Greeting from "../Greeting";

const Home = () => {
    const greeting = [
        "¡Bienvenido a Paw Pets!",
        <br />,
        <br />,
        "Aquí te mostraremos todo lo que necesitas para cuidar a tu mejor amigo peludo.",
        "Desde juguetes y accesorios, hasta consejos de entrenamiento y nutrición, ¡lo tenemos todo!",
        <br />,
        "Explora nuestra selección cuidadosamente seleccionada de productos para asegurarte de que tu mascota tenga todo lo que necesita para ser feliz y saludable.",
        <br />,
        <br />,
        "¡Gracias por visitarnos!",
    ];
    return (
        <>
            <section className={styles.section_home}>
                <Greeting greeting={greeting} />
            </section>
            <section className={styles.section_products}>
                <h2>Catálogo</h2>
                <ItemListContainer />
            </section>
        </>
    );
};

export default Home;