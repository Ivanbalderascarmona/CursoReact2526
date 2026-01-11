import React from 'react'

// 1. crear una interfaz llamada producto que tenga id, nombre, precio, disponible y opcionalmente categoría

// 2. implementar una funcion  calcularTotal que reciba un array de tipo producto y devuelva un numero 
// que sume todos los precios de los productos disponibles

// 3. crea un array de productos con almenos 3 productos diferentes

// 4. probar funcion
const Ejercicio1 = () => {

  interface Producto {
    id: number;
    nombre: string;
    precio: number;
    disponible: boolean;
    categoria?: string;
  }

  const calcularTotal = (productos: Producto[]):number => {
    return productos.filter(producto => producto.disponible).reduce((total, producto) => total + producto.precio, 0);
  }

  const productos: Producto[] = [
    {id: 1, nombre: "Producto 1", precio: 10, disponible: true, categoria: "categoria 1"},
    {id: 2, nombre: "Producto 2", precio: 20, disponible: false, categoria: "categoria 2"},
    {id: 3, nombre: "Producto 3", precio: 30, disponible: true}
  ]
    return (
        <div>
            {calcularTotal(productos)}
        </div>
    )
}

export default Ejercicio1