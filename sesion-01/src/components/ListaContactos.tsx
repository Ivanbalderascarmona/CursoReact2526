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

import React, { useState } from 'react';

interface Contacto {
  id: string;
  nombre: string;
  telefono: number;
  email: string;
}

const ListaContactos = () => {
  // Estado para la lista
  const [contactos, setContactos] = useState<Contacto[]>([]);

  // Estado para el formulario de creación
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState<number>(0);
  const [email, setEmail] = useState('');

  // Estado para el formulario de eliminación (el ID que el usuario escribe)
  const [idAEliminar, setIdAEliminar] = useState('');

  const agregarContacto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !telefono || !email) return;

    const nuevoContacto: Contacto = {
      id: crypto.randomUUID().slice(0, 5), // ID corto para que sea fácil de copiar/pegar
      nombre,
      telefono,
      email
    };

    setContactos([...contactos, nuevoContacto]);
    
    // Limpiar formulario de agregar
    setNombre('');
    setTelefono(0);
    setEmail('');
  };

  const manejarEliminarPorId = (e: React.FormEvent) => {
    e.preventDefault();
    // Filtramos la lista eliminando el que coincida con el ID escrito
    setContactos(contactos.filter(c => c.id !== idAEliminar));
    // Limpiar el campo de ID después de eliminar
    setIdAEliminar('');
  };

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl'>
      <h3 className='text-xl font-bold mb-4'>Gestión de Contactos</h3>
      
      {/* Formulario de agregar */}
      <form onSubmit={agregarContacto} className='space-y-4 mb-8'>
        <h4 className='font-semibold'>Nuevo Contacto</h4>
        <input 
          type="text" 
          placeholder="Nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500"
        />
        <input 
          type="number" 
          placeholder="Teléfono" 
          value={telefono === 0 ? '' : telefono} 
          onChange={(e) => setTelefono(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500"
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500"
        />
        <button type="submit" className='w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-900 font-semibold'>
          Agregar contacto
        </button>
      </form>

      <hr className="my-6" />

      {/* Lista de contactos */}
      <h4 className='font-semibold mb-2'>Lista Actual</h4>
      {contactos.length === 0 ? (
        <p className="text-gray-500 italic mb-6">No hay contactos almacenados.</p>
      ) : (
        <ul className="mb-6 border-l-4 border-blue-200 pl-4">
          {contactos.map((c) => (
            <li key={c.id} className="mb-2 text-sm">
              <span className="bg-gray-100 px-1 font-mono text-blue-600 mr-2">ID: {c.id}</span>
              <strong>{c.nombre}</strong> - {c.telefono}
            </li>
          ))}
        </ul>
      )}

      {/* Formulario de eliminar por ID */}
      <form onSubmit={manejarEliminarPorId} className="bg-red-50 p-4 rounded-lg border border-red-100">
        <h4 className='font-semibold text-red-700 mb-2'>Eliminar por ID</h4>
        <input 
          type="text" 
          placeholder="Pega el ID aquí" 
          value={idAEliminar} 
          onChange={(e) => setIdAEliminar(e.target.value)} 
          className="w-full px-3 py-2 border border-red-300 rounded mb-2" 
        />
        <button type="submit" className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-900 font-semibold">
          Eliminar contacto
        </button>
      </form>
    </div>
  );
};

export default ListaContactos;