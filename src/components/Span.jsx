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
        
    }
  }
    onInit={(typewriter)=> {



    typewriter
     
    .typeString("Empresas")
   
    .pauseFor(1000)
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