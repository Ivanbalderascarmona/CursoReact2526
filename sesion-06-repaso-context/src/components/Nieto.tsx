import React, { useState } from 'react'
import { useFamily } from '../hook/useFamily';

const Nieto = () => {
  const { mensaje,setMensaje }=useFamily();
  const [mensajeInput, setMensajeInput] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMensajeInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMensaje(mensajeInput);
  }

  return (
    <div className='p-4 max-w-2xl mx-auto'>
        <div className='border-4 border-yellow-500 bg-yellow-50 rounded-lg p-4'>
            <h1>Nieto</h1>
        </div>
        <div className='mt-4 border-4 border-yellow-500'>
          <p>
            <strong>
              {mensaje}
            </strong>
          </p>

          <form className='m-2' onSubmit={(e)=>handleSubmit(e)} >
          <input className='border border-gray-500 active:border-gray-900 rounded p-2' onChange={handleChange} placeholder='Escribe un mensaje...'/>
          </form>

          <button className='border-2 border-blue-500 px-4 py-2 m-2 rounded active:bg-blue-200' onClick={()=>setMensaje("Hola desde Nieto")}>Reset mensaje</button>
        </div>
    </div>
  )
}

export default Nieto
