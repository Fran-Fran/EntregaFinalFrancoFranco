import { Link } from "react-router-dom"
import styles from "./cartEmptyContainer.module.scss"

const CartEmptyContainer =() => {
  return (
    <section className={styles.empty_cart_container}>
        <div className={styles.empty_cart_text}>Tu carrito esta vacío</div>
        <Link to="/" className={styles.empty_cart_button}>Volver al inicio</Link>
    </section>
  )
}

export default CartEmptyContainer