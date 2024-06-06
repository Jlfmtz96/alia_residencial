// Slider.js
import { useState, useEffect } from 'react';
import './HeroSlideStyles.css'
import Sl1 from '../assets/24A_CDM_R08_CASA_C-1.jpg'
import Cdm from "../assets/cdm.jpg"
import Villa from "../assets/24A_S5_CDM_R01_vista_1.jpg"
import R8 from '../assets/r8.jpg'
import R4 from '../assets/24A_CDM_R10_ACCESO.jpg'


const images = [
    {
        imagen: R4.src,
        url: '/desarrollo-lagos',
        title: 'Alia Residencial',
        location: 'Querétaro, México'
    },
    {
        imagen: Sl1.src,
        url: '/desarrollo-lagos',
        title: 'Casas Domum',
        location: 'San Luis Potosí, México'
    },
    {
        imagen: Villa.src,
        url: '/coming-soon-vm',
        title: 'Alia Residencial',
        location: 'San Luis Potosí, México'
    },
    {
      imagen: R8.src,
      url: '/desarrollo-lagos',
      title: 'Casas Domum',
      location: 'San Luis Potosí, México'
  },
  {
      imagen: Cdm.src,
      url: '/desarrollo-lagos',
      title: 'Alia Residencial',
      location: 'Querétaro, México'
  },
];

const HeroSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setResetTimer(false); // Restablecer el temporizador

      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

    }, 10000); // Cambia la imagen cada 3 segundos (ajusta según tus necesidades)

    return () => {
      clearInterval(interval);
    } 
  }, [resetTimer]);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
    setResetTimer(true); // Reiniciar el temporizador al hacer clic en un botón
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute z-10 inset-0 bg-neutral-900 bg-[size:20px_20px] opacity-35 blur-[100px]"></div>
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-[10000ms] ease-in-out transform ${
            index === currentIndex ? 'scale-110 opacity-100' : 'scale-100 opacity-0'
          }`}
          style={{
            backgroundImage: `url(${imageUrl.imagen})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
      ))}

        <div className="px-8 absolute z-30 bottom-10 grid grid-cols-5 w-full items-center justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              className={`text-white px-4 py-2 col-span-1 ${
                currentIndex === index ? 'active-button' : ''
              }`}
              onClick={() => handleButtonClick(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
    </div>
  );
};

export default HeroSlide;
