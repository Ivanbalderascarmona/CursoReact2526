import React from 'react'
import Abuelo from './Abuelo'
import { useFamily } from '../hook/useFamily'

const Bisabuelo = () => {
  const { mensaje }=useFamily();
  return (
    <div className='p-4 max-w-2xl mx-auto'>
        <div className='border-4 border-purple-500 bg-purple-50 rounded-lg p-4'>
            <h1 className='text-xl font-bold'>Bisabuelo</h1>
        </div>
        <div className='mt-4 border-4 border-purple-500'>
          <p>
            <strong>
              {mensaje}
            </strong>
          </p>
          <Abuelo/>
        </div>
    </div>
  )
}

export default Bisabuelo
