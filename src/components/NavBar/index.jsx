import logo from '/logo.svg'
import styles from './navbar.module.scss'
import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../../db/firebase-config'
import { GiCat } from 'react-icons/gi'
import { FaDog, FaFish } from 'react-icons/fa'

const Navbar = ({ children }) => {
    const categoryRef = collection(db, 'categorias')
    const [categories, setCategories] = useState([]);
    const activeStyle = {
        color: "#1e1e1e"
    }

    const getCategories = async () => {
        const categoriesCollection = await getDocs(categoryRef)
        const categories = categoriesCollection.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        }))
        setCategories(categories)
    };

    useEffect(() => {
        getCategories()
    }, []);

    return (
        <>
            <header className={styles.container}>
                <Link to="/"><img className={styles.logo} src={logo} alt="Paw Pets" /></Link>
                <nav className={styles.navbar}>
                    <ul>
                        {categories.map((category, index) => (
                            <NavLink key={index} to={`category/${category.name}`} style={( {isActive} ) => (isActive ? activeStyle : undefined)}>
                                <li>{category.name}</li>
                            </NavLink>
                        ))}
                    </ul>
                </nav>
                { children }
            </header>
            <header className={styles.mobile_container}>
                <nav className={styles.mobile_navbar}>
                    <ul>
                        <NavLink to={`/category/perros`} style={( {isActive} ) => (isActive ? activeStyle : undefined)}>
                            <li><FaDog /><span>Perros</span></li>
                        </NavLink>
                        <NavLink to={`/category/gatos`} style={( {isActive} ) => (isActive ? activeStyle : undefined)}>
                            <li><GiCat /><span>Gatos</span></li>
                        </NavLink>
                        <Link to="/"><img className={styles.logo} src={logo} alt="Paw Pets" /></Link>
                        <NavLink to={`/category/otros`} style={( {isActive} ) => (isActive ? activeStyle : undefined)}>
                            <li><FaFish /><span>Otros</span></li>
                        </NavLink>
                        { children }
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar