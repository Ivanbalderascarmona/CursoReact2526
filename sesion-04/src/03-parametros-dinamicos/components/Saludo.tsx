import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Saludo = () => {
  const {nombre} = useParams<{nombre: string}>()
  return (
    <div className='p-20 text-center'>
      <title>
        Saludos a {nombre}
      </title>
      <meta name='description' content={`Pagina personalizada para ${nombre}`} />
      <div className='mb-6'>
        <h1 className='text-6xl text-slate-900'>
          Bienvenido, <span className='text-blue-600'>{nombre}</span> 
        </h1>
        <p className='mt-4 text-2xl italic'>
          Dato recuperado con el hook <code className='text-orange-400 px-2 rounded'>useParams</code>
        </p>
        <Link to="/" className='mt-20 inline-block px-8 py-5 bg-slate-800 text-white 
        rounded-2xl font-bold shadow-lg active:active-95 transition-all'>Volver al inicio</Link>
      </div>

    </div>
  )
}

export default Saludo