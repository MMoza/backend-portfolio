export const architectureComparison = {
  back: "Volver a proyectos",

  hero: {
    title: "Comparación de Arquitecturas: Sistema de Reservas",
    subtitle: "4 arquitecturas. 4 fases de creciente complejidad. Mismo dominio.",
    badges: ["PHP 8.2", "Laravel 12", "4 Arquitecturas", "4 Fases", "78 Tests", "506 Assertions"],
    cta: "Ver en GitHub"
  },

  experiment: {
    title: "El Experimento",
    description: "Este es un laboratorio práctico que explora cómo diferentes enfoques arquitectónicos responden al aumento de la complejidad del dominio. La misma lógica empresarial se implementa de cuatro formas distintas, cada una abordando el mismo problema con filosofías de diseño diferentes.",
    question: "¿Cómo se comporta tu arquitectura cuando el dominio se vuelve complejo?"
  },

  architectures: {
    title: "Arquitecturas Comparadas",
    a01: {
      id: "a01",
      name: "A01 — Monolithic Eloquent",
      pattern: "Active Record / Monolítico",
      philosophy: "Uso directo del ORM, lógica en modelos y controladores.",
      strength: "Más rápido de comenzar, mínimo boilerplate.",
      link: "Ver Detalles"
    },
    a02: {
      id: "a02",
      name: "A02 — Repository Pattern",
      pattern: "Service + Repository",
      philosophy: "Separación de responsabilidades con capa de servicios.",
      strength: "Mejor testeabilidad mediante inyección de dependencias.",
      link: "Ver Detalles"
    },
    a03: {
      id: "a03",
      name: "A03 — Strategy Polymorphism",
      pattern: "Strategy Pattern + Polimorfismo",
      philosophy: "Encapsular comportamientos a través del polimorfismo de objetos.",
      strength: "Modelo de dominio más expresivo.",
      link: "Ver Detalles"
    },
    a04: {
      id: "a04",
      name: "A04 — Decorator Domain",
      pattern: "Builder + Decorator Pattern",
      philosophy: "Componer comportamientos dinámicamente sin modificación.",
      strength: "Escala horizontalmente con nuevas reglas.",
      link: "Ver Detalles"
    }
  },

  domain: {
    title: "Dominio & Endpoints",
    description: "Sistema de reservas hoteleras con creciente complejidad de reglas empresariales a través de 4 fases.",
    endpointsTitle: "Endpoints Compartidos",
    endpoints: [
      {
        method: "POST",
        path: "/api/{arch}/v{phase}/reservation",
        description: "Crear reserva"
      },
      {
        method: "GET",
        path: "/api/{arch}/v{phase}/reservation/{id}",
        description: "Obtener reserva"
      }
    ],
    prefixesTitle: "Prefijos URL por Arquitectura",
    prefixes: [
      {
        path: "/api/arch_01/",
        arch: "Monolithic Eloquent"
      },
      {
        path: "/api/arch_02/",
        arch: "Repository Pattern"
      },
      {
        path: "/api/arch_03/",
        arch: "Strategy + Polimorfismo"
      },
      {
        path: "/api/arch_04/",
        arch: "Decorator Domain"
      }
    ]
  },

  phases: {
    title: "Fases de Evolución",
    description: "La complejidad del dominio aumenta progresivamente en 4 fases",
    phase01: {
      title: "Fase 01: Cálculo Base",
      description: "Precio por noche, extras por noche/estancia"
    },
    phase02: {
      title: "Fase 02: Reglas Condicionales",
      description: "Descuentos por volumen (7/14 noches), promo combinada, precio mínimo, validación spa"
    },
    phase03: {
      title: "Fase 03: Comportamiento Polimórfico",
      description: "Impuestos hoteleros/eventos, comisiones, restricción de 3 noches para eventos"
    },
    phase04: {
      title: "Fase 04: Reglas Componibles",
      description: "Early booking (30/60 días), recargo de temporada (temporada alta/baja)"
    }
  },

  charts: {
    lineOfCode: {
      title: "Líneas de Código por Fase",
      caption: "A04 se desvía significativamente en P04, pero el coste está en abstracciones reutilizables."
    },
    controllerSize: {
      title: "Tamaño del Controlador por Fase",
      caption: "El controlador de A01 creció un 122% mientras que A02/A03/A04 se mantuvieron inalterados."
    },
    accumulatedGrowth: {
      title: "Crecimiento Acumulado: Fase 01 → Fase 04",
      caption: "A01 parece económico pero concentra todo el coste en un único punto frágil."
    }
  },

  rankings: {
    title: "Rankings Finales",
    criteria: {
      simplicity: {
        label: "Simplicidad",
        gold: "A01 (6 archivos)",
        silver: "A02 (10)",
        bronze: "A03 (14)",
        worst: "A04 (22)"
      },
      thinController: {
        label: "Controlador Delgado",
        gold: "A02/A03/A04 (30-32)",
        silver: "—",
        bronze: "—",
        worst: "A01 (184)"
      },
      thinService: {
        label: "Servicio Delgado",
        gold: "A04 (99+152)",
        silver: "A03 (123)",
        bronze: "A02 (172)",
        worst: "A01 (184)"
      },
      testability: {
        label: "Testeabilidad",
        gold: "A04 (dominio puro)",
        silver: "A03 (estrategia)",
        bronze: "A02 (servicio)",
        worst: "A01 (requiere BD)"
      },
      extensibility: {
        label: "Extensibilidad",
        gold: "A04 (nuevo Decorator)",
        silver: "A03 (nueva Strategy)",
        bronze: "A02 (modificar servicio)",
        worst: "A01 (modificar controlador)"
      },
      fragility: {
        label: "Fragilidad",
        gold: "A04 (baja)",
        silver: "A03 (media)",
        bronze: "A02 (media-alta)",
        worst: "A01 (alta)"
      }
    }
  },

  useCases: {
    title: "Cuándo Usar Cada Una",
    description: "Selección de arquitectura basada en las características de tu dominio",
    scenarios: [
      {
        condition: "Dominio estable, sin cambios de reglas",
        recommendation: "A01 o A02"
      },
      {
        condition: "Tipos de producto con diferentes fórmulas",
        recommendation: "A03"
      },
      {
        condition: "Reglas de precio que cambian frecuentemente",
        recommendation: "A04"
      }
    ]
  },

  conclusions: {
    title: "Conclusiones Clave",
    a01: {
      title: "A01: La simplicidad tiene coste exponencial",
      description: "El controlador creció de 83 a 184 líneas en un único método manejando 13 responsabilidades. El monto del descuento de early booking se analiza desde la cadena discount_reason (str_starts_with + explode) — un hack frágil."
    },
    a02: {
      title: "A02: Problema del Servicio Dios",
      description: "El controlador se mantiene en 30 líneas pero toda la complejidad se trasladó a un 'Servicio Dios' de 172 líneas. El patrón Repository desvincula infraestructura pero no reduce complejidad algorítmica."
    },
    a03: {
      title: "A03: Duplicación de estrategias",
      description: "Phase04PricingStrategy duplica toda la lógica de BasicPricingStrategy solo para añadir 3 métodos. Buen equilibrio pero necesita refactorización para evitar duplicación de estrategias por fase."
    },
    a04: {
      title: "A04: Escalabilidad horizontal",
      description: "Mayor coste inicial (22 archivos, 1139 líneas) pero escala horizontalmente: cada nueva regla es un nuevo archivo Decorator, no código modificado. Builder + Decorator significa que Fase 05 apenas toca código existente."
    }
  },

  cta: {
    title: "¿Listo para profundizar?",
    description: "Explora cada implementación de arquitectura",
    button: "Ver Detalles de la Arquitectura"
  },

  // Individual architecture pages
  architectureDetail: {
    back: "Volver a la Comparación",
    pattern: "Patrón",
    philosophy: "Filosofía",
    description: "Descripción",
    evolution: "Evolución a través de Fases",
    metrics: "Métricas Clave",
    metricsTable: {
      phase: "Fase",
      files: "Archivos",
      lines: "Líneas de Código",
      controller: "Controlador (líneas)",
      serviceLayer: "Capa de Servicios (líneas)"
    },
    conclusion: "Conclusión",
    source: "Ver Código en GitHub",
    metrics_phase_01: "Fase de Cálculo Base",
    metrics_phase_02: "Fase de Reglas Condicionales",
    metrics_phase_03: "Fase de Comportamiento Polimórfico",
    metrics_phase_04: "Fase de Reglas Componibles"
  },

  // Conclusions page
  conclusionPage: {
    title: "Conclusiones y Rankings",
    backLabel: "Volver a la Comparación",
    detailed: "Análisis Detallado",
    expandConclusion: "Expandir",
    collapseConclusion: "Contraer",
    seeArchitectureDetails: "Ver análisis detallado",
    exploreArchitectures: "Explora arquitecturas individuales para ver detalles de implementación."
  }
};
