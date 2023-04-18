import styles from './checkout.module.scss'

const Checkout = () => {
    return (
    <>
        <h2>Checkout</h2>
        <form className={styles.checkout_form} action="">
            <label htmlFor="name">Nombre
                <input type="text" name="name" id="name" />
            </label>
            <label htmlFor="surname">Apellido
                <input type="text" name="surname" id="surname" />
            </label>
            <label htmlFor="phone">Teléfono
                <input type="tel" name="phone" id="phone" />
            </label>
            <label htmlFor="email">Email
                <input type="email" name="email" id="email" />
            </label>
            <label htmlFor="email-repeat">Repite Email
                <input type="email" name="email-repeat" id="email-repeat" />
            </label>
        </form>
    </>
    )
}

export default Checkout