// buscar por nombre de plato o ingrediente por cada pulsacion de teclado 

import { use, useState } from "react";
import type { Plato } from "../types";

interface BuscarProps {
  platosPromise: Promise<Plato[]>
  setPlatosPromise: (promise: Promise<Plato[]>) => void
}


const Buscar = ({ platosPromise, setPlatosPromise }: BuscarProps) => {
  const [busqueda, setBusqueda] = useState('');
  const platos = use(platosPromise);

  const handleBuscar = (e: React.FormEvent) => {
    e.preventDefault();

    const platosFiltrados = platos.filter((plato) => {
      return plato.nombre.toLowerCase().includes(busqueda.toLowerCase());
    });

    setPlatosPromise(Promise.resolve(platosFiltrados));
  }
  return (
    <div>
      <form onSubmit={handleBuscar} className="flex gap-2 items-center mb-4"  >
        <label className="block text-sm font-medium text-gray-700">Buscar</label>
        <input type="text" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} className="border border-gray-300 rounded px-2 py-1"/>
        <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded">Buscar</button>
      </form>
    </div>
  )
}

export default Buscar