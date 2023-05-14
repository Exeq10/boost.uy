import React from 'react'

import { useParams } from 'react-router-dom'
import Servicios from '../assets/Services/Servicios';

function Service() {


    const {id} = useParams()

    console.log(id);


    const servicio = Servicios.filter((service)=> service.id == id)


    console.log(servicio);



  return (
    <div>

Servicio

    </div>
  )
}

export default Service