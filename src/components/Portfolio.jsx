import React, { useState,useEffect } from 'react'
import {trabajos} from '../assets/portfolio/data'
import Proyecto from './Proyecto'
import { animate, animations, delay, motion } from "framer-motion"
import Clients from './Clients';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

/* estilos de swiper  */
import "swiper/css";


/* importacion de Paginacion en swiper  */
import "swiper/css/pagination";







function Portfolio() {




const [categoria,setCategoria]= useState('web')
const [filtro,setFiltro]= useState([])






//creamos el filtro para posterior modificar 
useEffect(() => {

  setFiltro(trabajos.filter((trabajo) => trabajo.cat == categoria)) 

  
}, [categoria])



//render de trabajos  filtrados 

const rendering = () =>{


  return filtro.map((trabajo,key)=> <SwiperSlide  key={key}><Proyecto trabajo={trabajo}/></SwiperSlide> )
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

<h4 className='md:text-lg mt-2 text-center'>Aquí tenemos una muestra de nuestros trabajos, nuestros clientes han quedado completamente satisfechos.</h4>



<div className='flex flex-wrap md:w-4/6 m-auto justify-center gap-2 mt-4 mb-4'>  

    <button className='text-pinkPrincipal mt-3 rounded-xl hover:shadow-lg border border-pinkPrincipal py-1 px-7 hover
    hover:scale-105 hover:bg-pinkPrincipal hover:text-white duration-300'  onClick={()=> setCategoria('web')  }>Webs</button>
    <button className='text-pinkPrincipal mt-3 rounded-xl hover:shadow-lg border border-pinkPrincipal py-1 px-7 hover
    hover:scale-105 hover:bg-pinkPrincipal hover:text-white duration-300' onClick={()=> setCategoria('gest')}>Gestión</button>
    <button className='text-pinkPrincipal mt-3 rounded-xl hover:shadow-lg border border-pinkPrincipal py-1 px-7 hover
    hover:scale-105 hover:bg-pinkPrincipal hover:text-white duration-300' onClick={()=> setCategoria('dis')}>Diseños</button>
    </div>








    <div className='md:grid lg:grid xl:grid hidden grid-cols-3 grid-rows-2   align-middle w-8/12 md:w-8/12 mt-5   items-center justify-center gap-3 m-auto'>


      
{/* mapeo del filtro y rendering de los datos  */}
    {

      



      rendering()
      
  
        
     
      
      
    }
 



    </div>

   
    <Swiper className="mySwiper block  w-10/12  mb-5 md:hidden lg:hidden xl:hidden"   
        grabCursor={true}
        
      

        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        >

      

      
        
        
    
        {rendering()} 
      
  
  
        </Swiper>
  
  



    <Clients/>
   

  
    </motion.section>


    
  )
}

export default Portfolio