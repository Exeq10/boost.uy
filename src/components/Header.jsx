import React from 'react'


function Header() {

    


  return (
    <section  className="  w-full h-screen background  relative  bg-cover bg-top   md:bg-center lg:bg-center sm:bg-center bg-no-repeat flex flex-col  justify-start items-center md:items-start text-center">


     <div className='pl-3 items-start justify-center  mt-40 flex flex-col gap-3 text-left font-roboto'>
        <picture>
        <img className='w-48' src="./logoboost.webp" alt="logo" />
        </picture>
      <h1 className='text-5xl  mt-4 mb-3 text-white font-serif '>Especialistas en Marketing </h1>

      <p className='text-2xl border-b-4 pb-3 text-white'>Impulsamos tus objetivos. </p>


      <a  className='flex justify-center py-2 px-5 uppercase rounded-md border shadow-lg hover:scale-105 duration-200 transition-all text-pinkPrincipal bg-white  w-2/5 text-center mt-8' href="https://wa.link/n8zbo6" target='_blank'>Contactános</a>
 
     </div>
        
    

    








    </section>
  )
}

export default Header