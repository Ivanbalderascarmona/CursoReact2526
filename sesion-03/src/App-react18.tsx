import { useFetch } from './hooks/useFetch'
import { API_CONFIG, type Plato } from './types'
import Header from './components/Header';
import LoadingFallBack from './components/LoadingFallBack';
import PlatoCard from './components/PlatoCard';

const App = () => {
  const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PLATOS}`;
  const { data:platos, loading, error } = useFetch<Plato[]>(url);
  return (
    <div className='min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <Header />
        <main>
          {loading && (<LoadingFallBack message="Consultando menú tradicional... 🍽️" />)}
          {error && (<p className='text-red-500'>Error al cargar los platos</p>)}
          {platos && (<div className='grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {platos.map((plato : Plato) => (
            <PlatoCard key={plato.id} plato={plato} />
          ))}
        </div>)}
        </main>
      </div>
    </div>
  )
}

export default App