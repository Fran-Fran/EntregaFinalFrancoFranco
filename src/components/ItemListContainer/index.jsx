import styles from './itemListContainer.module.scss';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import db from '../../../db/firebase-config.js'
import { collection, getDocs } from 'firebase/firestore';
import Spinner from '../Spinner';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const productsRef = collection(db, 'productos')
    const {categoryName} = useParams();
    
    const getProducts = async () => {
        const productsCollection = await getDocs(productsRef)
        const products = productsCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
        categoryName ? setProducts(products.filter(product => product.category === categoryName)) : setProducts(products);
        setLoading(false)
    }

    useEffect(() => {
        getProducts();
     }, [categoryName]);
 

    if(loading) {
        return <Spinner />
    }

    return (
        <section>
            <div className={styles.item_list_card}>
                {products.map((product) => (
                    <Link key={product.id} to={`/item/${product.id}`}>
                        <div className={styles.item_card}>
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