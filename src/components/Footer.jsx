import React from "react";

function Footer() {
  const servicios = [
    "Asesorias",
    "Gestión de redes",
    "Desarrollo Web",
    "Diseño de Logos ",
    "Facebook e Instagram ADS",
  ];

  return (
    <section className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center bg-pinkPrincipal px-3 py-2  md:px-5 md:py-5">
        {/* servicios  */}
      <div className="flex flex-col  justify-center items-center sm:items-start md:w-1/4  ">
        <h4 className="text-lg md:text-xl lg:text-xl xl:text-xl font-extrabold text-white mb-2">Servicios</h4>
        <ul className="flex flex-col items-center sm:items-start">
          {servicios.map((ser) => (
            <li>{ser}</li>
          ))}
        </ul>
      </div>

      {/* fin servicios  */}



<div className="md:w-1/4 flex flex-col items-start justify-start">
 


    <h4 className="text-lg md:text-xl lg:text-xl xl:text-xl font-extrabold text-white mb-2  ">Contacto</h4>
    <p>+598 98587036</p>
    <p>correocorreo.com.uy</p>



</div>

<div className=" md:w-1/4">
    <h4 className="text-lg md:text-xl lg:text-xl xl:text-xl font-extrabold text-white mb-2 mt-3">Nuestras Redes </h4>

    <div></div>
</div>



    <picture>
        <img src="/logoboost.webp"  alt="logo"  className=" rounded-lg md:w-48  m-auto mt-5" />
    </picture>


    </section>
  );
}

export default Footer;
