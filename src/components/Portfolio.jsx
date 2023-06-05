import React, { useState,useEffect } from 'react'
import {trabajos} from '../assets/portfolio/data'
import Proyecto from './Proyecto'
import { animate, animations, delay, motion } from "framer-motion"
import Clients from './Clients'
import { Carousel } from "@material-tailwind/react";



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
    <motion.section 
    initial={{ opacity: 0,
  }}
  whileInView={{ opacity: 1,
  }
}

 transition={{
  duration:  0.5 ,
 
 }}className='flex flex-col mt-36 justify-center items-center w-full'>
<h3 className="text-4xl font-serif  pb-2" >Trabajos <span  className="text-pinkPrincipal">realizados</span></h3>
<div className='bg-pinkPrincipal m-auto h-1 w-28 mt-2'></div>

<h4 className='md:text-lg mt-2 text-center'>Aqui tenemos una muestra de nuestros trabajos, nuestros clientes han quedado completamente satisfechos.</h4>



<div className='flex flex-wrap md:w-4/6 m-auto justify-center gap-2 mt-4 mb-4'>  
<button className='text-pinkPrincipal mt-3 rounded-xl hover:shadow-lg border border-pinkPrincipal py-1 px-7 
hover:scale-105 hover:bg-pinkPrincipal hover:text-white duration-300  '    onClick={()=> setCategoria('ases')  }>Asesorias</button>
    <button className='text-pinkPrincipal mt-3 rounded-xl hover:shadow-lg border border-pinkPrincipal py-1 px-7 hover
    hover:scale-105 hover:bg-pinkPrincipal hover:text-white duration-300'  onClick={()=> setCategoria('web')  }>Webs</button>
    <button className='text-pinkPrincipal mt-3 rounded-xl hover:shadow-lg border border-pinkPrincipal py-1 px-7 hover
    hover:scale-105 hover:bg-pinkPrincipal hover:text-white duration-300' onClick={()=> setCategoria('gest')}>Gestión</button>
    <button className='text-pinkPrincipal mt-3 rounded-xl hover:shadow-lg border border-pinkPrincipal py-1 px-7 hover
    hover:scale-105 hover:bg-pinkPrincipal hover:text-white duration-300' onClick={()=> setCategoria('dis')}>Diseños</button>
    </div>








    <div className='md:grid lg:grid xl:grid hidden grid-cols-3 grid-rows-4   align-middle w-8/12 md:w-8/12 mt-5   items-center justify-center gap-3 m-auto'>


      
{/* mapeo del filtro y rendering de los datos  */}
    {

      



      rendering()
      
  
        
     
      
      
    }




    </div>
<Carousel
            transition={{ duration: 1 }}
            autoplay={true}
            className="rounded-xl w-5/5   md:w-4/5 lg:w-4/5 xl:w-4/5"
          >
            {

              rendering()

            }
          </Carousel>
   
     





    <Clients/>
   

  
    </motion.section>


    
  )
}

export default Portfolio