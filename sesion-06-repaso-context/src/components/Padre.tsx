import React from 'react'
import Hijo from './Hijo'
import { useFamily } from '../hook/useFamily'

const Padre = () => {
  const { incrementarContador, decrementarContador}=useFamily();
  return (
    <div className='p-4 max-w-2xl mx-auto'>
        <div className='border-4 border-red-500 bg-red-50 rounded-lg p-4'>
            <h1>Padre</h1>
        </div>
        <div className='mt-4 border-4 border-orange-500'>
          <button className='bg-blue-400 hover:bg-blue-600 active:bg-blue-800 p-2 m-2 rounded text-white font-bold' onClick={incrementarContador}>Incrementar</button>
          <button className='bg-yellow-400 hover:bg-yellow-600 active:bg-yellow-800 p-2 m-2 rounded text-white font-bold' onClick={decrementarContador}>Decrementar</button>
          <Hijo/>
        </div>
    </div>
  )
}

export default Padre
