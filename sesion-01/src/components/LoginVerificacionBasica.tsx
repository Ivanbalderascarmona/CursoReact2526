// ## Ejercicio 2

// Crear un formulario de login con validación básica.
// - Debe de tener dos campos:
//   - Email
//   - Password
// - Validar que los campos no esten vacíos
// - Validar con alguna expresion regular que el formato del email sea válido
// - Hay que mostrar/ocultar la contraseña con un guioncito
// - Hay que mostrar mensajes de error personalizados
// - Contraseña con minimo de caracteres

import React, { useState } from 'react'

interface Login {
  email: string;
  password: string;
}


const LoginVerificacionBasica = () => {
  const [mostrarPassword, setMostrarPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const [login, setLogin] = useState<Login>({
    email: "",
    password: ""
  });

  const actualizarCampo = (campo: keyof Login, valor : string | number) => {
    setLogin({...login, [campo]:valor})
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(login.email)) {
      setError("El email no es válido");
      return;
    }
    if (login.password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }
    setError("");
    setLogin({email:"", password:""});
    setSuccess("Login exitoso");
  };
  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl'>
      <form onSubmit={handleSubmit}>
        <h3 className='text-xl font-bold mb-4'>Login</h3>
        <p className='text-red-500'>{error}</p>
        <p className='text-green-500'>{success}</p>
        <input 
        type="text"
        placeholder='Introduce tu email...'
        value={login.email}
        onChange={(e) => actualizarCampo("email", e.target.value)}
        className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500'
        />
        <input 
        type={mostrarPassword ? "text" : "password"}
        placeholder='Introduce tu contraseña...'
        value={login.password}
        onChange={(e) => actualizarCampo("password", e.target.value)}
        className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500 mt-2'
        />
        <button type='button' onClick={() => setMostrarPassword(!mostrarPassword)} className='w-full py-2 bg-red-500 text-white rounded hover:bg-red-900 font-semibold mt-2'>Mostrar contraseña</button>
        <button type='submit' className='w-full py-2 bg-green-500 text-white rounded hover:bg-green-900 font-semibold mt-2'>Login</button>
        <button type='button' onClick={() => setLogin({email:"", password:""})} className='w-full py-2 bg-red-500 text-white rounded hover:bg-red-900 font-semibold mt-2'>Limpiar campos</button>
      </form>
    </div>
  );
}

export default LoginVerificacionBasica