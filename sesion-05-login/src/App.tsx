import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './pages/Protected'
import Formulario, { type Usuario } from './components/Formulario'

/*
Crear un usuario con usuario admin@admin.com y contraseña 1234 que permitira visualizar una ruta llamada dashboard que tendra un boton para cerrar sesion, para el resto de usuarios solo estara disponible / . 
Utilizar sonner para mostrar un mensaje de bienvenida al iniciar sesion  y de despedida al cerrar sesion

*/




const App = () => {
  const [isAllowed , setIsAllowed ] = useState(false)
  return (
    <div className="min-h-screen bg-slate-50">
     <main  className="max-h-4xl mx-auto">
      <Formulario />
        
      <Routes>
        <Route path="/" element={} />
        <Route path="/secret" element={
          <ProtectedRoute isAllowed={isAllowed}>
            
          </ProtectedRoute>
        }/>
      </Routes>
     </main>
    </div>
  );
};

export default App;



