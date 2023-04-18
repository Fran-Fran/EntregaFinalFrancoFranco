import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const cartStorage = localStorage.getItem('cart');
        return cartStorage ? JSON.parse(cartStorage) : [];
    });

    const cleanCart = (confirmAlert = true) => {
        if (!confirmAlert) {
            setCart([]);
            return;
        }

        if (confirm("¿Estás seguro que deseas vaciar el carrito?")) {
            setCart([]);
        }
    };
    
    const addToCart = (item, update = true) => {
        if (isInCart(item.id)) {
            updateStock(item.id, item.quantity, update);
        }
        setCart(isInCart(item.id) ? [...cart] : [...cart, item]);   
    };
    
    const removeFromCart = (id) => {
        setCart(cart.filter((product) => product.id !== id));
    };

    const updateStock = (id, quantity, update) => {
        const product = cart.find((product) => product.id === id);
        if (product) {
            update ? product.quantity = quantity : product.quantity += quantity;
            if(product.quantity > product.stock) product.quantity = product.stock;
        }
    };

    const isInCart = (id) => {
        return cart.find((product) => product.id === id) ? true : false;
    };

    //store cart in localstorage
    localStorage.setItem("cart", JSON.stringify(cart));

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const value = {
        cart,
        cleanCart,
        addToCart,
        removeFromCart,
    };
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;