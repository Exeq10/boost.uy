import React from 'react'
import Typewriter from "typewriter-effect";
import Span from './Span';


function Header() {

    


  return (
    <section  className=" background  w-full h-screen   bg-cover bg-center bg-no-repeat flex flex-col  justify-start text-center">




    <div className='w-full flex flex-col items-center justify-between'>
    <h1 className=' flex animate__animated animate__backInRight  md:text-6xl mt-52  phone:text-3xl  gap-5 font-serif'>Potenciamos <Span/> </h1>
        
   
<h2 className='animate__animated  animate__fadeInLeftBig  font-serif  bg-pinkOpacity md:w-auto phone:h-3/5  py-2 px-20 mt-5  rounded-lg text-white  md:text-2xl phone:text-sm '   >Marketing - Redes - Desarrollo web </h2>


        <button className= '  animate__animated  animate__heartBeat  bg-white   text-pinkPrincipal shadow-custom px-5 py-1  font-bold font-serif md:text-3xl  md:mt-52  md:mr-40  md:-rotate-18 phone:mt-20  rounded-lg  transition-all  duration-700   hover:text-black  hover:shadow-reversecustom hover:animate-bounce '  > Consultas</button>

    </div>





    </section>
  )
}

export default Header