const Servicios = [
  /* ====================================================Marketing Online================================================================ */

  {
    id: 1,
    nombre: " Asesorias",
    picture_url: "fa-solid fa-bullhorn ",
    short_description:
      "Ofrecemos reuniones de una hora aproximadamente, ya sea presencial o por Zoom, enfocada en abordar tus puntos de dolor. Realizaremos una auditoría de tu cuenta y brindaremos opciones de mejora.",
    propuesta: [
      {pic:'fa-solid fa-bullhorn ',desc:"Estrategias de Marketing adaptadas a tus necesidades"},
      {pic:'fa-regular fa-clock',desc:"Herramientas para optimizar tu tiempo y maximizar la eficiencia en tu trabajo"},
      {pic:'fa-regular fa-lightbulb ',desc:"Consejos para fortalecer tu marca"},
      {pic:'fa-solid fa-exclamation ',desc:"Tips de diseño utilizando Canva "},
      {pic:'fa-solid fa-person-circle-question',desc:"Seguimiento y consultoría por WhatsApp"},
     
    ],
    

    objetivo:
      "¡Nuestro objetivo es ayudarte a alcanzar el éxito en tus objetivos de marketing y brindarte las herramientas necesarias para destacar en tu industria!",
  },

  /* ===================================================Desarrollo Web=================================================================== */
  {
    id: 2,
    nombre: " Desarrollo Web",
    picture_url: "fa-solid fa-desktop",
    short_description:
      "Nos especializamos en ofrecer soluciones de desarrollo web a medida para satisfacer las necesidades únicas de nuestros clientes. Nuestro equipo de expertos en desarrollo web está altamente capacitado.",
    propuesta: [
      {pic:'fa-solid fa-laptop-code ',desc:"Diseño atractivo y personalizado "},
      {pic:'fa-solid fa-check',desc:"Funcionalidad y facilidad de uso"},
      {pic:'fa-solid fa-mobile-screen',desc:"Responsividad y compatibilidad"},
      {pic:'fa-solid fa-gear',desc:"Optimización para motores de búsqueda (SEO) "},
      {pic:'fa-solid fa-headset ',desc:"Mantenimiento y soporte continuo"},
    ],

  
  
    tecnologias: {
      pic:'/img/bantech.svg',
      desc:'Trabajamos con tecnologías orientadas al ',
      span:'Marketing'
    },
      

    banner:['/img/banweb3.svg','/img/banweb2.svg','/img/banweb1.svg'],


    


    objetivo:
      " Te ofrecemos un sitio web atractivo, funcional y optimizado que impulsará tu presencia en línea !! ",
  },

  /* ==========================================================Redes Sociales============================================================= */
  {
    id: 3,
    nombre: " Redes Sociales ",
    picture_url: "fa-brands fa-instagram ",
    short_description:
      "La gestión de redes sociales es el proceso de administrar y optimizar las cuentas de una empresa o marca en plataformas de redes sociales como Facebook, Instagram, Twitter, LinkedIn, entre otras. ",
    long_description: `La gestión de redes sociales es el proceso de administrar y optimizar las cuentas de una empresa o marca en plataformas de redes sociales como Facebook, Instagram, Twitter, LinkedIn, entre otras. Implica la creación y publicación de contenido relevante, interactuar con los seguidores, gestionar comentarios y mensajes, realizar análisis de datos y medir el rendimiento de las estrategias implementadas. El objetivo es construir una presencia sólida en línea, aumentar la visibilidad de la marca, fomentar la participación de los usuarios y fortalecer las relaciones con la comunidad en las redes sociales...`,

    propuesta: [
      {pic:'fa-solid  ',desc:"Creación y administración de hasta 2 redes sociales "},
      {pic:'fa-solid ',desc:"Auditoría de la cuenta y estudio de mercado"},
      {pic:'fa-solid ',desc:"Auditoría de la cuenta y estudio de mercado"},
      {pic:'fa-solid ',desc:"Optimización de la cuenta y desarrollo de un plan de marketing "},
      {pic:'fa-solid ',desc:"Campaña publicitaria mensual"},
      
      
    ],

    banner:['/img/banred1.svg'],

    objetivo:
      "¡Estamos comprometidos en brindarle resultados efectivos en su estrategia de redes sociales!",
  },
];

export default Servicios;
