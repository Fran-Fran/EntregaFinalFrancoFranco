import icon from '/shopping-cart.png'
import styles from './cartWidget.module.scss'
import { useState } from 'react'

const CartWidget = () => {
    const [count, setCount] = useState(0)
    return (
        <div onClick={() => setCount((count) => count < 99 ? count + 1 : count = 0)} className={styles.cart_widget}>
            <div className={styles.cart_container}>
                <img className={styles.cart_icon} src={icon} alt="" />
                <span className={styles.cart_counter}>{count}</span>
            </div>
        </div>
    )
}

export default CartWidget