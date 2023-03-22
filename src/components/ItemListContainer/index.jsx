import styles from './itemListContainer.module.scss';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {categoryName} = useParams();

    if(categoryName) {
        useEffect(() => {
            fetch('/src/data/products.json')
                .then(response => response.json())
                .then(data => setProducts(data.filter(product => product.category === categoryName)))
        }, [categoryName]);
    }
    else {
        useEffect(() => {
            fetch('/src/data/products.json')
                .then(response => response.json())
                .then(data => setProducts(data))
        }, [categoryName]);
    }

    return (
        <section>
            <div className={styles.item_list_card}>
                {products.map((product) => (
                    <Link to={`/item/${product.id}`}>
                        <div key={product.id} className={styles.item_card}>
                            <img className={styles.item_card_image} src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default ItemListContainer