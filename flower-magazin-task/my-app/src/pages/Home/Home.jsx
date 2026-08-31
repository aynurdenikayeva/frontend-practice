import React from 'react'
import './Home.css'

import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import BestSelling from '../../components/BestSelling/BestSelling'
import AboutUs from '../../components/AboutUs/AboutUs'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div>
    <Header/>
    <Hero/>
    <BestSelling/>
    <AboutUs />
    <Footer/>
    </div>

  )
}

export default Home
