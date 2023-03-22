import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import styles from "./ItemDetailContainer.module.scss";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        fetch(`/src/data/products.json`)
            .then(response => response.json())
            .then(data => setProduct(data.find(product => product.id == id)));
    }, [id]);

    if(!product) {
      return <Navigate to="/404" />  
    } 

    console.log(product);
    return (
        <section className={styles.product_detail_container}>
            <div className={styles.product_detail_image}>
                <img src={product.image} alt={product.name} />
            </div>
            <div>
                <h2 className={styles.product_detail_title}>{product.name}</h2>
                <p className={styles.product_detail_price}>${product.price}</p>
                <p>{product.description}</p>
            </div>
        </section>
    );
};

export default ItemDetailContainer;