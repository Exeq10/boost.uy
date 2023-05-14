import React from 'react'
import { Link } from 'react-router-dom';

function CardService({nombre,long,short,picture,id}) {

 


  


  return (
    <div className="group   shadow-lg  w-auto max-h-80  flex flex-col border  px-4   items-start wow animate__animated animate__fadeIn duration-1000 ">
            <i className={ `fa-solid ${picture}  text-5xl text-pinkPrincipal mt-4 mb-4 ml-4`} ></i>
               
     
               <h3 className="font-bold text-xl mb-3 font-serif">{nombre} </h3>
     
             <p> {short} </p>
     
          

             <Link to={`/services/${id}`} className=" button shadow-2xl hover:animate-pulse mt-3 mb-3 rounded-xl bg-pinkPrincipal px-7 text-lg text-white  gap-3 ">
              Ver Más <i className="fa-solid fa-arrow-right  ml-1    "></i>
             </Link>
             </div>
  )
}

export default CardService