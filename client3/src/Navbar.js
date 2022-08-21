import React from 'react'
import {FaBars} from 'react-icons/fa'
import './Navbar.css'

function Navbar(){
  return (
    <>
        <nav>
            <input type='checkbox' id='click'></input>
            <label htmlFor='click' className='checkbtn' id='icon'>
                <FaBars />
            </label>
            <label className='logo'><span>Cy</span>duck</label>
            <ul>
                <li><a className='active' href='/'>Home</a></li>
                <li><a href='/'>Dashboard</a></li>
                <li><a href='/'>Public Corner</a></li>
                <li><a href='/'>Contact US</a></li>
                <li><a href='/'>Login</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar;