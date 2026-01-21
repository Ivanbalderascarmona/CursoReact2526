import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-white border-b border-slate-200 p-8 flex justify-center items-center 
    gap-12 shadow-sm top-0 z-50 sticky'>
      {/* Enlaces em react router dom */}
      <Link to='/' className='text-slate-400 hover:text-slate-900 font-bold uppercase text-2xl transition-all'>Inicio 🏠</Link>

      <NavLink to='/contact' className={(
        {isActive}) => `p-8 py-3 rounded-xl transition-all text-sm shadow-md scale-90 
        ${isActive ? 
          'bg-indigo-600 text-white shadow-indigo-200' : 
          'bg-slate-100 text-slate-400 hover:text-slate-700 hover:bg-slate-100'}`
        }>
        Contactos</NavLink>
        <NavLink to='/about' className={(
        {isActive}) => `p-8 py-3 rounded-xl transition-all text-sm shadow-md scale-90 
        ${isActive ? 
          'bg-indigo-600 text-white shadow-indigo-200' : 
          'bg-slate-100 text-slate-400 hover:text-slate-700 hover:bg-slate-100'}`
        }>
        Acerca de</NavLink>
        
    </nav>
  )
}

export default Navbar