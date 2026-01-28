import { createContext, use, useState } from "react";

interface User {
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => boolean;
    logout: () => void;
}

//Creamos el almacen global que podremos usar en cualquier componente
const AuthContext = createContext< AuthContextType|null>(null);

//Crear el provider que envualva donde usar el contexto
export const AuthProvider =({children}: {children: React.ReactNode}) => {
    const [user, setuser] = useState<User | null>(null);

    const login=(email: string, password: string): boolean=>{
        if(email === "admin@admin.com" && password === "1234"){
            setuser({email})
            return true
        }
        return false
    }

    const logout=()=>{
        setuser(null)
    }

    const value={
        user,
        login,
        logout
    }

    return <AuthContext value={value}>{children}</AuthContext>
}

//Para usr el conexto creo un hook perosnalidado por mi
export function useAuth() {
    
    const context = use(AuthContext)
    if(context=== undefined){
        throw new Error("Error al usar el contexto global")
    }

    return context;
}