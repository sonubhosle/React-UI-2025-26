import { Zap } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='bg-indigo-600 flex justify-between items-center py-2 px-5'> 
      <div className="text-white text-3xl font-extrabold">LOGO</div>
     <nav className='flex gap-5'>
       <Link to="/" className='text-white text-lg'>Home</Link>
      <Link to="/contact" className='text-white text-lg'>Contact</Link>
     </nav>
     <button className='bg-amber-400 flex gap-3 items-center text-slate-800 px-10 py-3 rounded-xl'>
      <Zap size={40}/>
      Apply Now</button>
    </div>
  )
}

export default Header