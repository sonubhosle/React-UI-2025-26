import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='nav'> HeaderS
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Header