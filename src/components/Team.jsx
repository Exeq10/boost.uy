import { animate, animations, delay, motion } from "framer-motion";

function Team() {
  return (
    <section className="w-4/5  m-auto text-center mt-40 ">
      <h3 className="text-4xl  font-serif inline-flex gap-1 pb-2">
        Nuestro <span className="text-pinkPrincipal"> Equipo</span>
      </h3>
      <div className='bg-pinkPrincipal m-auto h-1 w-28 mt-2'></div>

      <div className="flex flex-wrap  gap-14 justify-between items-center mt-16 w-full ">
        {/* /* /* /* /* /* /* /* /* /*  {/* Sthefani ============================================================================================ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:w-2/5 gap-2 "
        >
          <picture className=" w-32 ">
            <img
            loading="lazy"
              className="rounded-full"
              src="./img/sthefani.svg"
              alt="member"
            />
          </picture>

          <div className="flex flex-col gap-2">
            <h4 className="text-xl">Sthefani Fernandez</h4>
            <h3 className="text-md text-pinkPrincipal">CEO</h3>

            <p className="text-sm">
              {" "}
              Apasionada por iniciar proyectos, emprendedora con corazón y mente
              empresarial. Marketer y micro influencer, su misión es simplificar
              el marketing digital para emprendedores y hacerlo accesible para
              todos.{" "}
            </p>
          </div>
        </motion.div>

        {/* fin sthefani========================================================================================0000000 */}

        {/* Cande  */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="flex flex-col items-center  md:w-2/5 gap-2 "
        >
          <picture className="w-32 ">
            <img className="rounded-full" loading="lazy" src="./img/cande.svg" alt="member" />
          </picture>

          <div className="flex flex-col  gap-2">
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
        </motion.div>

        {/* fin Cande========================================================================================0000000 */}

        {/* Luciana  */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
          viewport={{ once: true }}
          className="flex flex-col  items-center md:w-2/5 gap-2 "
        >
          <picture className="w-32 ">
            <img className="rounded-full" loading="lazy" src="./img/lu.svg" alt="member" />
          </picture>

          <div className="flex flex-col gap-2">
            <h4 className="text-xl"> Luciana Bohmweisch </h4>
            <h3 className="text-md text-pinkPrincipal">Community Manager</h3>

            <p className="text-sm">
              {" "}
              CM de la agencia. Súper perfeccionista y organizada. Encargada de
              gestionar redes sociales creando una estrategia digital en base a
              los objetivos del cliente para potenciar su marca.{" "}
            </p>
          </div>
        </motion.div>

        {/* fin Luciana ========================================================================================0000000 */}

        {/* Exequiel  */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
          viewport={{ once: true }}
          className="flex flex-col  items-center  md:w-2/5  gap-2 "
        >
          <picture className="w-32 ">
            <img className="rounded-full" loading="lazy" src="./img/exe.svg" alt="member" />
          </picture>

          <div className="flex flex-col gap-2">
            <h4 className="text-xl">Exequiel Schiavo</h4>
            <h3 className="text-md text-pinkPrincipal">Web Developer</h3>

            <p className="text-sm">
              {" "}
              Nuestro desarrollador, encargado de darle vida los diseños,
              trabaja con distintas tecnologías que permiten trabajo ágil y
              eficiente para cumplir con nuestros clientes.{" "}
            </p>
          </div>
        </motion.div>

        {/* fin Exequiel========================================================================================0000000 */}
      </div>
    </section>
  );
}

export default Team;
