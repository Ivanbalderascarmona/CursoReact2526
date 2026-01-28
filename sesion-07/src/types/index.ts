
export interface FormState{
    error:string | null;
    success:string | null;
}

export interface ToDoData{
    nombre:string;
    fecha:string;
}

export interface LoginData{
    email:string;
    password:string;
}

export interface RegisterData{
    name:string;
    email:string;
    password:string;
}