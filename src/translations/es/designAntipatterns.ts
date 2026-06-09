export const designAntipatterns = {
  back: "Volver a proyectos",

  header: {
    label: "Análisis de Diseño",
    title: "Antipatrones de Diseño en Código Legacy",
    description:
      "Un catálogo exhaustivo de antipatrones de diseño observados en codebases PHP legacy del sector e-commerce, con estrategias de identificación y estrangulamiento."
  },

  highlights: {
    categories: {
      title: "20 Categorías",
      description:
        "Antipatrones organizados en dimensiones de arquitectura, seguridad, base de datos, rendimiento y socio-técnicas."
    },
    antipatterns: {
      title: "100+ Antipatrones",
      description:
        "Documentación detallada de cada antipatrón con ejemplos ilustrativos genéricos."
    },
    approach: {
      title: "Estrategia de Estrangulamiento",
      description:
        "Cada antipatrón incluye guía sobre cómo identificarlo y eliminarlo gradualmente de sistemas legacy."
    }
  },

  intro: {
    p1: "Las bases de código legacy acumulan antipatrones de diseño a lo largo de años de cambios incrementales, rotación de equipos y presión para entregar funcionalidades rápidamente.",
    p2: "Este proyecto documenta antipatrones observados en múltiples codebases PHP legacy del sector e-commerce. Todos los ejemplos de código son genéricos e inventados, inspirados en patrones reales de la industria. Ningún código pertenece a un sistema real."
  },

  purpose_section: {
    title: "Propósito",
    p1: "El objetivo es identificar, documentar y aprender cómo estrangular cada antipatrón con ejemplos ilustrativos. Este catálogo sirve como referencia para desarrolladores que trabajan con sistemas legacy.",
    items: [
      "Reconocer antipatrones en codebases existentes",
      "Entender las causas raíz y consecuencias de cada antipatrón",
      "Aplicar estrategias de estrangulamiento para mejorar gradualmente la calidad del código",
      "Prevenir la introducción de nuevos antipatrones en proyectos greenfield"
    ]
  },

  categories_section: {
    title: "Categorías de Antipatrones",
    intro: "Los antipatrones están organizados en las siguientes categorías:",

    structure: {
      title: "A. Estructura y Arquitectura",
      items: [
        "God Class / Clase Dios",
        "God Method / Método Dios",
        "Inheritance Abuse / Abuso de Herencia",
        "Constructor Heavy / Constructor Sobrecargado",
        "High Cognitive Load Architecture",
        "Leaky Abstractions / Abstracciones Permeables",
        "Hardcoded Infrastructure",
        "Infrastructure Leakage"
      ]
    },

    state: {
      title: "B. Estado y Acoplamiento",
      items: [
        "Mutable Shared State / Estado Compartido Mutable",
        "Action at Distance / Acción a Distancia",
        "Temporal Coupling / Acoplamiento Temporal",
        "Implicit Workflow Coupling",
        "Service Locator by Object State",
        "Hidden Side Effects / Efectos Secundarios Ocultos",
        "Recursive Service Instantiation",
        "Environment Logic Scattered"
      ]
    },

    modeling: {
      title: "C. Modelado de Datos (PHP)",
      items: [
        "Primitive Obsession / Obsesión por Primitivos",
        "Array-Based Domain Modeling",
        "stdClass como Modelo Universal",
        "Anemic Domain Model / Modelo de Dominio Anémico",
        "Stringly Typed Architecture",
        "Boolean / Integer Flags",
        "Data Clumps"
      ]
    },

    security: {
      title: "D. Seguridad",
      items: [
        "SQL Injection",
        "Security Anti-Patterns",
        "SSL Verification Disabled"
      ]
    },

    errors: {
      title: "E. Manejo de Errores",
      items: [
        "Silent Catch / Captura Silenciosa",
        "Exception Handling as Business Logic",
        "Fear-Driven Logging"
      ]
    },

    code: {
      title: "F. Código y Mantenibilidad",
      items: [
        "Dead Code / Fossil Code",
        "Mixed Language Naming",
        "Magic Numbers / Números Mágicos",
        "DRY Violations / Violaciones DRY",
        "Long Parameter List"
      ]
    },

    presentation: {
      title: "G. Presentación y Comunicación",
      items: [
        "Presentation Mixed with Domain",
        "Output Format Confusion",
        "Action-Based Routing (Numerical Actions)",
        "Server-Rendered HTML over AJAX"
      ]
    },

    database: {
      title: "H. Database Design",
      items: [
        "Magic Values as Type Discriminators",
        "Cross-Schema Queries Without Abstraction",
        "Duplicate Table Pairs (Operator vs Particular)",
        "Inconsistent Column Naming Across Schemas",
        "Redundant / Duplicated Columns",
        "JSON / Serialized Data in Columns",
        "N+1 Query Patterns in Loops",
        "SELECT * Anti-Pattern",
        "Missing Indexes Evidence",
        "UNION Without ALL",
        "Foreign Keys Disabled for Operations",
        "Soft Deletes Without Consistency",
        "Hardcoded Business Logic in SQL",
        "Polymorphic Discriminator Columns",
        "LIKE with Leading Wildcards",
        "Wide Table / Tabla Ancha",
        "Repeating Groups (1NF Violation)",
        "DOUBLE for Money",
        "VARCHAR for Numeric Values",
        "Zero Date Default",
        "Charset Obsoleto (latin1)",
        "Over-Indexing",
        "Missing Foreign Keys",
        "Trigger-Based Denormalization",
        "Catch-All Varchar Column",
        "Composite Primary Key Excesivo",
        "Truncated Column Comments"
      ]
    },

    naming: {
      title: "I. Naming",
      items: [
        "Mixed Language Naming (Spanglish)",
        "Inconsistent Prefix Conventions",
        "Ambiguous Abbreviations",
        "Inconsistent Verb Conventions",
        "Hungarian Notation Variants",
        "Schema-Level Naming Inconsistency",
        "Table Naming: Singular vs Plural",
        "Cryptic Variable Names",
        "Action Numbers Instead of Names",
        "Cryptic Column Abbreviations",
        "Numeric Suffix Columns",
        "Typo in Comments"
      ]
    },

    integrations: {
      title: "J. Integraciones y APIs",
      items: [
        "Retry Storm / Reintentos Descontrolados",
        "No Idempotency in External Operations",
        "API Response Shape Coupling",
        "Vendor SDK Domain Leakage"
      ]
    },

    concurrency: {
      title: "K. Concurrencia y Consistencia",
      items: [
        "Check-Then-Act Race Condition",
        "Transaction Script Without Transactions",
        "Distributed Transaction Illusion"
      ]
    },

    performance: {
      title: "L. Performance y Escalabilidad",
      items: [
        "Cache Aside Chaos",
        "Premature Micro-Optimization",
        "Batch Processing via Memory Explosion"
      ]
    },

    observability: {
      title: "M. Observabilidad y Operación",
      items: [
        "Log-and-Pray",
        "Monitoring Blind Spots",
        "Configuration by Database"
      ]
    },

    framework: {
      title: "N. Framework Casero Legacy",
      items: [
        "Homemade Framework Syndrome",
        "Copy-Paste Inheritance Framework"
      ]
    },

    deployment: {
      title: "O. Deployment y Entornos",
      items: [
        "Snowflake Server",
        "Environment Drift",
        "Feature Flags by Commenting Code"
      ]
    },

    testing: {
      title: "P. Testing Legacy",
      items: [
        "Integration Test as Unit Test",
        "Mock Everything Syndrome",
        "Golden Master Dependency"
      ]
    },

    domain: {
      title: "Q. Dominio y Negocio",
      items: [
        "Business Rules by Convention",
        "Zombie Features"
      ]
    },

    sociotechnical: {
      title: "R. Legacy Socio-Technical Patterns",
      items: [
        "Fear-Driven Development",
        "Knowledge Silos",
        "Bus Factor One",
        "Tribal Knowledge Architecture",
        "Ticket-Driven Architecture",
        "Copy-Paste Onboarding"
      ]
    }
  },

  methodology_section: {
    title: "Metodología",
    p1: "Cada antipatrón será abordado individualmente con una estructura consistente que incluye criterios de identificación, causas raíz, consecuencias y estrategias de estrangulamiento.",
    p2: "El catálogo se expandirá progresivamente con análisis detallado de cada antipatrón, incluyendo ejemplos de código genéricos que ilustran el problema y su resolución."
  },

  next_steps_section: {
    title: "Próximos Pasos",
    p1: "Los antipatrones en este catálogo serán abordados uno a uno en iteraciones posteriores. Cada entrada incluirá:",
    items: [
      "Definición clara y criterios de identificación",
      "Ejemplos de código genéricos ilustrando el antipatrón",
      "Análisis de causas raíz y factores contribuyentes",
      "Consecuencias e impacto en la base de código",
      "Estrategia de estrangulamiento con guía paso a paso",
      "Ejemplos de código refactorizado mostrando la solución"
    ]
  }
};
