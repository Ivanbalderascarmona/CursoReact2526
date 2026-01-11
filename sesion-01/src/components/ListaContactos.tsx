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

const ListaContactos = () => {
  interface Contacto {
    id:number,
    nombre:string,
    telefono:number,
    email:string
  }
  const [contacto, setContacto] = useState<Contacto[]>([{
    id:0,
    nombre:"",
    telefono:0,
    email:""
  }])

  const handleSubmit = (e: React.FormEvent) => {

  }
  return (
    <div>
      <h2>Lista de contactos</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nombre' />
        <input type="number" placeholder='Telefono' />
        <input type="email" placeholder='Email' />
        <button type="submit">Agregar contacto</button>
        <ul>
          <li>
            <p>No hay contactos</p>
          </li>
        </ul>
        <button type="button">Eliminar contacto</button>
      </form>
    </div>
  )
}

export default ListaContactos