import { useContext } from "react";
import type { FamilyContextType } from "../types/FamilyContextType";
import FamilyContext from "../context/FamilyContext";

export function useFamily():FamilyContextType{
    const context=useContext(FamilyContext);
    if(!context){
        throw new Error("El hook useFamily debe usarse dentro de un FamilyProvider")
    }
    return context
}