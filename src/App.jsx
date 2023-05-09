import { useState, useEffect } from "react";


import Navegacion from "./components/Navegacion";
import Header from "./components/Header";
import Info from "./components/Info";
import Counter from "./components/Counter";
import Team from "./components/Team";
import Contacto from "./components/Contacto";
import Portfolio from "./components/Portfolio";
import FormNewsletter from "./components/FormNewsletter";
import ChatWpp from "./components/ChatWpp";

function App() {
  

 

  const [position, setPosition] = useState("");

  window.addEventListener("scroll", () => {
    const point = document.querySelector(".point");

    setPosition(point.getBoundingClientRect().top);
  });

  return (
    <div >
      <Navegacion />

      <Header />

      <Info />

      <div className="point">{position <= 754 ? <><ChatWpp/> <Counter /></> : ""}</div>

      <Team />

      <Portfolio />

      


      <FormNewsletter/>

      <Contacto />
    </div>
  );
}

export default App;
