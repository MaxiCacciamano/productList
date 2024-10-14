import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './page/Home'
import { Notfound } from './components/Notfound'
import {CartProvider} from './CartContext';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
    </CartProvider>
  )
}

export default App
