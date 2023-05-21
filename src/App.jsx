import { useState, useEffect } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

import Navegacion from "./components/Navegacion";
import Header from "./components/Header";
import Info from "./components/Info";
import Counter from "./components/Counter";
import Team from "./components/Team";
import Contacto from "./components/Contacto";
import Portfolio from "./components/Portfolio";
import FormNewsletter from "./components/FormNewsletter";
import ChatWpp from "./components/ChatWpp";
import Service from "./components/Service";

function App() {
  const [position, setPosition] = useState(755);

  window.addEventListener("scroll", () => {
    const point = document.querySelector(".point");

    setPosition(point.getBoundingClientRect().top);
  });

  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route
            path="/"
            element={
              <div>
                <Navegacion />

                <Header />

                <Info />

                <div className="point">
                  {position <= 754 ? (
                    <>
                      <ChatWpp /> <Counter />
                    </>
                  ) : (
                    ""
                  )}
                </div>

                <Team />

                <Portfolio />

                <FormNewsletter />

                <Contacto />
              </div>
            }
          />

          <Route path="/services/:id"  element={<Service/>} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
