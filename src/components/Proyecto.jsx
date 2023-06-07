
import { animate, animations, delay, motion } from "framer-motion"

function Proyecto({trabajo}) {

  




  return (
    <motion.div
    initial={{ opacity: 0,
       }}
  whileInView={{ opacity: 1,
  }
}

 transition={{
  duration:  0.1 ,
  
  
 }}
 viewport={{ once: true }}
      >

    <picture  className="w-72 " >
    <img loading="lazy" src={trabajo.imagen}  alt="trabajo realizado" className='duration-500 hover:scale-105 drop-shadow-md hover:drop-shadow-xl w-full    ' />
    </picture>
    </motion.div >
  )
}

export default Proyecto