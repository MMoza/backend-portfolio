export const patternsPlayground = {
  back: "Volver a proyectos",

  header: {
    label: "Área de Juegos Arquitectónica",
    title: "Patterns Playground",
    description:
      "Un proyecto práctico diseñado para explorar y entender patrones de diseño de software comunes a través de implementaciones reales en Laravel."
  },

  highlights: {
    architecture: {
      title: "Enfoque Arquitectónico",
      description:
        "Explorando patrones de diseño estructurales y conductuales utilizados en sistemas backend."
    },
    laravel: {
      title: "Implementación Laravel",
      description:
        "Patrones implementados dentro de un entorno real de aplicación Laravel."
    },
    learning: {
      title: "Aprendiendo Construyendo",
      description:
        "Entender patrones de diseño a través de implementaciones y experimentos concretos."
    }
  },

  intro: {
    p1: "Los patrones de diseño suelen ser más fáciles de entender conceptualmente que de aplicar correctamente en sistemas del mundo real.",
    p2: "Este proyecto actúa como un área de pruebas donde diferentes patrones de diseño pueden implementarse, probarse y analizarse de forma aislada, mientras se mantienen arraigados en una estructura realista de aplicación Laravel."
  },

  goals_section: {
    title: "Objetivos del Proyecto",
    p1: "El propósito de este proyecto es explorar cómo diferentes patrones ayudan a estructurar sistemas backend y cómo afectan la mantenibilidad, extensibilidad y legibilidad de la base de código.",
    items: [
      "Entender la intención detrás de los patrones de diseño comunes",
      "Analizar su impacto en la organización del código",
      "Evaluar cuándo los patrones simplifican la complejidad y cuándo introducen abstracción innecesaria",
      "Experimentar con diferentes enfoques para resolver el mismo problema"
    ]
  },

  patterns_section: {
    title: "Patrones Implementados",
    intro: "El área de juegos incluirá progresivamente implementaciones de diferentes categorías de patrones de diseño.",
    creational: {
      title: "Patrones Creacionales",
      items: ["Factory", "Abstract Factory", "Builder"]
    },
    structural: {
      title: "Patrones Estructurales",
      items: ["Decorator", "Adapter", "Facade"]
    },
    behavioral: {
      title: "Patrones de Comportamiento",
      items: ["Strategy", "Observer", "Command"]
    }
  },

  why_laravel_section: {
    title: "¿Por qué Laravel?",
    p1: "Laravel proporciona un buen entorno para experimentar con patrones de diseño porque ya incorpora varios de ellos en su arquitectura central.",
    p2: "Conceptos como contenedores de servicios, fachadas, sistemas de eventos y tuberías de middleware ofrecen un área de juegos natural para observar cómo los patrones interactúan con un ecosistema de framework real.",
    p3: "Al construir pequeños ejemplos aislados dentro de una aplicación Laravel, el proyecto permite experimentación sin la complejidad de una base de código de producción grande."
  },

  learning_approach_section: {
    title: "Enfoque de Aprendizaje",
    p1: "Cada implementación de patrón incluye un pequeño ejemplo de dominio que demuestra cuándo el patrón se vuelve útil y qué compensaciones introduce.",
    p2: "El enfoque no es solo implementar patrones, sino también entender el razonamiento detrás de ellos e identificar escenarios donde soluciones más simples podrían ser preferibles."
  }
};
