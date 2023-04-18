import styles from './greeting.module.scss';
import React from 'react';

const Greeting = () => {
    {
        return (
            <div className={styles.greeting_container}>
                ¡Bienvenido a Paw Pets! <br/><br/>
                Aquí te mostraremos todo lo que necesitas para cuidar a tu mejor amigo peludo. Desde juguetes y accesorios, hasta consejos de entrenamiento y nutrición, ¡lo tenemos todo! <br/><br/>
                Explora nuestra selección cuidadosamente seleccionada de productos para asegurarte de que tu mascota tenga todo lo que necesita para ser feliz y saludable. <br/><br/>
                ¡Gracias por visitarnos!
            </div>
        )
    }
}

export default Greeting