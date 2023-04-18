import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import styles from "./ItemDetailContainer.module.scss";
import db from "../../../db/firebase-config.js";
import { doc, getDoc } from "firebase/firestore";
import Spinner from "../Spinner";
import { CartContext } from "../../contexts/CartContext";

const ItemDetailContainer = () => {
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const productRef = doc(db, 'productos', id)

    const getProduct = async () => {
        const productDoc = await getDoc(productRef)
        const product = productDoc.data()
        setProduct(product)
        setLoading(false)
    }

    const handleQuantity = (value) => {
        setQuantity(parseInt(value))
    }

    useEffect(() => {
        getProduct();
    }, [id]);

    if(!product) {
        return <Navigate to="/404" />  
    }

    if(loading) {
        return <Spinner />
    }

    return (
        <section className={styles.product_detail_container}>
            <div className={styles.product_detail_image}>
                <img src={product.image} alt={product.name} />
            </div>
            <div>
                <h2 className={styles.product_detail_title}>{product.name}</h2>
                <p className={styles.product_detail_price}>${product.price}</p>
                <p>{product.description}</p>
                <div className={styles.product_actions_container}>
                    <select name="stock" onChange={(e) => handleQuantity(e.target.value)}>
                        {[...Array(product.stock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>
                        ))}
                    </select>
                    <button onClick={() => addToCart({...product, id: id, quantity: quantity}, false)}>Agregar al Carrito</button>
                </div>
            </div>
        </section>
    );
};

export default ItemDetailContainer;