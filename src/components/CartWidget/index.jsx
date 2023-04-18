import styles from './cartWidget.module.scss'
import { useState, React, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { HiOutlineShoppingCart } from 'react-icons/hi'

const CartWidget = () => {
    const { cart } = useContext(CartContext)
    const [count, setCount] = useState(0)

    useEffect(() => {
        let counter = 0
        if(cart.length === 0) setCount(0)
        cart.map((product) => {
            counter += product.quantity
            setCount(counter)
        })
    }, [count, cart])

    return (
        <NavLink to='/cart' className={styles.cart_widget}>
            <div className={styles.cart_container}>
                <HiOutlineShoppingCart className={styles.cart_icon} />
                <span className={styles.cart_counter}>{count}</span>
            </div>
        </NavLink>
    )
}

export default CartWidget