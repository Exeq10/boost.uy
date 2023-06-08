
import { useState } from "react";
function Footer() {
  const servicios = [
    "Asesorias",
    "Gestión de redes",
    "Desarrollo Web",
    "Diseño de Logos ",
    "Facebook e Instagram ADS",
  ];

  return (
    <section className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center gap-9 px-3 py-2  md:px-5 md:py-5 drop-shadow-md">
      {/* servicios  */}
      <div className="flex flex-col  justify-center items-center sm:items-start md:w-1/4  ">
        <h4 className="text-lg md:text-xl lg:text-xl xl:text-xl font-extrabold text-black mb-2">
          Servicios
        </h4>
        <ul className="flex flex-col items-center sm:items-start">
          {servicios.map((ser,key) => (
            <li
            key={key
            }
              
              className="text-gray-700"
            >
              {" "}
              <i className="fa-solid fa-check"></i> {ser}
            </li>
          ))}
        </ul>
      </div>

      {/* fin servicios  */}

      <div className="md:w-1/4 flex flex-col items-center justify-center md:justify-start lg:justify-start">
        <h4 className="text-lg md:text-xl lg:text-xl xl:text-xl font-extrabold text-black mb-2  ">
          Contacto
        </h4>
        <p  className=" text-gray-700">
          <i className="fa-solid fa-phone"></i> (+598) 97 099 661
        </p>
        <p
         className=" text-gray-700">
          {" "}
          <i className="fa-solid fa-envelope"></i> agenciamktboost.uy@gmail.com{" "}
        </p>
      </div>

      <div className=" md:w-1/4 flex flex-col items-center">
        <h4 className="text-lg md:text-xl lg:text-xl xl:text-xl font-extrabold text-black mb-2 mt-3">
          Nuestras Redes{" "}
        </h4>

        <div
        
      className="flex  gap-4 items-center justify-center text-xl text-pinkPrincipal">
          <a
            className="hover:scale-105 transition-all duration-150"
            href="https://www.facebook.com/search/top/?q=%20boost%C2%A0uy"
            target="_blank"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            className="hover:scale-105 transition-all duration-150"
            href="https://www.instagram.com/_boost.uy/"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            className="hover:scale-105 transition-all duration-150"
            href="https://www.tiktok.com/search?q=%40boost.uy&t=1686178686696"
            target="_blank"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </div>

      <picture>
        <img
          src="/logoboost.webp"
          alt="logo"
          className="  w-40 rounded-lg md:w-48  m-auto mt-5"
        />
      </picture>
    </section>
  );
}

export default Footer;
