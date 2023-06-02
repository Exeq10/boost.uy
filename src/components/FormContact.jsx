import React from 'react'


import { useForm, ValidationError } from "@formspree/react";
function FormContact() {

    const [state, handleSubmit] = useForm("xgebdkqn");


   
    if (state.succeeded) {
   
       
        return  <div className='md:w-2/3  w-full text-center mt-9 text-white text-2xl flex animate-pulse
         flex-col  items-center justify-center gap-3'>
            <i className="fa-regular fa-circle-check text-5xl"></i>
            <p >Mensaje Enviado </p>
            <p> Escanee el QR para comunicarse de forma rápida con Nosotros  </p>

            <img src="/linkQr.png" alt="linkQr" />

            
   </div>

      }
    
  return (
   <>

    {/* 1° div contact ============================================================================ */}
    <div className="bg-gray-50  flex    md:w-2/4   w-full py-9 px-9">
     

        <form id="formulario " 
          className="flex flex-col gap-5 w-full m-auto  items-center    "
          onSubmit={handleSubmit}
        >

          <legend className='bg-pinkPrincipal text-white w-3/6 py-2 text-center uppercase'>  Comparte tu idea </legend>

          {/* input name====================================== */}
          <div className="flex flex-col justify-start items-start w-3/6 gap-2">
            <label className="text-gray-500 font-bold text-sm mb-2">  <i className="fa-solid fa-user"></i> Nombre</label>

            <input
              id="text"
              type="text"
              name="name"
              className="w-full border-b-2 border-pinkPrincipal px-2 bg-gray-50 py-1 outline-none duration-500 focus:scale-105"
              placeholder = "Ingrese su nombre"
              required

            />
            <ValidationError
            
              prefix="text"
              field="text"
              errors={state.errors}
              />
          </div>

          {/* fin input================================================ */}
          {/* input email====================================== */}
          <div className="flex flex-col justify-start items-start w-3/6 gap-2 ">
            {" "}
            <label className="text-gray-500 font-bold text-sm mb-2">  <i className="fa-solid fa-envelope"></i> Email</label>
           
            <input
        id="email"
        type="email" 
        name="email"
        className="w-full  border-b-2 border-pinkPrincipal px-2 bg-gray-50 duration-500 py-1 outline-none focus:scale-105"
        placeholder = "Ingrese su email"
        required
        
        />
      <ValidationError 
        prefix="Email" 
        field="email"
        
        errors={state.errors}
        />
          </div>

          {/* fin input================================================ */}

          {/* text area ============================================================================ */}
          <div className="flex flex-col justify-start items-start  w-3/6 gap-2">
            {" "}
            <label className="text-gray-500 font-bold text-sm mb-2"> <i className="fa-solid fa-pen-to-square"></i> Mensaje</label>
            <div className="w-full flex gap-5 items-end flex-wrap">
              <textarea
                id="message"
                name="message"
                className="w-full  border-b-2 border-pinkPrincipal py-2 px-3  bg-gray-50 outline-none  duration-500 focus:scale-105"
                cols="30"
                rows="10"
                placeholder = "Deje su mensaje aqui"
                required
                
                />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                />

              {/* input submit ========================================================================== */}
              <input
                type="submit"
                value={"Enviar"}
                className="text-white py-1 px-3 shadow-lg duration-500 rounded-md text-lg bg-pinkPrincipal hover:text-white hover:bg-pink-500 hover:cursor-pointer w-2/4 m-auto "
                disabled={state.submitting}
                />
            </div>
          </div>
                
        </form>

        
      </div>

   </>
  )
}

export default FormContact