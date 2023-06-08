import { Link, useParams } from "react-router-dom";
import Servicios from "../assets/Services/Servicios";


import BannerTech from "./BannerTech";
import Footer from "./Footer";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
function Service() {
  const { id } = useParams();



  const servicio = Servicios.filter((service) => service.id == id);

  
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
        <div className="w-full text-2xl flex justify-start pl-10 pt-3">
          <Link to={'/'}>
          <i className="fa-sharp fa-solid fa-arrow-left bg-pinkPrincipal py-1 px-1 rounded-full text-white " ></i>
          </Link>
        </div>
        <h1 className="text-4xl mt-5 font-montserrat font-extrabold">
          {nombre}{" "}
        </h1>

        <div className="bg-pinkPrincipal m-auto h-1 w-28 mt-2"></div>

        <p className="w-2/3 text-center m-auto mt-4 md:text-lg  mb text-sm">
          {short_description}{" "}
        </p>

       

        <div className="w-3/4 m-auto mt-10 flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center md:items-start lg:items-center xl:items-center justify-center gap-6  ">
          <div className="flex  items-start justify-start flex-col ">
            {propuesta.map((p, key) => (
              <div className="  py-2 px-2 mt-2 rounded-md text-left flex gap-2 justify-start items-start   text-sm md:text-lg ">
               
                <li className="list-item " key={key}>
                  {" "}
                  {p.desc}
                </li>
              </div>
            ))}
          </div>

          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  rounded-xl w-full  md:w-4/5 lg:w-4/5 xl:w-4/5"
      >
        
      {banner ? banner.map((ban ,key) => <SwiperSlide  key={key}><img src= {ban} alt="banner"  className="h-full w-full object-cover" /> </SwiperSlide>  ) :''}
      </Swiper>
        </div>
        <h3 className="mt-16 text-sm text-center sm:text-sm md:text-xl lg:text-xl xl:text-xl">
          {objetivo}{" "}
        </h3>

        <button
          className="flex justify-center py-2 px-5 uppercase rounded-md border shadow-lg hover:scale-105 duration-200 transition-all text-white bg-pinkPrincipal  mb-8  w-2/5 md:w-1/5 text-center mt-8"
          href="https://wa.link/n8zbo6"
          target="_blank"
        >
          Consultas
        </button>
        {tecnologias ? <BannerTech tecnologias={tecnologias} /> : ""}
      </section>

      <Footer />
    </>
  );
}

export default Service;
