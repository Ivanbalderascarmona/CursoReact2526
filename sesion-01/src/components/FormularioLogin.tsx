import React, { FormEvent, useState } from 'react'
import Boton from './Boton';

interface Credenciales {
  email: string;
  password: string;
}

const FormularioLogin = () => {
  // hooks
  const [credenciales, setCredenciales] = useState<Credenciales>({
    email: "",
    password: ""
  })
  const [errores, setErrores] = useState({email:"", password:""})
  const [showPassword, setShowPassword] = useState(false)

  // efectos


  // funciones
  function handleSubmit (e: React.FormEvent) {
    e.preventDefault();
    if(validarFormulario()){
      console.log("Formulario válido", credenciales);
      alert(`Login exitoso para ${credenciales.email}`);
    }
  }

  const emailValido = (email: string) : boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validarFormulario ():boolean {
    const posiblesErrores:  Credenciales = {
      email: "",
      password: ""
    };

    if(!credenciales.email.trim()){
      posiblesErrores.email = "El email es obligatorio\n";
    } else if (!emailValido(credenciales.email)){
      posiblesErrores.email = "El email NO es válido\n";
    }

    if(!credenciales.password.trim()){
      posiblesErrores.password = "El password es obligatorio\n";
    } else if (credenciales.password.length <= 6){
      posiblesErrores.password = "El password debe tener al menos 6 caracteres\n";
    }

    setErrores(posiblesErrores);
      return Object.keys(posiblesErrores).length === 0;
    }
  
  return (
    <div className='max-w-md mx-auto p-6 bg-amber-100 rounded-lg shadow'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium mb-1'>Email:</label>
            <input 
            type="email"
            className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-4'
            placeholder='Ingresa tu email...'
            value={credenciales.email}
            onChange={(e) => 
              setCredenciales({...credenciales, email:e.target.value})}
            />
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>Password:</label>
            <input 
            type={showPassword ? "text" : "password"}
            className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-4'
            placeholder='Ingresa tu password...'
            value={credenciales.password}
            onChange={(e) => 
              setCredenciales({...credenciales, password:e.target.value})}
            />
          </div>
          <button 
          type="button"
          onClick={()=> setShowPassword(!showPassword)}
          >{showPassword ? "🙈" : "🙉"} </button>
          <div>
              <Boton 
              tipo="primary"
              onClick={() => handleSubmit}
              texto="Enviar"
              submit={true}
              />
          </div>
          <label>{errores.email}</label>
          <label>{errores.password}</label>
      </form>
    </div>
  )
}

export default FormularioLogin