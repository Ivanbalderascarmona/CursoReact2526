// El componente botón le paso como prosp un texto, el tipo de boton y el evento onClick.
// El tipo de boton sera tipoBoton sera tipo type ('primary', secondary danger).
// si es primary tendra un bg-blue-500 hover:bg-blue-700
// si es secundary tendrea un bg-gray-500 hover:bg-gray-700
// si es danger tendra un bg-red-500 hover:bg-red-700

// * todos tendran un texto blanco

import React from 'react'

type TipoBoton = 'primary' | 'secondary' | 'danger'

interface BotonProps {
  texto: string;
  tipo: TipoBoton;
  submit?:boolean;
  onClick: () => void;
}

const Boton = ({tipo, onClick, texto, submit}: BotonProps) => {
  const estilos = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    danger: "bg-red-500 hover:bg-red-700 text-white"
  }
  return (
    <button
    type={submit ? "submit" : "button"}
    className={`px-4 py-2 rounded font-semibold shadow transition ${estilos[tipo]}`}
    onClick={onClick}
    >
      {texto}
    </button>
  )
}

export default Boton