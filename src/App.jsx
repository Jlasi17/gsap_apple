import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductView from './components/ProductView'
import ShowCase from './components/ShowCase'
import Performance from './components/Performace'
import gsap from 'gsap';
import {ScrollTrigger,SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <ProductView/>
      <ShowCase/>
      <Performance/>
    </main>

  )
}

export default App
