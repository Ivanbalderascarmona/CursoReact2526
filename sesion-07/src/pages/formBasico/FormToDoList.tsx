import React, { useActionState } from 'react'
import type { FormState, ToDoData } from '../../types'


//Simular guardar en una base de datos
const guardar=async (tarea:ToDoData)=>{
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(true)
        },2000)
    })
    localStorage.setItem("tareas",JSON.stringify([...JSON.parse(localStorage.getItem("tareas")||"[]"),tarea]))
}

//Crear una function asincrona  que ejecuta react al enviar el formulario
const guardarAction = async(_prevState:FormState,formData:FormData/*Objeto datos React*/):Promise<FormState>=>{
    const nombreToDo=formData.get("nombreToDo") as string;
    const fechaToDo=formData.get("fechaToDo") as string; 

    if(!nombreToDo || !fechaToDo){
        return {
            error:"Todos los campos son obligatorios",
            success:null
        }
    }
    
    try {
        await guardar({nombre:nombreToDo,fecha:fechaToDo})
    } catch (error) {
        return {
            error:`Error al guardar la tarea ${error}`,
            success:null
        }
    }


    return {
        error:null,
        success:"Tarea guardada correctamente"
    }
}

const FormToDoList = () => {
    const [ state , formAction ,isPending ]=useActionState(guardarAction,{
        error:null,
        success:null
    })
  return (
    <div className='m-2 p-2'>
      <form action={formAction} className='flex flex-col gap-4 max-w-md'>
        <div className='max-w-md'>
            <input type="text" name="nombreToDo" placeholder='Nombre de la tarea' className='border border-gray-400 rounded-md p-2' disabled={isPending}/>
            {state.error && <p className='text-red-500'>{state.error}</p>}
            {state.success && <p className='text-green-500'>{state.success}</p>}
        </div>
        <div className='w-100'>
            <input type="date" name="fechaToDo" className='border border-gray-400 rounded-md p-2' disabled={isPending}/>
            {state.error && <p className='text-red-500'>{state.error}</p>}
            {state.success && <p className='text-green-500'>{state.success}</p>}
        </div>
        <button type='submit' className={`bg-blue-500 text-white rounded-md p-2 active:bg-blue-700 hover:bg-blue-600 ${isPending?"opacity-50 cursor-not-allowed":"cursor-pointer"}`} disabled={isPending}>{isPending?"Guardando...":"Guardar"}</button>
      </form>
    </div>
  )
}

export default FormToDoList
