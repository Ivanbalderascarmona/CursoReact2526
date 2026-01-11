// que mande un saludo personalizado atraves de las props
import React from 'react'

interface SaludoProps{
  nombre: string,
  edad:number
}

const Saludo = ({ nombre, edad } : SaludoProps) => {
  return (
    <div className='p-4 bg-green-300 rounded-lg shadow mb-4'>
      <h2 className='text-xl font-semibold'>
        Bienvenid@ {nombre}
      </h2>
      <p className='text-blue-600 font-medium'>
        Tienes {edad} años
      </p>
    </div>
  )
}

export default Saludo