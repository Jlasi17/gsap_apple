import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductView from './components/ProductView'
import ShowCase from './components/ShowCase'
import Performance from './components/Performace'
import gsap from 'gsap';
import {ScrollTrigger,SplitText} from "gsap/all";
import Features from './components/Feature'
import HighLights from './components/HighLights';
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <ProductView/>
      <ShowCase/>
      <Performance/>
      <Features/>
      <HighLights/>
      <Footer/>
    </main>

  )
}

export default App
