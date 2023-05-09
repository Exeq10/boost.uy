import React from 'react'
import Typewriter from "typewriter-effect";
function Span() {
  return (
   < span className='text-pinkPrincipal relative '>
    <Typewriter
  
  options={
    {
        autoStart:true,
        loop:true,
        delay: 100,
    }
  }
    onInit={(typewriter)=> {



    typewriter
     
    .typeString("Empresas")
   
    .pauseFor(2500)
    .deleteAll()
    .typeString("Redes")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Marcas")

   
    .start();
    }}
    /></span>
  )
}

export default Span