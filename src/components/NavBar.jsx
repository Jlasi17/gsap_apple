import React from 'react'
import { navindex } from '../constants'


const NavBar = () => {
  return (
    <header>
    <nav>
     <img src='/logo.svg' alt='apple logo'></img>
     <ul className=''>
        {navindex.map(({label}) => (
            <li key= {label}>
                <a href={label}>{label}</a>
            </li>
        ))}
     </ul>
        <div className='flex-center gap-5'>
            <button><img src='/search.svg'></img></button>
            <button><img src='/cart.svg'></img></button>
        </div>
    </nav></header>
  )
}

export default NavBar
