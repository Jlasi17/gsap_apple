import React from 'react'
import { navindex } from '../constants'


const NavBar = () => {
  return (
    <header>
    <nav>
     <img src={import.meta.env.BASE_URL + "/logo.svg"} alt='apple logo'></img>
     <ul className=''>
        {navindex.map(({label}) => (
            <li key= {label}>
                <a href={label}>{label}</a>
            </li>
        ))}
     </ul>
        <div className='flex-center gap-5'>
            <button><img src={import.meta.env.BASE_URL + "/search.svg"}></img></button>
            <button><img src={import.meta.env.BASE_URL + "/cart.svg"}></img></button>
        </div>
    </nav></header>
  )
}

export default NavBar
