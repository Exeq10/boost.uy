import React from 'react'

import { useParams } from 'react-router-dom'
import Servicios from '../assets/Services/Servicios';

function Service() {


    const {id} = useParams()

    console.log(id);


    const servicio = Servicios.filter((service)=> service.id == id)

    console.log(servicio);

   
   const {nombre,picture_url,short_description,propuesta,objetivo} = servicio[0]


  return (
    <section className=' w-screen  text-center flex flex-col justify-center items-center'>

    <h1 className='text-4xl mt-5 font-serif'>{nombre}    <span className='text-pinkPrincipal'> <i className={`${picture_url}`}> </i> </span> </h1>


   


    <p className='w-2/3 text-center m-auto mt-4 md:text-lg  text-sm'>{short_description} </p>


   <div className='w-2/3 m-auto mt-10  ' > 

   <h2 className='mt-7 text-2xl font-serif'>Nuestra Propuesta</h2>



   {
     propuesta.map((p,key)=>(

     
      <div className=' odd:bg-pinkPrincipal odd:text-white py-2 px-2 mt-2 rounded-md text-left  text-xs md:text-lg '>
        
         <li     key={key} > {p} </li>
      </div>
     ))
    }
   
   </div>


   <a  href="https://wa.link/n8zbo6" target='_blank' className= ' button shadow-2xl animate-pulse mt-4 mb-3 rounded-xl bg-pinkPrincipal px-10  py-2 text-lg text-white  gap-3   '  > Más Info</a>

   <h4 className='mt-10 font-roboto md:text-xl'>{objetivo} </h4>


    </section>
  )
}

export default Service