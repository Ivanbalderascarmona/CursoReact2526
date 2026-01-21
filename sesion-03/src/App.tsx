
import { Suspense, useState } from 'react'
import Header from './components/Header'
import PlatosList from './components/PlatosList'
import LoadingFallBack from './components/LoadingFallBack'
import { fetchPlatos } from './utils/api'
import Buscar from './components/Buscar'

const App = () => {
  // hooks
  const [platosPromise, setPlatosPromise] = useState(() => fetchPlatos())
  return (
    <div className='min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <Header />
        <main>
          {/* Por encima del suspense hay que crear otro que controle los errores */}
          <Suspense fallback={<LoadingFallBack message="Cocinando platos para ti... 🍽️" />}>
            <Buscar platosPromise={platosPromise} setPlatosPromise={setPlatosPromise}/>
            <PlatosList platosPromise={platosPromise} />
          </Suspense>
        </main>
      </div>
    </div>
  )
}

export default App