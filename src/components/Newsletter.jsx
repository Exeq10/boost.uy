import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

function Newsletter() {

    
  const [state, handleSubmit] = useForm("mjvdlabd");
  if (state.succeeded) {


      return  <div className='flex flex-col justify-center items-center'><i className="fa-regular fa-circle-check text-2xl text-pinkPrincipal"></i> <p className='text-center '>  Te mantendremos al tanto de nuestras Novedades</p>
      </div>
     }
      
  return (
    <form  onSubmit={handleSubmit}  className='flex gap-3'>
    <input
    id="newsletter"
    type="email" 
    name="email"
    placeholder='Correo electrónico'

    className='rounded-md shadow-lg py-2 px-3  outline-none  duration-500 focus:scale-105 border'


  />
  <ValidationError 
    prefix="Email" 
    field="email"
    errors={state.errors}
  />


  <input type="submit" className='bg-pinkPrincipal py-1 px-3 shadow-lg duration-500 rounded-md text-lg text-white hover:bg-black hover:cursor-pointer '  disabled={state.submitting} value={'Suscribirse'}/>

     </form>    
  )
}

export default Newsletter