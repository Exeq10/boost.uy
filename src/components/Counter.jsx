import React, { useEffect, useState } from "react";

function Counter() {
  const [clientes, setClientes] = useState(0);
  const [publicidad, setPublicidad] = useState(0);
  const [campañas, setCampañas] = useState(0);
  const [cuentas, setCuentas] = useState(0);

  const handleClientes = () => {
    if (clientes <= 49) {
      setTimeout(() => {
        setClientes(clientes + 1);
      }, 40);
    }
  };
  const handleCuentas = () => {
    if (cuentas < 2) {
      setTimeout(() => {
        setCuentas(cuentas + 1);
      }, 400);
    }
  };
  const handleCampañas = () => {
    if (campañas <= 119) {
      setTimeout(() => {
        setCampañas(campañas + 1);
      }, 10);
    }
  };
  const handlePublicidad = () => {
    if (publicidad < 30) {
      setTimeout(() => {
        setPublicidad(publicidad + 1);
      }, 10);
    }
  };

   useEffect(() => {
   
   
      handleCampañas();
      handleClientes();
      handleCuentas();
      handlePublicidad();
      
   
  }, [clientes, campañas, publicidad, cuentas]);



  




  return (
    <section className="md:w-3/4 hidden mt-10  md:flex flex-col sm:flex-row md:flex-row
    lg:flex-row m-auto justify-between px-5 font-serif font-bold ">
      <div className="flex flex-col gap-3 items-center">
     
        <p className="text-4xl ">{clientes} +</p>

        <p className=" text-center  mb-3 text-lg">Clientes Satisfechos</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
    
        <p className="text-4xl">{campañas} +</p>
        <p className=" text-center  mb-3 text-lg">Campañas realizadas </p>
      </div>
      <div className="flex flex-col gap-2 items-center">

        <p className="text-4xl">{cuentas} M +</p>
        <p className=" text-center  mb-3 text-lg">Cuentas alcanzadas</p>{" "}
      </div>
      <div className="flex flex-col gap-2 items-center">
 
        <p className="text-4xl ">{publicidad} M + </p>
        <p className=" text-center  mb-3 text-lg">Invertidos en publicidad</p>{" "}
      </div>

   
    </section>
  );
}

export default Counter;
