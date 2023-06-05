import  { useState, useEffect } from "react";
import { animate, animations, delay, motion } from "framer-motion"


import FormContact from "./FormContact";

function Contacto() {
  return (

  
    <section className=" mt-52 flex flex-wrap  bg-fixed py-2 px-2 shadow-inner bg-gray-50 ">

      <a id="contacto"></a>

      {/* 2°div  contact ============================================================================ */}
      <div className=" md:w-2/4 w-full bg-gray-50 flex flex-col gap-28 justify-start items-center pr-4 py-6 ">
       
       <h5 className="border-b-2 border-pinkPrincipal text-lg font-bold font-serif">Nuestras oficinas </h5>


<div className="flex justify-between gap-11">

       <div><img className="w-28 drop-shadow-md" src="/uruguay.webp" alt="" /></div>
       <div className="flex flex-col gap-4 ">

       

        <h5 className="text-1xl text-pinkPrincipal font-bold text-lg border-b-2 mb-2 font-serif">Uruguay</h5>

       

       <div> <p><b>Horario de Atención</b></p>

<motion.p
  initial={{ opacity: 0,
       x:300
     }}
     whileInView={{ opacity: 1,
       translateX : -300
     }
   }
   
    transition={{
     duration:  0.5,
     type:'spring'
     
     
    }}
    viewport={{ once: true }}>Lunes a Viernes de 09 a 18 hs</motion.p></div>

       <div> <p><b>Correo electrónico</b></p>

<motion.a
  initial={{ opacity: 0,
       x:300
     }}
     whileInView={{ opacity: 1,
       translateX : -300
     }
   }
   
    transition={{
     duration:  0.5,
     type:'spring'
     
     
    }}
    viewport={{ once: true }} href="mailto:agenciamktboost.uy@gmail.com" className="text-pinkPrincipal">agenciamktboost.uy@gmail.com</motion.a></div>
       </div>
</div>

       
      </div>
      <FormContact />
    </section>
  );
}

export default Contacto;
