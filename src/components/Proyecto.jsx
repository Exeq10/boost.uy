import React from 'react'

function Proyecto({trabajo}) {
  return (
    <div className={` ${trabajo.clase} col-span-1  bg-center bg-cover hover:brightness-105 hover:cursor-pointer`} >

    <picture  >
    <img src={trabajo.imagen} alt="trabajo realizado" className='duration-500 hover:scale-105 hover:drop-shadow-xl  ' />
    </picture>
    </div >
  )
}

export default Proyecto