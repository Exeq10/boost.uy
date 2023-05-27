
import { animate, animations, delay, motion } from "framer-motion"

function Proyecto({trabajo}) {

  




  return (
    <motion.div
    initial={{ opacity: 0,
      x: 500 }}
  whileInView={{ opacity: 1,
  translateX:-500 }
}

 transition={{
  duration:  0.5 ,
  delay : trabajo.id - 0.9
  
 }}
 viewport={{ once: true }}
      >

    <picture  >
    <img src={trabajo.imagen}  alt="trabajo realizado" className='duration-500 hover:scale-105 hover:drop-shadow-xl  ' />
    </picture>
    </motion.div >
  )
}

export default Proyecto