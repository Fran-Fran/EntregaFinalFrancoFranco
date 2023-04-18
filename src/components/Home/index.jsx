import React from "react";
import ItemListContainer from "../ItemListContainer";
import styles from "./home.module.scss";
import Greeting from "../Greeting";

const Home = () => {
    return (
        <>
            <section className={styles.section_home}>
                <Greeting />
            </section>
            <section className={styles.section_products}>
                <h2>Catálogo</h2>
                <ItemListContainer />
            </section>
        </>
    );
};

export default Home;