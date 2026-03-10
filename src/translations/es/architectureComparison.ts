export const architectureComparison = {
  back: "Volver a proyectos",

  header: {
    title: "Comparación de Arquitecturas — Sistema de Reservas",
    description:
      "Un experimento práctico que explora cómo diferentes enfoques arquitectónicos responden al aumento de complejidad en el dominio."
  },

  goal: {
    title: "Objetivo del proyecto",
    p1: "Este proyecto es un laboratorio práctico diseñado para comparar distintos estilos arquitectónicos aplicados al mismo dominio funcional.",
    p2: "El objetivo no es demostrar que una arquitectura sea mejor que otra, sino analizar cómo se comporta cada enfoque cuando la complejidad del negocio aumenta."
  },

  evaluation: {
    title: "Qué se evalúa",
    items: [
      "Complejidad estructural",
      "Complejidad cognitiva",
      "Testeabilidad",
      "Nivel de acoplamiento",
      "Escalabilidad del diseño",
      "Capacidad de evolución",
      "Coste de cambio al añadir nuevas reglas"
    ]
  },

  domain: {
    title: "Dominio común",
    p1: "Todas las arquitecturas implementan el mismo dominio: un sistema de reservas multiproducto con reglas de negocio progresivamente más complejas.",
    items: [
      "Productos reservables por rangos de fecha",
      "Extras opcionales (fijos o por noche)",
      "Cálculo del precio total",
      "Reglas de negocio cada vez más complejas"
    ]
  },

  architectures: {
    title: "Arquitecturas comparadas",
    a01: {
      name: "A01 — Monolithic Eloquent",
      summary: "Enfoque de Active Record puro usando Eloquent directamente.",
      description: "Rápido de desarrollar pero fuertemente acoplado al framework. La complejidad crece rápidamente a medida que aumentan las reglas del dominio."
    },
    a02: {
      name: "A02 — Repository Pattern",
      summary: "Separación entre controlador, capa de servicios y abstracción de repositorio.",
      description: "Introduce inversión de dependencias y mejora la testeabilidad manteniendo un modelo de dominio relativamente simple."
    },
    a03: {
      name: "A03 — Strategy + Polymorphism",
      summary: "El comportamiento de la reserva varía según el tipo de reserva.",
      description: "Encapsula reglas de negocio usando polimorfismo y objetos estrategia, haciendo el modelo de dominio más expresivo."
    },
    a04: {
      name: "A04 — Decorator Domain",
      summary: "El comportamiento se compone dinámicamente a través de decoradores.",
      description: "Aplica el principio Open/Closed permitiendo que las reglas y modificadores se agreguen sin modificar la lógica existente."
    }
  },

  phases: {
    title: "Fases de evolución",
    phase1Title: "Fase 01 — Cálculo Base",
    phase1: "Precio base, extras y cálculo del total.",
    phase2Title: "Fase 02 — Reglas Condicionales",
    phase2: "Descuentos por volumen, promociones y validaciones entre reglas.",
    phase3Title: "Fase 03 — Comportamiento Polimórfico",
    phase3: "Diferentes tipos de reserva con lógica de precio específica.",
    phase4Title: "Fase 04 — Reglas Componibles",
    phase4: "Modificadores dinámicos, reglas encadenadas e interacciones complejas."
  },

  criteria: {
    title: "Criterios de evaluación",
    p1: "Durante el experimento cada arquitectura se evalúa observando cómo evoluciona el diseño a medida que aumenta la complejidad.",
    items: [
      "Número de clases",
      "Líneas de código",
      "Complejidad estructural",
      "Facilidad para introducir nuevas reglas de negocio",
      "Dificultad de testing",
      "Claridad del modelo de dominio"
    ]
  },

  philosophy: {
    title: "Filosofía arquitectónica",
    p1: "Las arquitecturas no son intrínsecamente buenas o malas.",
    p2: "Son adecuadas o inadecuadas dependiendo de la complejidad del dominio, su evolución prevista y el coste de mantenimiento a largo plazo."
  },

  purpose: {
    title: "Propósito del proyecto",
    p1: "Este proyecto pretende ser una exploración educativa sobre diseño de software y toma de decisiones arquitectónicas, proporcionando un entorno controlado para observar cómo distintas estrategias responden al crecimiento de la complejidad del negocio."
  }
};