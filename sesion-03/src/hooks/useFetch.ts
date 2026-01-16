import { useEffect, useState } from "react";

// T -----> Generics
export function useFetch<T>(url:string){
  // aquí guardaremos la data final
  const [data, setData] = useState<T | null>(null)
  // mostrar o no un loop que diga cargando...
  const [loading, setLoading] = useState<boolean>(true)
  // Por si hay errores
  const [error, setError] = useState<Error | null>(null)
  
  // Efecto de que cuando cargue el componente (o renderice por primera vez haremos useEffect)

  useEffect(() => {
    setLoading(true);
    setError(null);

    // creamos un mando a distancia para abortar el fetch
    const controller = new AbortController();

    // El signal es una señal que va por el cable del fetch y sirve para cortarlo cuando queramos
    const { signal } = controller;

    const fetchData = async () => {

      try {
        // hacemos la llamada y pasamos la señal de cancelación
        const response = await fetch(url, { signal });

        if(!response.ok){
          throw new Error("Error en la petición");
        }

        const result = await response.json();
        setData(result)

      } catch (error : unknown) {
        setError(error as Error);

      } finally {
        setLoading(false);
      }
    };

    // ******* UNO DE LOS ERRORES MÁS UTILIZADOS ES QUE NO LLAMAMOS A LA FUNCION DENTRO DE useEffect() *******

    fetchData();

    // El return se ejecuta cuando se va a desmontar el componente
    return () => {
      controller.abort();
    }
  }, [url])

  return {
    data,
    loading,
    error
  }
  
}