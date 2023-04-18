import { Navigate } from 'react-router-dom'
import styles from './orderSuccess.module.scss'

const OrderSuccess = ({ order }) => {

    if(!order) return (<Navigate to="/" />)

    return (
        <section className={styles.order_success_container}>
            <h1>Orden de compra exitosa</h1>
            <div>
                <p><strong>Su número de orden es: #{order.id}</strong></p>
                <br/>
                <p>Muchas gracias por comprar en Paw Pets</p>
                <p>Nos contactaremos con usted por medio del correo que ingresó y le haremos llegar <br/> su pedido a cualquier parte del país</p>
            </div>
        </section>
    )
}

export default OrderSuccess