import { Routes, Route } from 'react-router-dom'
import './App.css'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/NavBar'
import Home from './components/Home'
import ItemDetailContainer from './components/ItemDetailContainer'

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
        </Routes>
      </main>
    </>
  )
}

export default App
