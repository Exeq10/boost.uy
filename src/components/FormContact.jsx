import React from 'react'


import { useForm, ValidationError } from "@formspree/react";
function FormContact() {

    const [state, handleSubmit] = useForm("xgebdkqn");


   
    if (state.succeeded) {
   
       
        return  <div className='w-2/3  text-center mt-9 text-white text-2xl flex animate-pulse
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
    <div className="bg-pinkPrincipal    w-2/3   py-9 px-9">
        <form id="formulario"
          className="flex flex-col gap-5 w-full     "
          onSubmit={handleSubmit}
        >
          {/* input name====================================== */}
          <div className="flex flex-col justify-start items-start w-3/6 gap-2">
            <label className="text-white font-bold text-lg">Nombre</label>

            <input
              id="text"
              type="text"
              name="name"
              className="w-full rounded-2xl shadow-xl px-2  py-1 outline-none duration-500 focus:scale-105"
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
            <label className="text-white font-bold text-lg">Email</label>
           
            <input
        id="email"
        type="email" 
        name="email"
        className="w-full rounded-2xl shadow-xl px-2  duration-500 py-1 outline-none focus:scale-105"
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
          <div className="flex flex-col justify-start items-start  w-4/6 gap-2">
            {" "}
            <label className="text-white font-bold text-lg">Mensaje</label>
            <div className="w-full flex gap-5 items-end">
              <textarea
                id="message"
                name="message"
                className="w-full rounded-2xl shadow-xl py-2 px-3  outline-none  duration-500 focus:scale-105"
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
                className="text-pinkPrincipal py-1 px-3 shadow-lg duration-500 rounded-md text-lg bg-white hover:text-white hover:bg-black hover:cursor-pointer "
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