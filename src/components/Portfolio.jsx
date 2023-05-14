import React, { useState,useEffect } from 'react'
import {trabajos} from '../assets/portfolio/data'
import Proyecto from './Proyecto'

function Portfolio() {


const [categoria,setCategoria]= useState('web')
const [filtro,setFiltro]= useState([])


//creamos el filtro para posterior modificar 
useEffect(() => {

  setFiltro(trabajos.filter((trabajo) => trabajo.cat == categoria)) 

  
}, [categoria])



//render de trabajos 

const rendering = () =>{


  return filtro.map((trabajo,key)=> <Proyecto trabajo={trabajo} key={key}/> )
}


  return (
    <section className='flex flex-col mt-36 justify-center items-center'>
<h3 className="text-4xl font-serif" >Trabajos <span  className="text-pinkPrincipal">realizados</span></h3>

<h4 className='text-lg mt-2'>Aqui tenemos una muestra de nuestros trabajos, nuestros clientes han quedado completamente satisfechos.</h4>



<div className='flex w-4/6 m-auto justify-between mt-4 mb-4'>  
<button className='text-pinkPrincipal rounded-xl hover:shadow-lg border border-pinkPrincipal py-1 px-7 hover
hover:scale-105 hover:bg-pinkPrincipal hover:text-white duration-300' onClick={()=> setCategoria('ases')}>Asesorias</button>
    <button className='text-pinkPrincipal rounded-xl hover:shadow-lg border border-pinkPrincipal py-1 px-7 hover
    hover:scale-105 hover:bg-pinkPrincipal hover:text-white duration-300' onClick={()=> setCategoria('web')}>Webs</button>
    <button className='text-pinkPrincipal rounded-xl hover:shadow-lg border border-pinkPrincipal py-1 px-7 hover
    hover:scale-105 hover:bg-pinkPrincipal hover:text-white duration-300' onClick={()=> setCategoria('gest')}>Gestión</button>
    <button className='text-pinkPrincipal rounded-xl hover:shadow-lg border border-pinkPrincipal py-1 px-7 hover
    hover:scale-105 hover:bg-pinkPrincipal hover:text-white duration-300' onClick={()=> setCategoria('dis')}>Diseños</button>
    </div>




    <div className='grid grid-flow-col w-11/12  mt-5 '>


      
{/* mapeo del filtro y rendering de los datos  */}
    {

      



      rendering()
      
  
        
     
      
      
    }
   
     



    </div>

   

  
    </section>


    
  )
}

export default Portfolio