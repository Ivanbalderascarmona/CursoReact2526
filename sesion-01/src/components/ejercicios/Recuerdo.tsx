import React from 'react'

let nombreTS: string = "pepe";
let edadTS: number =23;
let isAdminTS: boolean = true;
let nuloTS: null = null;
let indefinidoTS: undefined = undefined;
const lenguajes: string[] = ["ts", "js", "css", "html"];
const numeros: number[] = [1,2,3,4,5];
const usuario: {nombre: string, edad: number, isAdmin: boolean} = {
  nombre: "pepe", edad: 23, isAdmin: true
};
const usuarios: {nombre: string, edad: number, isAdmin: boolean}[] = [
  {nombre: "pepe", edad: 23, isAdmin: true},
  {nombre: "juan", edad: 28, isAdmin: false}
];

// interfaces
// las interfaces son un contrato que va a definir la forma que tiene un objeto
interface Persona {
  id: number;
  nombre: string;
  edad?: number; // opcional
  isAdmin: boolean;
}

const usuario1: Persona = {
  id: 1,
  nombre: "pepe",
  isAdmin: true
}
const usuario2: Persona = {
  id: 2,
  nombre: "juan",
  edad: 28,
  isAdmin: false
}

function sumar(a:number, b:number):number {
  return a + b;
}

function saludar(nombre:string):void {
  console.log("Bienvenido ",nombre);
}

// funciones con parametros opcionales
function crearPersona(nombre:string, edad?:number):Persona {
  return {
    id: Date.now(),
    nombre,
    edad,
    isAdmin: false
  }
}

// union Types (posibles valores que puede tomar una variable)
let id:string | number;
// id=true <--- Error
type Tamano = "small" | "medium" | "large";
let t:Tamano = "medium";

// -------- cuando usar Tyoes y cuando usar Interfaces --------
// usar Types con primitivos y uniones
// usar Interfaces con Objetos

type ID = string | number;
type Estado = "pendiente" | "completado" | "cancelado";

interface Usuario {
  nombre: string,
  edad:number
}
// extender una interfaz
interface Empleado extends Usuario {
  puesto: string,
  salario: number
}
const empleado1 : Empleado = {
  nombre: "pepe",
  edad: 23,
  puesto: "programador",
  salario: 1000
}



const Recuerdo = () => {
  return (
    <div>Recuerdo</div>
  )
}

export default Recuerdo