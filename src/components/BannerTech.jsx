

function BannerTech({tecnologias}) {

    console.log(tecnologias);
  return (
    <div className='flex flex-col w-3/5 gap-4 mt-4'>
    
      
    <h3 className=" hidden md:block lg:block xl:block mt-16 text-lg sm:text-xl md:text-xl lg:text-xl text-black text-center"> {tecnologias.desc} <span className="text-pinkPrincipal font-extrabold text-xl sm:text-2xl md:text-2xl lg:text-2xl">{tecnologias.span} </span> </h3>
    <img src={tecnologias.pic} className='h-56 w-auto drop-shadow-lg hidden sm:block  md:block lg:block' alt="tecnologias" />     

    </div>
  )
}

export default BannerTech