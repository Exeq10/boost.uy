function Team() {
  return (
    <section className="w-4/5 m-auto text-center mt-40 ">
      <h3 className="text-4xl font-serif">
        Nuestro <span className="text-pinkPrincipal">Equipo</span>
      </h3>

      <div className="flex flex-wrap  gap-14 justify-between items-center mt-16 w-full ">
        {/* /* /* /* /* /* /* /* /* /*  {/* Sthefani ============================================================================================ */}
        <div className="md:flex  md:w-2/5 gap-5 ">
          <picture className="md:w-4/5 ">
            <img className="rounded-sm" src="./img/sthefani.png" alt="member" />
          </picture>

          <div className="flex flex-col gap-5">
            <h4 className="text-xl">Sthefani Fernadez</h4>
            <h3 className="text-md text-pinkPrincipal">CEO</h3>

            <p className="text-sm">
              {" "}
              Apasionada por iniciar proyectos, emprendedora con corazón y mente
              empresarial. Marketer y micro influencer, su misión es simplificar
              el marketing digital para emprendedores y hacerlo accesible para
              todos.{" "}
            </p>
          </div>
        </div>

        {/* fin Exequiel========================================================================================0000000 */}

        {/* Cande  */}
        <div className="md:flex   md:w-2/5 gap-5 ">
          <picture className="md:w-4/5 ">
            <img className="rounded-sm" src="./img/cande.svg" alt="member" />
          </picture>

          <div className="flex flex-col gap-5">
            <h4 className="text-xl">Candela Barrientos</h4>
            <h3 className="text-md text-pinkPrincipal">
              Creadora de contenido
            </h3>

            <p className="text-sm">
              {" "}
              Se especializa en crear contenido original y atractivo para
              diversas plataformas, teniendo siempre claro el objetivo: conectar
              con la audiencia y brindarles una experiencia única.{" "}
            </p>
          </div>
        </div>

        {/* fin Cande========================================================================================0000000 */}

        {/* Luciana  */}
        <div className="md:flex   md:w-2/5 gap-5 ">
          <picture className="md:w-4/5 ">
            <img className="rounded-sm" src="./img/lu.svg" alt="member" />
          </picture>

          <div className="flex flex-col gap-5">
            <h4 className="text-xl"> Luciana Bohmweisch </h4>
            <h3 className="text-md text-pinkPrincipal">Community Manager</h3>

            <p className="text-sm">
              {" "}
              CM de la agencia. Súper perfeccionista y organizada. Encargada de
              gestionar redes sociales creando una estrategia digital en base a
              los objetivos del cliente para potenciar su marca.{" "}
            </p>
          </div>
        </div>

        {/* fin Luciana ========================================================================================0000000 */}

        {/* Exequiel  */}
        <div className="md:flex  md:w-2/5  gap-5 ">
          <picture className="md:w-4/5 ">
            <img className="rounded-sm" src="./img/exe.svg" alt="member" />
          </picture>

          <div className="flex flex-col gap-5">
            <h4 className="text-xl">Exequiel Schiavo</h4>
            <h3 className="text-md text-pinkPrincipal">Web Developer</h3>

            <p className="text-sm">
              {" "}
              Nuestro desarrollador , encargado de darle vida los diseños ,
              trabaja con distintas tecnologias que permiten trabajo agil y
              eficiente para cumplir con nuestros clientes.{" "}
            </p>
          </div>
        </div>

        {/* fin Exequiel========================================================================================0000000 */}
      </div>
    </section>
  );
}

export default Team;
