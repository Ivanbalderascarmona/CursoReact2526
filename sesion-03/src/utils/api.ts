// Api hará un fetching a mi api para traer todos los platos
// {
//     "id": 52772,
//     "nombre": "Teriyaki Chicken Casserole",
//     "categoria": "Chicken",
//     "origen": "Japanese",
//     "calorias": 607,
//     "ingredientes": [
//       "soy sauce",
//       "water",
//       "brown sugar",
//       "ground ginger",
//       "minced garlic",
//       "cornstarch",
//       "chicken breasts",
//       "stir-fry vegetables",
//       "brown rice"
//     ],
//     "imagen": "/images/52772.jpg"
//  }

import { API_CONFIG, type Plato } from "../types";


export const fetchPlatos = async (): Promise<Plato[]> => {
  const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PLATOS}`; 
  try {
    const response = await fetch(url);
    if(!response.ok){
      throw new Error("Error al obtener los platos");
    }
    return await response.json();
    
    
  }catch (error){
    console.log(error);
    throw error;
  } 
}