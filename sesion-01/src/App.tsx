// import Ejercicio1 from "./components/ejercicios/ejercicio1"
import FormularioLogin from "./components/FormularioLogin"
import FormularioUsuario from "./components/FormularioUsuario"
import Header from "./components/Header"
import ListaContactos from "./components/ListaContactos"
import LoginVerificacionBasica from "./components/LoginVerificacionBasica"
import Saludo from "./components/Saludo"
import Tarjeta from "./components/Tarjeta"

const App = () => {
  return (
    <div className='min-h-screen bg-gray-300'>
      <Header />
      <main className="container bg-gray-100 mx-auto p-4">
        <Saludo nombre="Ivan" edad={23} />
        <Saludo nombre="Carlos" edad={27} />
        <Saludo nombre="Manuel" edad={25} />
        <Saludo nombre="Pedro" edad={29} />
        <div className="mt-8 grid grid-cols1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Tarjeta 
          title="React 19" 
          description="Última versión de la librería React paraJavaScript"
          image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=400"
          />
          <Tarjeta 
          title="React 19" 
          description="Última versión de la librería React paraJavaScript"
          favorite={true}
          />
          <Tarjeta 
          title="React 19" 
          description="Última versión de la librería React paraJavaScript"
          image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=400"
          favorite={true}
          />
          <Tarjeta 
          title="React 19" 
          description="Última versión de la librería React paraJavaScript"
          image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=400"
          />
          <FormularioUsuario />
          <ListaContactos />
          <LoginVerificacionBasica />
          <FormularioLogin />
          
        </div>

        {/* <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
          <h1 className='text-4xl font-bold text-green-600'>
            React 19 + TypeScript
          </h1>
          <Ejercicio1 />
        </div> */}
      </main>
    </div>
  )
}

export default App