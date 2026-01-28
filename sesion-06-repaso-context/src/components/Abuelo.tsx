import React from 'react'
import Padre from './Padre'
import { useFamily } from '../hook/useFamily';

const Abuelo = () => {
  const { contador }=useFamily();
  return (
    <div className='p-4 max-w-2xl mx-auto'>
        <div className='border-4 border-green-500 bg-green-50 rounded-lg p-4'>
            <h1>Abuelo</h1>
        </div>
        <div className='mt-4 border-4 border-red-500'>
          <p className='m-2'>El contador es: {contador} </p>
          <Padre/>
        </div>
    </div>
  )
}

export default Abuelo


/*
  
*/