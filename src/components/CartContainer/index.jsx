import React, { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CartEmptyContainer from '../CartEmptyContainer'
import styles from './cartContainer.module.scss'
import CartListContainer from '../CartListContainer';
import Checkout from '../Checkout';
import validateForm from '../../utils/validateForm';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import db from '../../../db/firebase-config';
import OrderSuccess from '../OrderSuccess';
import Spinner from '../Spinner';

const CartContainer = () => {
    const ordersRef = collection(db, 'orders');
    const { cart, cleanCart } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState({});
    const [step, setStep] = useState(1);

    const goToStep = (step) => {
        if(step === 1) {
            setStep(1);
            const step1 = document.querySelector('#step1');
            const step2 = document.querySelector('#step2');
            step1.style.display = 'block';
            step2.style.display = 'none';
        } else if (step === 2) {
            setStep(2);
            const step1 = document.querySelector('#step1');
            const step2 = document.querySelector('#step2');
            step2.style.display = 'block';
            step1.style.display = 'none';
        }
    }
    
    const storeOrder = async (e) => {
        e.preventDefault();
        if(!validateForm()) return;
        setLoading(true);
        const buyer = {
            name: document.querySelector('#name').value,
            surname: document.querySelector('#surname').value,
            phone: document.querySelector('#phone').value,
            email: document.querySelector('#email').value,
            products: cart
        }

        //update stock
        cart.forEach(async (product) => {
            const productRef = doc(db, 'productos', product.id);
            const productDoc = await getDoc(productRef);
            const productData = {...productDoc.data(), id: product.id};
            const newStock = productData.stock - product.quantity;
            await updateDoc(productRef, {stock: newStock});
        });

        const newOrder = await addDoc(ordersRef, buyer);
        const orderRef = doc(db, 'orders', newOrder.id);
        const orderDoc = await getDoc(orderRef);
        const order = {...orderDoc.data(), id: newOrder.id};
        setOrder(order);
        cleanCart(false);
        setLoading(false);
    }

    if (loading) return (<Spinner />)
    
    if (order.id) {
        return <OrderSuccess order={order} />
    }

    if (cart.length === 0) return <CartEmptyContainer />

    return (
        <section className={styles.cart_container}>
            <div id="step1" className={styles.table_container}>
                <CartListContainer />
            </div>
            <div id="step2" className={styles.checkout_container}>
                <Checkout />
            </div>
            <div className={styles.cart_buttons_container}>
                {step === 1 && 
                    <>
                        <button onClick={() => cleanCart()}>Eliminar Carrito</button>
                        <button onClick={() => goToStep(2)}>Continuar</button>
                    </>
                }
                {step === 2 && 
                    <>
                        <button onClick={() => goToStep(1)}>Regresar</button>
                        <button onClick={(e) => storeOrder(e)}>Realizar Compra</button>
                    </>
                }
            </div>
        </section>
    )
}

export default CartContainer