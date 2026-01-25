import React from 'react'
import macstore from '../source'
import clsx from "clsx";

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
       
    </section>
  )
}

export default ProductView
