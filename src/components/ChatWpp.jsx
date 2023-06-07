
import { animate, animations, delay, motion } from "framer-motion"

function ChatWpp() {
  return (
    <div className='w-full flex justify-end pr-5 absolute '>

      <motion.div
      
      initial={{ opacity: 0,
      
        
      }}
      whileInView={{ opacity: 1,
       

      }
    }
    
     transition={{
      duration:  0.2,
      type:'spring'
      
      
     }}
     viewport={{ once: true }}
      
      className='fixed bottom-10 z-10  flex gap-3 justify-center items-center animate-pulse'>
        <p className='bg-greenwpp px-2 text-white rounded-lg opacity-0 md:opacity-100   '>Contáctanos, estamos en linea!</p>
      <a href="https://wa.link/n8zbo6" target='_blank'>  <img className='w-16 rounded-full   ' src="/wpplogo.svg" alt="logowpp" /></a>
      </motion.div>
   




    </div>
  )
}

export default ChatWpp