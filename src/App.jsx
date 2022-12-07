import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Shop from './pages/Shop'
import SubShop from './pages/SubShop'
import ItemPage from './pages/ItemPage'
import About from './pages/About'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import Error from './pages/Error'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/mens" element={<SubShop category="mens" />} />
        <Route path="shop/womens" element={<SubShop category="womens" />} />
        <Route path="shop/misc" element={<SubShop category="misc" />} />
        <Route path="shop/:itemId" element={<ItemPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
