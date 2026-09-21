import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
