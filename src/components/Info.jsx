import React from "react";
import Servicios from "../Services/Servicios";
import CardService from "./CardService";





function Info() {

 



 
  
  return (
    <section className="flex container flex-wrap justify-center align-middle m-auto ">
      <a id="nosotros"></a>
       {/* primer container ========================================================================= */}
       <div  className="w-full  text-center py-24 px-14  ">
        <div className="text-center md:w-4/6 phone:w-full  m-auto wow animate__animated animate__bounceInDown">
          <h4 className="text-2xl font-bold mb-2 font-serif">
      Quienes <span className="text-pinkPrincipal  ">Somos       <i className="fa-solid fa-users-between-lines"></i></span>{" "}
          </h4>

          <p className="text-lg">
            Somos una <span className="font-semibold">agencia de <span className="font-bold">marketing</span></span> dedicada a impulsar el crecimiento de
            su empresa. En <span className = "text-pinkPrincipal  font-bold "><span className = "text-pinkPrincipal  text-bold ">Boost </span> </span>, estamos comprometidos a proporcionar
            soluciones personalizadas de <span className="font-bold">marketing</span> que se adapten a las
            necesidades únicas de cada cliente.
          </p>
        </div>

  <div className="  justify-between gap-10 phone:flex">
    
  <div className="text-center   mt-32 wow animate__animated animate__bounceInDown">
          <h4 className="text-2xl font-bold mb-2 font-serif">
     Áreas <span className="text-pinkPrincipal  ">de Interés       <i className="fa-solid fa-arrows-to-eye"></i></span>{" "}
          </h4>

          <p className="text-lg">
            Nos especializamos en dos áreas clave: la gestión de redes sociales
            y el desarrollo web. Nuestro equipo de expertos en redes sociales
            puede ayudarle a construir una presencia sólida en las redes
            sociales, aumentar su base de seguidores y mejorar su compromiso con
            su audiencia..
          </p>
        </div>
        <div className="text-center   mt-32 wow animate__animated animate__bounceInDown"> 
          <h4 className="text-2xl font-bold mb-2 font-serif ">
          Buenas  <span className="text-pinkPrincipal  ">Prácticas <i className="fa-solid fa-medal"></i></span>{" "}
          </h4>

          <p className="text-lg">
          En <span className = "text-pinkPrincipal  text-bold "><span className = "text-pinkPrincipal  font-bold ">Boost </span> </span>, nos aseguramos de mantenernos actualizados con las últimas tendencias y prácticas de <span className="font-bold">marketing</span> digital para garantizar que nuestros clientes obtengan los mejores resultados posibles. Nos enfocamos en brindar una excelente atención al cliente y trabajar en colaboración para ayudarles a alcanzar sus objetivos de <span className="font-bold"> marketing</span>.
          </p>
        </div>
  </div>
      </div>
      {/*  segundo container================================================================ */}

      <div className="w-full px-24 py-14   flex  gap-5 justify-center  card 
       ">
        {Servicios.map((servicio, key) => (
          <CardService
            key={key}
            nombre={servicio.nombre}
            long={servicio.long_description}
            short={servicio.short_description}
            picture={servicio.picture_url}
          />
        ))}
      </div>

     
    </section>
  );
}

export default Info;
