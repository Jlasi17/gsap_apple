import React from 'react'
import macstore from '../source'
import clsx from "clsx"
import { Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Mac14 from "./models/Macbook-14";
import Lights from './Lights';

const ProductView = () => {
    const {color,setColor,scale,setScale} = macstore();
  return (
    <section id='product-viewer'>
        <h2>Take A Look At It!!</h2>
        <div className='controls'>
            <p className='info'>Mac Book Pro {scale}" in {color} </p>
            <div className='flex-center gap-5 mt-5'>
                <div className='color-control'>
                    <div 
                    onClick = { () => setColor('#adb5db')} 
                    className={clsx('bg-neutral-300' ,color === '#adb5db' && 'active')} />
                    <div 
                    onClick = { () => setColor('#2e2c2e')} 
                    className={clsx('bg-neutral-900' ,color === '#2e2c2e' && 'active')} />
                </div>
                <div className='size-control'>
                    <div 
                    onClick = { () => setScale(0.05)} 
                    className={clsx(scale === 0.05 ? 'bg-white text-black' : 'bg-transparent text-white')}>
                    <p>13"</p>
                    </div>
                    <div 
                    onClick = { () => setScale(0.08)} 
                    className={clsx( scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}>
                    <p>16"</p>
                    </div>
                </div>
            </div>
        </div>
       <Canvas id = 'canvas' camera = {{position : [0,2,5],fov:50,near:0.1 ,far:100}}>
            <Lights/>
            <Mac14 scale ={0.06} position = {[0,0,0]}/>
            <OrbitControls enableZoom = {false}/>
       </Canvas>
    </section>
  )
}

export default ProductView
