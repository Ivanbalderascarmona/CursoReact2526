import { createContext, useState, type ReactNode } from "react";
import type { User } from "../types/AppContextType";

export const AppContext=createContext<AppContextType | null>(null);


interface AppProviderProps{
    children: ReactNode
}

export const AppProvider = ({ children }:AppProviderProps)=>{
    const [state, setState] = useState<AppState>({
        user:{
            id: "1",
            name: "hola",
            email: "hola@hola.com",
            avatar: "https://imgs.search.brave.com/RPOW_sdHZ8RTfU390t3iQJCmmNVAlIeN40QkCylhTLc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/NjE5LzE0Mi9zbWFs/bC9kZWZhdWx0LWF2/YXRhci1wcm9maWxl/LWljb24tb2Ytc29j/aWFsLW1lZGlhLXVz/ZXItcGhvdG8taW1h/Z2UtdmVjdG9yLmpw/Zw",
            role: "user"
        },
        theme:"dark",
        language:"es",
    })

    const setUser= (user:User | null)=>{
        //Funciona pero es recomendable forzar a usar el estado anterior 
        // setState({
        //     ...state,
        //     user
        // }) 
        setState((prev)=>({
            ...prev,
            user
        }))
    }

    const setTheme= (theme:string)=>{
        setState(prev=>({
            ...prev,
            theme
        }))
    }

    const setLanguage= (language:string)=>{
        setState(prev=>({
            ...prev,
            language
        }))
    }

    return (
        <AppContext value={{state, setUser, setTheme,setLanguage}}>
            {children}
        </AppContext>
    )
}

