


import { clientes } from "../assets/portfolio/data"

function Clients() {
  return (
    <section className="mt-10 w-full">

      <div className="text-center flex flex-col gap-3 items-center">
     <div>
     <h3 className="text-4xl font-serif  pb-2" >Confían en Nosotros</h3>
      <div className='bg-pinkPrincipal m-auto h-1 w-28 mt-2'></div>
     </div>


<div>
<h4>Contamos con clientes en todo Uruguay</h4>
<p>Trabajamos con presupuestos en base a la inversión que desees realizar</p>

</div>
      </div>



    <div className=" w-full  md:w-2/4 lg:w-2/4 xl:w-2/4 m-auto flex flex-wrap justify-center ">
    {
        clientes.map((cl,key)=>{return  <img className="w-28 md:w-40 lg:w-40 xl:w-40" src={cl.imagen} key={key} alt="logo cliente" />
        })
      }
    </div>

    </section>
  )
}

export default Clients