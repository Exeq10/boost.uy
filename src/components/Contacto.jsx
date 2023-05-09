import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import FormContact from "./FormContact";

function Contacto() {
  return (
    <section className="container bg-pinkPrincipal mt-52 flex w-full">
      <FormContact />

      {/* 2°div  contact ============================================================================ */}
      <div className="w-1/3 bg-pinkPrincipal flex flex-col gap-28 justify-start items-end pr-4 py-6 ">
        {/* Logo Contact  */}
        <picture className="w-60  flex justify-center items-end mt-6">
          <img src="./logoboost.png" alt="logo" className="rounded-2xl" />
        </picture>

      <div>
        
      </div>
      </div>
    </section>
  );
}

export default Contacto;
