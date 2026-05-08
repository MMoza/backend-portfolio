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
      pattern: "Active Record / Monolito",
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
    quadrant: {
      title: "Mapa de Compromisos Arquitectónicos",
      caption: "¿Dónde se sitúa cada arquitectura en el espacio de simplicidad vs fragilidad? El ideal es abajo-izquierda (simple Y robusto), pero la realidad obliga a hacer compromisos."
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
    backToComparison: "← Volver a la Comparación",
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
      serviceLayer: "Capa de Servicios (líneas)",
      phase01: "Fase 01",
      phase02: "Fase 02",
      phase03: "Fase 03",
      phase04: "Fase 04"
    },
    conclusion: "Conclusión",
    source: "Ver Código en GitHub",
    exploreCode: "Explora el Código",
    metrics_phase_01: "Fase de Cálculo Base",
    metrics_phase_02: "Fase de Reglas Condicionales",
    metrics_phase_03: "Fase de Comportamiento Polimórfico",
    metrics_phase_04: "Fase de Reglas Componibles",
    
    // A01 - Monolithic Eloquent
    a01: {
      title: "A01 — Monolithic Eloquent",
      subtitle: "Uso directo del ORM con lógica de negocio en modelos y controladores",
      patternValue: "Active Record / Monolito",
      philosophyValue: "Abraza el ORM como abstracción principal. Iteración rápida, mínimo boilerplate.",
      description: "A01 utiliza los modelos Laravel Eloquent directamente en la capa del controlador. La lógica de negocio reside en métodos del modelo y acciones del controlador. Este enfoque prioriza el desarrollo rápido sobre el mantenimiento a largo plazo.",
      strengths: {
        header: "Fortalezas:",
        items: [
          "Configuración mínima; empieza a codificar inmediatamente",
          "Aprovecha el query builder expresivo de Eloquent",
          "Rápido para añadir lógica de negocio simple",
          "Sin overhead de abstracción"
        ]
      },
      weaknesses: {
        header: "Debilidades:",
        items: [
          "Acoplamiento estrecho con la capa de base de datos",
          "Lógica dispersa entre modelos y controladores",
          "Difícil de testear sin una base de datos",
          "La complejidad crece exponencialmente con reglas de dominio",
          "Reglas de negocio hardcodeadas son frágiles"
        ]
      },
      warning: {
        label: "Advertencia",
        message: "El controlador creció 122% (83 → 184 líneas). Toda la complejidad concentrada en un único método manejando 13 responsabilidades distintas."
      },
      metrics: {
        totalFiles: { label: "Total de Archivos", value: "7", note: "Sin crecimiento entre fases" },
        totalLines: { label: "Total de Líneas de Código", value: "466", note: "+114% crecimiento P01→P04" },
        controllerSize: { label: "Tamaño del Controlador (Fase 04)", value: "184 líneas", note: "+101 líneas desde Fase 01" },
        testability: { label: "Puntuación de Testeabilidad", value: "Baja", note: "Requiere mocking de base de datos" }
      },
      conclusion: {
        bold: "La simplicidad tiene un coste exponencial.",
        paragraphs: [
          "A01 es el más rápido para empezar pero se vuelve inmanejable a medida que crece la complejidad del dominio. El controlador maneja múltiples responsabilidades con lógica de negocio hardcodeada. Los descuentos de early booking se parsean usando manipulación de strings (str_starts_with + explode), creando código frágil y difícil de mantener.",
          "En la Fase 04, el único método del controlador se ha vuelto imposible de testear de forma aislada, y añadir nuevas reglas de precio requiere modificaciones cuidadosas para evitar romper la lógica existente."
        ]
      },
      whenToUse: {
        title: "✓ Cuándo usar A01",
        items: [
          "Prototipo o prueba de concepto con lógica estable y simple",
          "Desarrollador único, equipo pequeño, timeline corto de proyecto",
          "Cuando estás seguro de que la complejidad del dominio no crecerá significativamente"
        ]
      }
    },
    
    // A02 - Repository Pattern
    a02: {
      title: "A02 — Repository Pattern",
      subtitle: "Capas de Servicio y Repository separan controladores del acceso a datos",
      patternValue: "Service + Repository",
      philosophyValue: "Invierte dependencias, mantén controladores delgados, abstrae acceso a datos.",
      description: "A02 introduce una capa de servicio y el patrón repository. Los controladores delegan a servicios, los servicios contienen lógica de negocio, y los repositories abstraen el acceso a datos. Esto crea una clara separación de responsabilidades y mejora la testeabilidad.",
      strengths: {
        header: "Fortalezas:",
        items: [
          "Los controladores permanecen delgados (30 líneas) en todas las fases",
          "Inversión de dependencias a través de interfaces",
          "Los servicios son más fáciles de testear con repositories mockeados",
          "Clara separación entre infraestructura y lógica",
          "Buen equilibrio entre estructura y pragmatismo"
        ]
      },
      weaknesses: {
        header: "Debilidades:",
        items: [
          "Toda la complejidad migra al 'Servicio Dios' (172 líneas)",
          "El servicio sigue acoplado a detalles de implementación de lógica de negocio",
          "Sin reducción en complejidad algorítmica",
          "Añadir nuevas reglas de precio aún requiere modificar el servicio",
          "La capa de servicio puede convertirse en un catch-all para lógica"
        ]
      },
      warning: {
        label: "Patrón God Service",
        message: "El controlador se mantiene delgado (30 líneas) pero el servicio creció a 172 líneas manejando toda la lógica de precio. El patrón Repository desacopla el acceso a datos pero no reduce la complejidad algorítmica."
      },
      metrics: {
        totalFiles: { label: "Total de Archivos", value: "10", note: "Estable entre fases" },
        totalLines: { label: "Total de Líneas de Código", value: "587", note: "+118% crecimiento P01→P04" },
        controllerSize: { label: "Tamaño del Controlador (Fase 04)", value: "30 líneas", note: "+1 línea desde Fase 01" },
        testability: { label: "Puntuación de Testeabilidad", value: "Media", note: "Servicios testeables con mocks" }
      },
      conclusion: {
        bold: "El patrón Repository resuelve el problema equivocado.",
        paragraphs: [
          "Aunque desacopla el acceso a datos (¡bien!), no aborda el problema central: la complejidad algorítmica. Toda la lógica de precio sigue viviendo en un 'Servicio Dios' que maneja cada escenario de precio. Añadir nuevas reglas aún requiere modificar el servicio y entender todo su flujo de lógica.",
          "A02 es mejor que A01, pero es una mejora táctica que no aborda el problema estructural de la complejidad creciente del dominio."
        ]
      },
      whenToUse: {
        title: "✓ Cuándo usar A02",
        items: [
          "Necesitas testeabilidad pero la lógica de dominio sigue siendo relativamente simple",
          "El equipo se beneficia de una clara separación de responsabilidades",
          "Dominio estable con cambios infrecuentes de reglas de negocio",
          "Buen paso intermedio entre A01 y patrones más complejos"
        ]
      }
    },
    
    // A03 - Strategy + Polymorphism
    a03: {
      title: "A03 — Strategy + Polymorphism",
      subtitle: "Encapsula comportamientos a través de objetos strategy polimórficos",
      patternValue: "Strategy Pattern + Polimorfismo",
      philosophyValue: "Encapsula comportamientos variables. Cada tipo de strategy implementa sus propias reglas de precio.",
      description: "A03 utiliza el patrón Strategy para encapsular diferentes comportamientos de precio. Cada tipo de reserva (Hotel, Evento, etc.) tiene su propia clase Strategy implementando lógica de precio. Esto hace el modelo de dominio más expresivo y alinea la estructura del código con conceptos de negocio.",
      strengths: {
        header: "Fortalezas:",
        items: [
          "Claro mapeo entre tipos de negocio y código",
          "Fácil de testear estrategias individuales de forma aislada",
          "Nuevos tipos de reserva requieren nuevas clases strategy, no modificaciones",
          "Buen equilibrio entre estructura y complejidad",
          "Controladores y servicios permanecen delgados (30-32 líneas)"
        ]
      },
      weaknesses: {
        header: "Debilidades:",
        items: [
          "Más archivos (14) que enfoques más simples",
          "Phase04PricingStrategy duplica lógica de BasicPricingStrategy",
          "Crear una nueva fase crea una nueva strategy duplicando lógica previa",
          "Necesita mejor refactorización para manejar comportamiento compartido entre strategies",
          "Aún requiere entender la jerarquía de strategies"
        ]
      },
      warning: {
        label: "Duplicación de Strategies",
        message: "Phase04PricingStrategy duplica lógica de BasicPricingStrategy para añadir 3 nuevos métodos. Muestra que el patrón funciona pero necesita refactorización para evolución basada en fases."
      },
      metrics: {
        totalFiles: { label: "Total de Archivos", value: "14", note: "Estable entre fases" },
        totalLines: { label: "Total de Líneas de Código", value: "775", note: "+109% crecimiento P01→P04" },
        controllerSize: { label: "Tamaño del Controlador (Fase 04)", value: "32 líneas", note: "+1 línea desde Fase 01" },
        testability: { label: "Puntuación de Testeabilidad", value: "Buena", note: "Las strategies son unidades testeables" }
      },
      conclusion: {
        bold: "Buen equilibrio con espacio para refinamiento.",
        paragraphs: [
          "A03 alcanza un sólido punto medio. Los controladores se mantienen delgados, las strategies son cohesivas y testeables, y el modelo de dominio expresa claramente la intención de negocio. Sin embargo, muestra el riesgo de duplicación de strategies: añadir una nueva fase requiere copiar la lógica de la strategy previa y extenderla.",
          "Con mejor refactorización (composición sobre herencia, métodos trait compartidos), este patrón escala mucho mejor. Es una excelente elección cuando tienes tipos de producto distintos con comportamientos variables."
        ]
      },
      whenToUse: {
        title: "✓ Cuándo usar A03",
        items: [
          "Tipos de producto o contextos tienen diferentes reglas de cálculo",
          "Los dominios de negocio se mapean naturalmente a diferentes strategies",
          "Quieres buena testeabilidad con clara encapsulación de comportamiento",
          "Los equipos se benefician de ver el mapeo strategy-a-negocio"
        ]
      }
    },
    
    // A04 - Decorator Domain
    a04: {
      title: "A04 — Decorator Domain",
      subtitle: "Compón comportamientos dinámicamente a través de decorators sin modificación",
      patternValue: "Builder + Decorator Pattern",
      philosophyValue: "Principio Abierto/Cerrado. Añade comportamiento a través de composición, nunca modificación.",
      description: "A04 aplica el patrón Decorator con un Builder para componer reglas de precio dinámicamente. Cada regla de precio (descuento, impuesto, recargo) es un decorator separado que envuelve al anterior. Nuevas reglas requieren nuevos archivos decorator, no modificación de código existente.",
      strengths: {
        header: "Fortalezas:",
        items: [
          "Principio Abierto/Cerrado: extiende a través de composición, no modificación",
          "Cada decorator es una responsabilidad única: aplica una regla",
          "Lógica de dominio pura, altamente testeable sin base de datos",
          "Escala horizontalmente: nuevas reglas = nuevos archivos, código existente intacto",
          "La Fase 05 apenas requeriría cambios al código existente",
          "Reglas encadenables permiten escenarios de precio complejos"
        ]
      },
      weaknesses: {
        header: "Debilidades:",
        items: [
          "Mayor coste inicial (22 archivos, 1139 líneas en Fase 04)",
          "Curva de aprendizaje pronunciada para el concepto de composición de decorators",
          "Debugging puede ser complejo: los decorators están envueltos unos dentro de otros",
          "La configuración del Builder debe ser precisa para obtener el orden correcto de reglas",
          "Over-engineering para dominios simples y estables"
        ]
      },
      warning: {
        label: "Escalabilidad Horizontal",
        message: "El controlador nunca cambia (32 líneas). Nuevos archivos añadidos (+9) pero código existente intacto. Cada decorator es una unidad enfocada y testeable. Mayor coste inicial paga dividendos a medida que el dominio evoluciona."
      },
      metrics: {
        totalFiles: { label: "Total de Archivos (Fase 04)", value: "22", note: "+9 archivos, todos nuevos decorators" },
        totalLines: { label: "Total de Líneas de Código", value: "1139", note: "+169% crecimiento P01→P04" },
        controllerSize: { label: "Tamaño del Controlador (Todas las Fases)", value: "32 líneas", note: "Cero crecimiento en todas las fases" },
        testability: { label: "Puntuación de Testeabilidad", value: "Excelente", note: "Dominio puro, no necesita BD" }
      },
      conclusion: {
        bold: "Escalabilidad horizontal a un coste.",
        paragraphs: [
          "A04 es el enfoque más sofisticado. Cumple la promesa del Principio Abierto/Cerrado: el sistema crece a través de nuevos archivos, no modificaciones. Cada decorator es enfocado, testeable e independiente. La Fase 05 añadiría unos pocos nuevos decorators sin tocar código existente.",
          "El compromiso es una complejidad inicial significativa: 22 archivos y 1139 líneas para la Fase 04. Esta inversión se justifica cuando las reglas cambian frecuentemente, pero es excesivo para dominios estables. Este es el patrón al que recurrir cuando sabes que tu dominio evolucionará rápidamente y necesita protección contra fragilidad."
        ]
      },
      whenToUse: {
        title: "✓ Cuándo usar A04",
        items: [
          "Las reglas de precio cambian frecuentemente e impredeciblemente",
          "El negocio espera mantenimiento y evolución a largo plazo",
          "El equipo tiene experiencia con patrones de diseño y composición",
          "Cada regla debe ser testeable y desplegable de forma independiente",
          "Necesitas extensibilidad sin modificación de código existente"
        ]
      }
    }
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
