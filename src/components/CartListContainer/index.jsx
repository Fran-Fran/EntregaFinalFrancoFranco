import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import styles from '../CartContainer/cartContainer.module.scss';

const CartListContainer = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const handlePlus = (e) => {
    e.preventDefault();
    const input = e.target.parentNode.querySelector('input');
    const productKey = e.target.parentNode.parentNode.getAttribute('data-key');
    const cartProduct = cart.find((product) => product.id === productKey);
    if (cartProduct.stock > parseInt(input.value)) {
        const quantity = parseInt(input.value)+1;
        cartProduct.quantity = quantity;
        addToCart(cartProduct);  
    }
}

const handleMinus = (e) => {
    e.preventDefault();
    const input = e.target.parentNode.querySelector('input');
    const productKey = e.target.parentNode.parentNode.getAttribute('data-key');
    const cartProduct = cart.find((product) => product.id === productKey);
    if (parseInt(input.value) > 1) {
        const quantity = parseInt(input.value)-1;
        cartProduct.quantity = quantity;
        addToCart(cartProduct);
    }
    
}

  return (
    <>
      <h2>Mi carrito</h2>
      <div className={styles.table}>
        <table>
          <thead>
              <tr>
                  <th>Imagen</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Acciones</th>
              </tr>
          </thead>
          <tbody>
              {cart.map((product) => (
                  <tr key={product.id} data-key={product.id}>
                      <td><img src={product.image} alt={product.name} /></td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td className={styles.quantity_input}>
                          <button onClick={(e) => handleMinus(e)}>-</button>
                          <input 
                              type="number"
                              name={'quantity_'+product.id}
                              max={product.stock}
                              value={product.quantity}
                              readOnly
                          />
                          <button onClick={(e) => handlePlus(e)}>+</button>
                      </td>
                      <td>{(product.price * product.quantity).toFixed(2)}</td>
                      <td><FaTrashAlt onClick={() => removeFromCart(product.id)} /></td>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
          <h3>Total: {cart.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2)}</h3>
      </div>
    </>
  )
}

export default CartListContainer