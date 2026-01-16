
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
          <Suspense fallback={<LoadingFallBack message="Cocinando platos para ti... 🍽️" />}>
            <PlatosList platosPromise={platosPromise} />
          </Suspense>
          {/* <Buscar platosPromise={platosPromise} setPlatosPromise={setPlatosPromise}/> */}
        </main>
      </div>
    </div>
  )
}

export default App