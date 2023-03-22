import logo from '/logo.svg'
import styles from './navbar.module.scss'
import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const activeStyle = {
        color: "#1e1e1e"
    }

    useEffect(() => {
        fetch('/src/data/categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, []);
    
    return (
        <header className={styles.container}>
            <Link to="/"><img className={styles.logo} src={logo} alt="Paw Pets" /></Link>
            <nav className={styles.navbar}>
                <ul>
                    {categories.map((category, index) => (
                        <NavLink to={`category/${category.name}`} style={( {isActive} ) => (isActive ? activeStyle : undefined)}>
                            <li key={index}>{category.name}</li>
                        </NavLink>
                    ))}
                </ul>
            </nav>
            { children }
        </header>
    )
}

export default Navbar