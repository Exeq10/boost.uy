import { useParams } from "react-router-dom";
import Servicios from "../assets/Services/Servicios";
import { Carousel } from "@material-tailwind/react";
import ChatWpp from "./ChatWpp";
import BannerTech from "./BannerTech";
import Footer from "./Footer";

function Service() {
  const { id } = useParams();

  console.log(id);

  const servicio = Servicios.filter((service) => service.id == id);

  console.log(servicio);

  const {
    nombre,
    picture_url,
    short_description,
    propuesta,
    objetivo,
    tecnologias,
    banner,
  } = servicio[0];

  return (
    <>
      <section className=" w-full  text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl mt-5 font-montserrat font-extrabold">
          {nombre}{" "}
        </h1>

        <div className="bg-pinkPrincipal m-auto h-1 w-28 mt-2"></div>

        <p className="w-2/3 text-center m-auto mt-4 md:text-lg  mb text-sm">
          {short_description}{" "}
        </p>

        {tecnologias ? <BannerTech tecnologias={tecnologias} /> : ""}

        <div className="w-3/4 m-auto mt-10 flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center md:items-start lg:items-center xl:items-center justify-center gap-6  ">
          <div className="flex  items-start justify-start flex-col ">
            {propuesta.map((p, key) => (
              <div className="  py-2 px-2 mt-2 rounded-md text-left flex gap-2 justify-center items-center  text-sm md:text-lg ">
                <i className={`${p.pic} text-4xl text-pinkPrincipal `}></i>
                <li className="list-none" key={key}>
                  {" "}
                  {p.desc}{" "}
                </li>
              </div>
            ))}
          </div>

          <Carousel
            transition={{ duration: 1 }}
            autoplay={true}
            className="rounded-xl w-4/5"
          >
            {banner
              ? banner.map((ban, key) => (
                  <img
                    src={ban}
                    alt={key}
                    className="h-full w-full object-cover"
                  />
                ))
              : ""}
          </Carousel>
        </div>
        <h3 className="mt-5 text-sm text-center sm:text-sm md:text-xl lg:text-xl xl:text-xl">
          {objetivo}{" "}
        </h3>

        <button
          className="flex justify-center py-2 px-5 uppercase rounded-md border shadow-lg hover:scale-105 duration-200 transition-all text-white bg-pinkPrincipal  mb-8 w-2/5 text-center mt-8"
          href="https://wa.link/n8zbo6"
          target="_blank"
        >
          Consultas
        </button>
      </section>

      <Footer />
    </>
  );
}

export default Service;
