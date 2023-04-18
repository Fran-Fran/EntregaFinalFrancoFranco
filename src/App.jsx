import { Routes, Route } from 'react-router-dom'
import './App.css'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/NavBar'
import Home from './components/Home'
import Error404 from './components/Error404'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartContainer'
import OrderSuccess from './components/OrderSuccess'

function App() {
  return (
    <>
      <Navbar>
        <CartWidget />
      </Navbar>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/404" element={<Error404 />} />
        </Routes>
      </main>
    </>
  )
}

export default App
