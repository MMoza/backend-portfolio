export const invoicing = {
  back: "Volver a Desarrollador FullStack en MisterPlan",

  header: {
    title: "SaaS de Facturación Electrónica",
    description:
      "Sistema unificado de facturación que consolida la facturación de múltiples productos e integra las regulaciones de facturación electrónica en diferentes países."
  },

  metrics: [
    {
      value: "+5000",
      label: "facturas generadas por día"
    },
    {
      value: "3",
      label: "dominios de facturación unificados"
    },
    {
      value: "6",
      label: "integraciones regulatorias"
    }
  ],

  context: {
    title: "Contexto del Problema",
    paragraphs: [
      "Inicialmente, el sistema solo soportaba facturación electrónica a través de la integración de TicketBai. Toda la lógica fiscal requerida y las reglas de validación se implementaron dentro de un único servicio que manejaba diferentes variaciones regionales del protocolo TicketBai.",
      "A medida que la plataforma evolucionó, fue necesario implementar nuevas integraciones de facturación electrónica, incluyendo VeriFactu para España y SWSapien para México. Además, la funcionalidad de facturación necesitaba implementarse en dos productos diferentes: el sistema de gestión interna y el software de gestión de actividades.",
      "Continuar extendiendo el servicio existente con más casos especiales conduciría rápidamente a un sistema complejo y difícil de mantener. En lugar de agregar nueva lógica a la implementación existente, se decidió rediseñar la arquitectura de facturación alrededor de un dominio de facturación unificado."
    ]
  },

  domain: {
    title: "Dominio de Facturación Unificado",
    paragraphs: [
      "Se introdujo un modelo de dominio de facturación unificado para consolidar la generación de facturas entre los diferentes productos de la plataforma. Este dominio actúa como la fuente única de verdad para la creación de facturas, validación de datos fiscales y gestión del ciclo de vida de facturas.",
      "Tanto el sistema de gestión interna como el software de gestión de actividades ahora generan facturas utilizando el mismo modelo de dominio. Este enfoque elimina la lógica duplicada entre productos y garantiza datos fiscales consistentes en toda la plataforma.",
      "Una vez que se generan las facturas dentro del dominio unificado, el sistema delega la responsabilidad de comunicarse con administraciones fiscales externas a servicios de integración dedicados."
    ]
  },

  architecture: {
    title: "Arquitectura de Integración Regulatoria",
    paragraphs: [
      "Las regulaciones de facturación electrónica varían significativamente dependiendo del país y, en algunos casos, incluso entre administraciones regionales. Cada integración expone diferentes APIs, requisitos de validación y protocolos de comunicación.",
      "Para manejar esta variabilidad, el sistema de facturación fue diseñado con una capa de integración que desacopla el dominio de facturación de los servicios regulatorios externos.",
      "Cada integración implementa un adaptador dedicado responsable de traducir la representación interna de facturas al formato requerido por la administración o plataforma correspondiente."
    ]
  },

  integrations: {
    title: "Integraciones Actuales",
    items: [
      {
        name: "TicketBai",
        description:
          "integración para el País Vasco, soportando las tres implementaciones regionales: Araba, Bizkaia y Gipuzkoa."
      },
      {
        name: "VeriFactu",
        description:
          "integración que implementa los requisitos nacionales de facturación electrónica en España."
      },
      {
        name: "SWSapien",
        description:
          "integración que actúa como plataforma intermediaria responsable de comunicar datos de facturas con la autoridad fiscal mexicana (SAT)."
      }
    ]
  },

  extensibility: {
    title: "Arquitectura Extensible",
    paragraphs: [
      "Uno de los objetivos de diseño principales de este sistema fue la extensibilidad a largo plazo. Las nuevas integraciones fiscales pueden implementarse creando nuevos adaptadores sin modificar el dominio de facturación central.",
      "Este enfoque arquitectónico permite que la plataforma evolucione a medida que aparecen nuevos requisitos regulatorios, manteniendo el modelo de dominio interno estable y mantenible."
    ]
  }
};
