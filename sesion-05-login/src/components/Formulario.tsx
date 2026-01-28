import React, { useState } from 'react'
/*
    crear un componente que cree una lista de contactos el usuario puede eliminar y agregar contactos
    Requisitos:
        - Crear una interfaz llamada contacto con el id telefono e email
        - Debe de tener un formulario con tres inputs nombre, telefono y email, un boton para agregar el contacto un boton para agregar el contacto y un boton para eliminar el contacto y una lista con los contactos 
        - Las funcionalidades deben de ser:
            - Agregar un nuevo contacto(generar un id con alguna libreria npm)
            - eliminar un contacto por su id 
            - Limpiar el formulario despues de agregar
            - Mostrar un mensaje si no hay contactos almacenados 
*/

/*
    Hacerlo bien
    Crear un formulario de login con validacion básica, debe de tener dos campos email y password
    Hay que validar que los campos no esten vacios
    Hay que validar con alguna expresion regular que el formato del email sea valaido
    Hay que mostrar/ocultar la contraseña con un guion 
    Hay que mostar mensajes de error personalizados
    Que la contraseña tengo un numero minimo de caracteres
*/

interface Usuario {
  nombre: string
  edad: number
  email: string
}

const Formulario = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nombre: "",
    edad: 0,
    email: ""
  })

  function actualizaCampo(campo: keyof Usuario, valor: string | number) {
    setUsuario({ ...usuario, [campo]: valor })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const usuarios: Usuario[] = JSON.parse(
      localStorage.getItem("usuarios") || "[]"
    )

    usuarios.push(usuario)

    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    setUsuario({
      nombre: "",
      edad: 0,
      email: ""
    })
  }

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-xl shadow'>
      <h3 className='text-xl font-bold mb-4'>Registro de Usuario</h3>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium mb-2'>Nombre:</label>
          <input
            value={usuario.nombre}
            onChange={(e) => actualizaCampo("nombre", e.target.value)}
            className='w-full px-3 py-2 border border-gray-400 rounded'
            type="text"
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>Email:</label>
          <input
            value={usuario.email}
            onChange={(e) => actualizaCampo("email", e.target.value)}
            className='w-full px-3 py-2 border border-gray-400 rounded'
            type="email"
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>Edad</label>
          <input
            value={usuario.edad}
            onChange={(e) => actualizaCampo("edad", Number(e.target.value))}
            className='w-full px-3 py-2 border border-gray-400 rounded'
            type="number"
          />
        </div>

        <button
          type='submit'
          className='w-full py-2 bg-green-500 text-white hover:bg-green-800'
        >
          Enviar
        </button>

        <div className='mt-6 p-4 bg-gray-100 rounded'>
          <h4 className='font-semibold mb-2'>Datos actuales:</h4>
          <pre className='text-sm'>
            {JSON.stringify(usuario, null, 2)}
          </pre>
        </div>
      </form>
    </div>
  )
}

export default Formulario
