import { useState } from "react";

// <---------- uso de renderizado condicional en componentes y propiedades ------------->
interface TarjetaProps {
  title: string,
  description: string,
  image?:string,
  favorite?:boolean
}

const Tarjeta = ({
  title,
  description,
  image,
  favorite=false
}: TarjetaProps) => {
  const [fav, setFav] = useState(favorite);
  
    return (
      <div className={`rounded-lg shadow-md p-6 ${fav ? 'bg-yellow-100 border-2 border-amber-600' : 'bg-white'}`} onClick={() => setFav(!fav)}>
        {/* pinto la imagen si existe  la url */}
        {image && ( // () es como un return
          <img src={image} alt={title} className='w-full h-48 object-cover rounded-md mb-4' />
        )}
        <h3 className='text-xl font-bold mb-2'>
          {title}
        </h3>
        <p className='text-gray-500 mb-2'>
          {description}
        </p>
        {fav && (
          <span>⭐</span>
        )}
      </div>
    )
}

export default Tarjeta