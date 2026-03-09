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
    title: "Arquitecturas comparadas"
  },

  phases: {
    title: "Fases de evolución",
    phase1: "Precio base, extras y cálculo del total.",
    phase2: "Descuentos por volumen, promociones y validaciones entre reglas.",
    phase3: "Diferentes tipos de reserva con lógica de precio específica.",
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