import React from 'react';
import styles from './Error404.module.scss';

const Error404 = () => {
    {
        return (
            <section className={styles.error_container}>
                <img className={styles.error_image} src={'/404.jpeg'} alt="404 not found" />
            </section>
        )
    }
}

export default Error404