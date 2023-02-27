import React from 'react'
import Logo from '../../assets/logo.png';
import '../navbar/nav.css'

function Nav() {
  return (
    <div className='navbar'>

        <div className="left-nav"><img className='logo' src={Logo} alt="app logo" /></div>
        <div className="right-nav">
            <ul className='nav-item'>
                <li>Home </li>
                <li>About </li>
                <li>App </li>
                <li>Testimonials </li>
                <li>Contact us </li>
            </ul>
        </div>

    </div>
  )
}

export default Nav