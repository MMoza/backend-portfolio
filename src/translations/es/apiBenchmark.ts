export const apiBenchmark = {
  back: "Volver a proyectos",

  header: {
    label: "Experimento Arquitectónico",
    title: "PHP API Benchmark",
    description:
      "Proyecto experimental que compara cómo diferentes frameworks PHP se comportan al implementar la misma pequeña API REST."
  },

  highlights: {
    implementations: {
      title: "3 Implementaciones",
      description: "Implementaciones en PHP puro, Laravel y Symfony."
    },
    domain: {
      title: "Dominio Único",
      description: "La misma entidad y reglas implementadas en todos los frameworks."
    },
    focus: {
      title: "Enfoque Arquitectónico",
      description: "Comparando complejidad, experiencia de desarrollo y capacidad de evolución."
    }
  },

  intro: {
    p1: "Este proyecto explora cómo diferentes enfoques arquitectónicos afectan el desarrollo y evolución de una pequeña API backend.",
    p2: "El objetivo no es determinar cuál framework es \"mejor\", sino analizar cómo cada enfoque maneja la complejidad, la estructura y la experiencia del desarrollador al resolver el mismo problema."
  },

  domain_section: {
    title: "Modelo de Dominio",
    p1: "El benchmark se construye alrededor de un dominio muy pequeño: una API de seguimiento de hábitos. El sistema permite a los usuarios definir hábitos personales y rastrear su progreso de finalización a lo largo del tiempo.",
    items: [
      "Crear hábitos",
      "Listar hábitos existentes",
      "Actualizar la configuración del hábito",
      "Registrar la finalización del hábito"
    ]
  },

  entity_section: {
    title: "Entidad: Hábito",
    description: "Cada hábito representa una actividad recurrente que el usuario quiere rastrear.",
    fields: "id name description frequency (daily / weekly) target_count completed_count created_at"
  },

  implementations_section: {
    title: "Implementaciones de Frameworks",
    plain_php: "Implementación mínima sin framework, enfocándose en enrutamiento explícito y gestión manual de dependencias.",
    laravel: "Implementación usando modelos Eloquent, controladores y la arquitectura de servicios típica de Laravel.",
    symfony: "Implementación usando controladores de Symfony, inyección de dependencias y Doctrine ORM."
  },

  criteria_section: {
    title: "Criterios de Evaluación",
    intro: "Cada implementación será evaluada en varios aspectos:",
    items: [
      "Complejidad estructural",
      "Experiencia del desarrollador durante la implementación",
      "Facilidad para agregar nuevas funcionalidades",
      "Testeabilidad del sistema"
    ]
  },

  goal_section: {
    title: "Objetivo del Proyecto",
    p1: "El propósito de este experimento es entender mejor los intercambios entre simplicidad y abstracción en el desarrollo backend.",
    p2: "Al implementar la misma API con diferentes enfoques arquitectónicos, es más fácil evaluar cómo los frameworks influyen en la evolución de una base de código conforme la complejidad aumenta."
  }
};
