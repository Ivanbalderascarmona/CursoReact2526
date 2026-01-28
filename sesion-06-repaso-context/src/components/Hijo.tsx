import React from 'react'
import Nieto from './Nieto'

const Hijo = () => {
  return (
    <div className='p-4 max-w-2xl mx-auto'>
        <div className='border-4 border-orange-500 bg-orange-50 rounded-lg p-4'>
            <h1>Hijo</h1>
        </div>
        <div className='mt-4 border-4 border-yellow-500'>
          <Nieto/>
        </div>
    </div>
  )
}

export default Hijo
