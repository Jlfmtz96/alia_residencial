import { useState, useEffect } from 'react';

import Logo from '../assets/domum bl.png'
import LogoColor from '../assets/domum color.png'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
      // Agregar la clase al cerrar el menú
      document.querySelector('.menu-overlay').classList.add('menu-overlay-cierre');
  
      // Eliminar la clase después de que finalice la animación (puedes ajustar el tiempo)
      setTimeout(() => {
        document.querySelector('.menu-overlay').classList.remove('menu-overlay-cierre');
        setIsMenuOpen(false);
      }, 500); // Ajusta el tiempo según la duración de tu animación
    };

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // Ajusta el valor de 100 según la posición en la que desees que se active el cambio de estilo
        setIsScrolled(scrollPosition > 100);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div>
        <header className={`py-2 px-10 fixed top-0 w-full justify-between z-40 text-white transition-all duration-300 ease-in-out ${
          isScrolled ? 'backdrop-blur-md' : ''
        }`} style={{ backdropFilter: isScrolled ? 'blur(10px)' : 'none' }}>
            <div className="container mx-auto flex items-center">
                <div className="flex flex-grow basis-0">
                    <a href="/">
                        <img src="src/assets/Aliìa_logo_blanco.png" alt="" className={`w-52 transition-all duration-300 ease-in-out ${isScrolled ? 'filter-invert' : ''}`}/>
                        {/* <h1 className='text-3xl font-bold'>Domum</h1> */}
                    </a>
                </div>

                <nav className="flex flex-grow basis-0 justify-end lg:justify-between">
                  <a href="" className='hidden lg:flex'>
                    Tel : (444) 447 -7205
                  </a>
                  <a href="" className='hidden lg:flex'>
                    casasdomum@gmail.com
                  </a>
                  <button className='border-[1px] p-1 text-white' onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify">
                      <line x1="3" x2="21" y1="6" y2="6"/>
                      <line x1="3" x2="21" y1="12" y2="12"/>
                      <line x1="3" x2="21" y1="18" y2="18"/>
                    </svg>
                  </button>

                  {isMenuOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 cursor-pointer" onClick={closeMenu}></div>
                  )}

                  {isMenuOpen && (
                    <div className={`fixed top-0 right-0 flex flex-col h-screen pl-16 pr-20 pt-6 bg-white text-black ${isMenuOpen ? 'menu-overlay' : 'menu-overlay-cierre'}`}>
                      {/* Aquí agregarías el contenido del menú */}
                      <button onClick={closeMenu} className='flex justify-end'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                      </button>
                      <nav className='mt-12 text-3xl'>
                        <ul className="[&>li>a]:text-current [&>li>a]:font-bold [&>li>a]:block [&>li>a]:pr-32 [&>li>a]:py-4">
                            <li><a href="/" className='hover:text-[#C91E7B]'>Inicio</a></li>
                            <li><a href="#" className='hover:text-[#C91E7B]'>Amenidades</a></li>
                            <li><a href="#" className='hover:text-[#C91E7B]'>Modelos</a></li>
                            <li><a href="#" className='hover:text-[#C91E7B]'>Contacto</a></li>
                        </ul>
                      </nav>

                      <div className="flex space-x-8 mt-40">
                        <a href="https://es-la.facebook.com/COMEBI.MX/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C91E7B]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/tu.casa.comebi/" target="_blank"  rel="noopener noreferrer" className="hover:text-[#C91E7B]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </a>
                      </div>
                    </div>
                  )}
                </nav>
            </div>
        </header>
    </div>
  )
}
