export const portfolio = {
  back: "Volver",

  hero: {
    title: "Sobre este portafolio",
    intro:
      "Este portafolio fue creado como un proyecto a largo plazo para documentar mi trabajo profesional, las experiencias técnicas que he tenido y los sistemas en los que he participado.",
    goal:
      "Mi portafolio anterior había quedado algo desactualizado y ya no reflejaba bien mi rol actual como desarrollador backend. Mostraba principalmente proyectos de mi etapa de estudiante, muchos de ellos orientados al desarrollo full-stack o al frontend."
  },

  purpose: {
    title: "Construyendo un portafolio a largo plazo",
    paragraphs: [
      "Decidí reconstruir mi portafolio desde cero con el objetivo de crear algo más mantenible, profesional y representativo de mi trabajo actual.",
      "En lugar de un simple escaparate de pequeños proyectos, quería tener un lugar donde poder documentar progresivamente las integraciones, sistemas y decisiones arquitectónicas más relevantes en las que trabajo.",
      "La idea es que este portafolio pueda evolucionar con el tiempo a medida que sigo adquiriendo experiencia y participando en nuevos proyectos e integraciones."
    ]
  },

  goals: {
    title: "Objetivos del diseño",
    intro: "Desde el principio definí algunos principios para este proyecto:",
    items: [
      "Un diseño completamente responsive que funcione correctamente tanto en escritorio como en dispositivos móviles.",
      "Soporte para múltiples idiomas (inglés y español).",
      "Modo claro y modo oscuro.",
      "Una interfaz sencilla pero visualmente atractiva."
    ]
  },

  technology: {
    title: "Elección de tecnologías",
    paragraphs: [
        {
        beforeLink: "Para este proyecto decidí experimentar con Astro, un framework que descubrí a través del contenido de ",
        linkText: "Midudev",
        afterLink: " y que me pareció especialmente interesante para proyectos como este."
        },
        {
        text: "Astro permite crear componentes reutilizables manteniendo un resultado final muy ligero, evitando la necesidad de utilizar frameworks de cliente más pesados como React cuando realmente no son necesarios."
        },
        {
        text: "También fue mi primera experiencia utilizando Tailwind CSS, lo que me permitió construir la interfaz de forma rápida manteniendo consistencia visual y un diseño completamente responsive."
        },
        {
        text: "Este enfoque me permitió construir una estructura modular y mantenible sin añadir complejidad innecesaria a lo que en esencia es un sitio centrado en contenido."
        }
    ]
    },

  challenges: {
    title: "Retos técnicos",
    paragraphs: [
      "Uno de los principales retos fue implementar un sistema de internacionalización sencillo pero mantenible. El sitio soporta inglés y español manteniendo una estructura de rutas clara y predecible.",
      "Otro reto fue diseñar una interfaz que resultara visualmente interesante sin llegar a ser demasiado compleja. El diseño nunca ha sido mi punto fuerte y, además, soy daltónico, lo que añade cierta dificultad a la hora de trabajar con paletas de colores.",
      "Implementar soporte para modo claro y modo oscuro manteniendo la coherencia visual en todo el sitio también fue un ejercicio interesante."
    ]
  },

  deployment: {
    title: "Flujo de despliegue",
    paragraphs: [
        "Otra parte interesante del proyecto fue el flujo de despliegue.",
        "La nueva versión del portafolio se desarrolló en un repositorio independiente, mientras que el sitio en producción seguía alojado en mi repositorio original de GitHub Pages.",
        "Una vez que el proyecto alcanzó un estado funcional, configuré un workflow de GitHub Actions para construir el sitio y desplegarlo automáticamente en el repositorio de GitHub Pages existente, reemplazando así el portafolio anterior."
    ]
  }
};