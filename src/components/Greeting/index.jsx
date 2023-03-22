import styles from './greeting.module.scss';
import React from 'react';

const Greeting = ({ greeting }) => {
    {
        return (
            <div className={styles.greeting_container}>{greeting}</div>
        )
    }
}

export default Greeting