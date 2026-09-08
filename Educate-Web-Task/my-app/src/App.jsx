import React from 'react'
import Layout from './companent/Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Courses from './pages/Courses/Courses'
import Blog from './pages/Blog/Blog'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'


const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
