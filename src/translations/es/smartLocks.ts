export const smartLocks = {
  backLink: {
    label: "Volver a FullStack Developer en MisterPlan"
  },

  header: {
    title: "Integraciones con cerraduras electrónicas",
    description:
      "Desarrollo de integraciones con múltiples proveedores de cerraduras inteligentes utilizadas por hoteles y alojamientos turísticos. El sistema permite gestionar automáticamente el acceso de los huéspedes generando y distribuyendo credenciales de acceso temporales vinculadas a las reservas."
  },

  metrics: {
    providers: {
      value: "7",
      label: "proveedores de cerraduras integrados"
    },
    locks: {
      value: "+3000",
      label: "cerraduras gestionadas"
    },
    accommodations: {
      value: "+250",
      label: "alojamientos conectados"
    }
  },

  architecture: {
    title: "Modelo de abstracción de accesos",
    p1:
      "Los distintos proveedores ofrecen formas completamente diferentes de conceder acceso a una cerradura: códigos numéricos, enlaces temporales, eKeys, permisos en aplicaciones móviles o tokens específicos del proveedor.",
    p2:
      "Para manejar esta variabilidad, el sistema introduce una entidad de dominio abstracta llamada Key. Esta entidad representa una credencial de acceso genérica independientemente de la implementación del proveedor.",
    p3:
      "Cada integración adapta su mecanismo de acceso específico del proveedor a esta abstracción de dominio, permitiendo al sistema soportar nuevos proveedores y tipos de acceso sin modificar la lógica central del dominio."
  },

  workflow: {
    title: "Flujo de provisión de accesos",
    intro:
      "El módulo soporta dos estrategias de integración diferentes dependiendo de las capacidades del proveedor de cerraduras.",
    strategies: {
      directLockMapping: {
        title: "Mapeo directo de cerraduras",
        description:
          "Nuestro sistema asocia una habitación a una o varias cerraduras y genera las credenciales de acceso directamente a través de la API del proveedor."
      },
      roomSynchronization: {
        title: "Sincronización de habitaciones",
        description:
          "Nuestro sistema asocia nuestra habitación con la entidad habitación del sistema del proveedor y envía la información de la reserva. El proveedor genera entonces las credenciales de acceso necesarias para todas las cerraduras asociadas a esa habitación."
      }
    }
  },

  technicalHighlights: {
    title: "Aspectos técnicos destacados",
    items: [
      "Integraciones con TTLock, Nuki, Tesa, Yacan, Padword, Omnitec y Akiles",
      "Abstracción de credenciales de acceso basada en dominio",
      "Arquitectura desacoplada compatible con múltiples proveedores",
      "Procesos basados en eventos para garantizar la consistencia entre sistemas distribuidos"
    ]
  }
};