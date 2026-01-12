// ## Ejercicio:
// Crear un componente que gestione una lista de contactos.
// El usuario debe poder agregar y eliminar contactos. Para ello los requisitios son:
// - Crear una interfaz llamada contacto con el id, nombre, telefono y email.
// - El componente debe de tener un formulario con 3 inputs
// - Un boton para agregar contactos
// - Una lista para mostrar contactos
// - Un boton para eliminar contactos

// Las funcionalidades deben ser:
// - Agregar un nuevo contacto ( generar un id automatico con alguna libreria npm)
// - Eliminar un contacto por su id
// - Limpiar el formulario despues de agregar
// - Mostrar un mensaje si no hay contactos almacenados

import React, { useState } from 'react'

interface Contacto {
  nombre: string,
  edad:number,
  email:string
}

const FormularioUsuario = () => {
  const [contacto, setContacto] = useState<Contacto>({
    nombre: "",
    edad: 0,
    email: ""
  })
  const actualizarCampo = (campo: keyof Contacto, valor : string | number) => {
    setContacto({...contacto, [campo]:valor})
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contactos = localStorage.getItem("Contactos");
    if (contactos) {
      const contactosArray = JSON.parse(contactos);
      contactosArray.push(contacto);
      localStorage.setItem("Contactos", JSON.stringify(contactosArray))
    } else {
      localStorage.setItem("Contactos", JSON.stringify([contacto]))
    }
    setContacto({
      nombre: "",
      edad: 0,
      email: ""
    })
  }

  return (
    //formulario de datos
    <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl'>
      <h3 className='text-xl font-bold mb-4'>Registro de usuarios: </h3>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium mb-2'>Nombre</label>
          <input 
            type="text"
            value={contacto.nombre}
            onChange={(e) => actualizarCampo( "nombre", e.target.value)}
            className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500'
            required
            />
        </div>
        <div>
          <label className='block text-sm font-medium mb-2'>Edad</label>
          <input 
            type="number"
            value={contacto.edad}
            onChange={(e) => actualizarCampo( "edad", parseInt(e.target.value))}
            className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500'
            required
            />
        </div>
        <div>
          <label className='block text-sm font-medium mb-2'>Email</label>
          <input 
            type="email"
            value={contacto.email}
            onChange={(e) => actualizarCampo( "email", e.target.value)}
            className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500'
            required
            />
        </div>
        <button 
          onClick={()=>setContacto({nombre:"", edad:0, email:""})} 
          className='w-full py-2 bg-red-500 text-white rounded hover:bg-red-900 font-semibold'>
          Limpiar campos
        </button>
        <button
          type='submit'
          className='w-full py-2 bg-green-500 text-white rounded hover:bg-green-900 font-semibold'
          >
            Guardar Usuario
          </button>
          Mostrar los datos actuales
          <div className='mt-6 mb-6 p-4 bg-gray-100 rounded'>
            <h4 className='font-semibold mb-2'> Datos actuales: </h4>
            <pre className='text-sm'>{JSON.stringify(contacto, null, 2)}</pre>
          </div>
        
      </form>
    </div>
  )
}

export default FormularioUsuario