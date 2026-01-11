// Ejercicio : Crear un componente header estilado con typescript donde aparezcan vuestros datos

import React from 'react'

interface MisDatos {
  nombre: string,
  apellido: string,
  edad: number,
  genero: string
}

function Header() {
  return (
    <header className= "bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto">
        <h2>Iván Balderas Carmona</h2>
      </div>
    </header>
  )
}

export default Header