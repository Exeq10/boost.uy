import React from 'react'
import Newsletter from './Newsletter'


function FormNewsletter() {



    

  return (
    <div className='w-full flex flex-col mt-32 justify-center items-center letter  py-16  text-center' >

<h3 className="text-4xl font-serif mb-16" >News<span  className="text-pinkPrincipal">letter</span></h3>
    
        <h4>Enterate de nuestras Novedades</h4>
        <p>Suscribete a nuestro boletín y recibirás las últimas noticias </p>

        <div className='mt-10'>

            <Newsletter/>



        </div>
        


    </div>
  )
}

export default FormNewsletter