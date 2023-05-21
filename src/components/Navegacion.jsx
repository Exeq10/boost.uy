import React, { useState } from 'react'

function Navegacion() { 

  


  return (
    <div className= {`w-full flex z-10  md:flex-row  justify-between items-center   bg-pinkPrincipal  px-3 shadow-xl sm:flex-col`} >


        <picture className='w-24 h-16 flex justify-center items-center '>
            <img src="./logoboost.png" alt="logo" />
        </picture>


        <nav className=' md:flex items-center justify-center phone:hidden tablet:hidden  '>

            <ul className='flex gap-5 text-lg text-white  font-serif  '>
                <li className=' hover:text-black '>
                  <a href="/">Inicio</a>
                </li>
                <li className=' hover:text-black'>
                   <a href="#nosotros"> Sobre Nosotros</a>
                </li>
                <li className=' hover:text-black'>
                   <a href="#servicios"> Servicios</a>
                </li>
                <li className=' hover:text-black'>
                 <a href="#contacto">  Contacto </a>
                </li>
            </ul>
        </nav>




    </div>
  )
}

export default Navegacion