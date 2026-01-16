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
      <form onSubmit={handleBuscar}>
        <label >Buscar</label>
        <input type="text" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>
    </div>
  )
}

export default Buscar