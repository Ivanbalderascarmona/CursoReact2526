// que gestione el nombre, edad y email.

import React, { useState } from 'react'

interface Usuario {
  nombre: string,
  edad:number,
  email:string
}

const FormularioUsuario = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nombre: "",
    edad: 0,
    email: ""
  })
  const actualizarCampo = (campo: keyof Usuario, valor : string | number) => {
    setUsuario({...usuario, [campo]:valor})
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const usuarios = localStorage.getItem("Usuarios");
    if (usuarios) {
      const usuariosArray = JSON.parse(usuarios);
      usuariosArray.push(usuario);
      localStorage.setItem("Usuarios", JSON.stringify(usuariosArray))
    } else {
      localStorage.setItem("Usuarios", JSON.stringify([usuario]))
    }
    setUsuario({
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
            value={usuario.nombre}
            onChange={(e) => actualizarCampo( "nombre", e.target.value)}
            className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500'
            required
            />
        </div>
        <div>
          <label className='block text-sm font-medium mb-2'>Edad</label>
          <input 
            type="number"
            value={usuario.edad}
            onChange={(e) => actualizarCampo( "edad", parseInt(e.target.value))}
            className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500'
            required
            />
        </div>
        <div>
          <label className='block text-sm font-medium mb-2'>Email</label>
          <input 
            type="email"
            value={usuario.email}
            onChange={(e) => actualizarCampo( "email", e.target.value)}
            className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500'
            required
            />
        </div>
        <button
          type='submit'
          className='w-full py-2 bg-green-500 text-white rounded hover:bg-green-900 font-semibold'
          >
            Guardar Usuario
          </button>
          Mostrar los datos actuales
          <div className='mt-6 mb-6 p-4 bg-gray-100 rounded'>
            <h4 className='font-semibold mb-2'> Datos actuales: </h4>
            <pre className='text-sm'>{JSON.stringify(usuario, null, 2)}</pre>
          </div>
        <button onClick={()=>setUsuario({nombre:"", edad:0, email:""})}>
          Limpiar campos
        </button>
      </form>
    </div>
  )
}

export default FormularioUsuario