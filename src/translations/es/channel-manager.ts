export const channelManager = {
  back: "Volver a experiencia de Desarrollador Backend",

  header: {
    title: "Activity Channel Manager",
    description:
      "Evolución y mantenimiento del sistema de distribución que conecta nuestra plataforma de actividades con múltiples canales de distribución turística."
  },

  metrics: [
    {
      value: "5+",
      label: "plataformas de distribución integradas"
    },
    {
      value: "3",
      label: "versiones de API mantenidas"
    },
    {
      value: "2",
      label: "direcciones de distribución soportadas"
    }
  ],

  context: {
    title: "Contexto",
    paragraphs: [
      "El channel manager es responsable de distribuir el inventario de actividades en múltiples plataformas turísticas mientras mantiene sincronizadas la disponibilidad, precios y reservas entre sistemas.",
      "La plataforma expone varias APIs que permiten a canales externos consumir datos de productos, crear reservas y sincronizar disponibilidad."
    ]
  },

  distributions: {
    title: "Integraciones de Distribución",
    intro:
      "El sistema se integra con varias plataformas principales de distribución turística, cada una con diferentes especificaciones de API y requisitos operacionales.",
    platforms: ["Civitatis", "GetYourGuide", "Viator", "Tiqets", "Axess"]
  },

  apiEvolution: {
    title: "Evolución de API",
    intro:
      "Parte de mi trabajo implicó evolucionar y mantener las APIs consumidas por estas plataformas de distribución a medida que sus requisitos de integración cambiaban con el tiempo.",
    items: [
      "Migración de la integración de GetYourGuide a una versión más nueva de API",
      "Mantenimiento y extensión de los endpoints de Viator",
      "Evolución continua de la integración de Civitatis trabajando colaborativamente con su equipo técnico",
      "Desarrollo de una nueva versión de nuestra API interna de partners utilizada por canales de distribución más pequeños"
    ]
  },

  octo: {
    title: "Integración del Protocolo OCTO",
    paragraphs: [
      "Para soportar plataformas de distribución adicionales, implementé una nueva API siguiendo el protocolo OCTO, una especificación de la industria diseñada para estandarizar la conectividad entre sistemas de reserva y canales de distribución.",
      "Esta integración permitió que nuevos canales como Tiqets se conectaran a la plataforma mientras mantenía el sistema alineado con los estándares de la industria."
    ]
  },

  reverseChannel: {
    title: "Arquitectura de Canal Inverso",
    paragraphs: [
      "El sistema también fue evolucionado para soportar un modelo de distribución invertido.",
      "Además de distribuir nuestro propio inventario a canales externos, la plataforma ahora puede ingerir actividades de motores de reserva externos y exponerlas dentro de nuestro ecosistema.",
      "Esto fue implementado a través de un nuevo submódulo capaz de mapear catálogos de actividades externos y estructuras de disponibilidad en nuestro modelo de dominio interno.",
      "La arquitectura permite que múltiples motores de reserva externos se integren en el futuro mientras expone esas actividades a través de todos los canales de distribución existentes."
    ]
  }
};
