import { createContext, useState } from "react";
import type { FamilyContextType, FamilyState } from "../types/FamilyContextType";


//1. Crear el contexto con un hook personalizado createContext
const FamilyContext = createContext<FamilyContextType | null>(null);

//2. Estado inicial del contexto
const estadoInicial:FamilyState={
    mensaje:"Hola desde el contexto de la Familia",
    contador:0
}

//3. Crear el Provider (aquello que envuelve a los componentes que van a consumir el contexto)
export function FamilyProvider({ children }: {children: React.ReactNode}) {
    //Hooks
    const [estado, setEstado] = useState<FamilyState>(estadoInicial)
    //Funciones, para cambiar los elementos del contexto,etc.
    const setMensaje=(mensaje:string)=>{
        setEstado((prev)=>({
            ...prev,
            mensaje
        }))
    }

    const incrementarContador=()=>{
        setEstado((prev:FamilyState)=>({
            ...prev,
            contador:prev.contador+1
        }))
    }

    const decrementarContador=()=>{
        setEstado((prev:FamilyState)=>({
            ...prev,
            contador:prev.contador-1
        }))
    }

    const value:FamilyContextType={
        ...estado,
        setMensaje,
        incrementarContador,
        decrementarContador
    }

    return(
        <FamilyContext value={value}>
            {children}
        </FamilyContext>
    )
}

export default FamilyContext;