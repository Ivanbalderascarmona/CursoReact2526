import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import FormToDoList from './pages/formBasico/FormToDoList'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/form-toDo" replace/>} />
        <Route path="/form-toDo" element={<FormToDoList/>} />
      </Routes>
    </div>
  )
}

export default App
