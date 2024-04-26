import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import './index.css'

function Menu() {
  return (
    <div>
        <nav id='sidebar'>
        <NavLink to='/'>About Us</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
        <NavLink to='/service'>Service</NavLink>

        </nav>
        {/* <Link to='/'>Abount US</Link>
        <Link to='/contact'>Contact US</Link> */}
        <br />
        <a href='/'>About</a>
        <a href='/contact'>Contact</a>

    </div>
  )
}

export default Menu