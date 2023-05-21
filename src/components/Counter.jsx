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
    if (cuentas <= 7) {
      setTimeout(() => {
        setCuentas(cuentas + 1);
      }, 200);
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
    if (publicidad <= 150) {
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
    <section className="md:w-3/4 flex m-auto justify-between px-5 font-serif font-bold mt-9">
      <div className="flex flex-col gap-3 items-center">
     
        <p className="md:text-4xl text-2xl">{clientes} +</p>

        <p className="text-xs text-center md:text-xl">Clientes Satisfechos</p>
      </div>
      <div className="flex flex-col gap-3 items-center">
    
        <p className="md:text-4xl text-2xl">{campañas} +</p>
        <p className="text-xs text-center md:text-xl">Campañas realizadas </p>
      </div>
      <div className="flex flex-col gap-3 items-center">

        <p className="md:text-4xl text-2xl">{cuentas} +</p>
        <p className="text-xs text-center md:text-xl">Cuentas alcanzadas</p>{" "}
      </div>
      <div className="flex flex-col gap-3 items-center">
 
        <p className="md:text-4xl text-2xl">{publicidad} +</p>
        <p className="text-xs text-center md:text-xl">Invertidos en publicidad</p>{" "}
      </div>
    </section>
  );
}

export default Counter;
