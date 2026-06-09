export const laravelDDD = {
  back: "Volver a proyectos",

  header: {
    label: "Paquete Open Source",
    title: "Laravel DDD Starter Kit",
    description:
      "Un paquete Composer que transforma un proyecto Laravel nuevo en una arquitectura completamente estructurada con Domain-Driven Design."
  },

  highlights: {
    structure: {
      title: "Estructura DDD Completa",
      description: "Organizada por dominios/módulos con clases base."
    },
    commands: {
      title: "12 Comandos Artisan",
      description: "Genera módulos, entidades, servicios y más."
    },
    tests: {
      title: "Tests Automáticos",
      description: "PHPUnit, Pest o ninguno — tests generados con cada comando."
    }
  },

  intro: {
    p1: "Este paquete proporciona una base completa de Domain-Driven Design para proyectos Laravel. Incluye clases base, generadores de código y un instalador interactivo que configura autenticación, módulos de ejemplo, documentación y configuración de tests.",
    p2: "El objetivo es ofrecer a los desarrolladores un punto de partida arquitectónico sólido que siga los principios DDD manteniendo la flexibilidad y facilidad de extensión."
  },

  features_section: {
    title: "Características Principales",
    items: [
      "Estructura DDD Completa — Organizada por dominios/módulos",
      "Clases Base — Entity, ValueObject, Repository, Service",
      "12 Comandos Artisan — Genera módulos, entidades, servicios y más",
      "Instalación Interactiva — Elige autenticación, módulo de ejemplo, docs, paquete de tests y contexto IA",
      "Generación Automática de Tests — PHPUnit, Pest o ninguno",
      "Módulo de Ejemplo — Módulo Users opcional con ejemplos completos",
      "API Ready — Rutas organizadas por dominio",
      "AI Agent Ready — AGENTS.md opcional para contexto de IA",
      "Soporte Laravel 13 y 12 — Funciona con ambas versiones",
      "PHP 8.4+ — Requisitos modernos de PHP"
    ]
  },

  structure_section: {
    title: "Estructura del Proyecto",
    description: "Tras la instalación, tu proyecto sigue una organización DDD limpia:",
    domains: "Domains/ — Lógica de negocio organizada por módulo (Entidades, Repositorios, Servicios, Controladores, Rutas)",
    application: "Application/ — Casos de uso y acciones",
    infrastructure: "Infrastructure/ — Implementaciones externas (repositorios Eloquent, adaptadores HTTP)",
    support: "Support/ — Helpers y utilidades",
    models: "Models/ — Modelos Eloquent sin lógica de negocio",
    routes: "routes/domains/ — Archivos de rutas específicos por dominio",
    tests: "tests/Unit/Domains/ & tests/Feature/Domains/ — Tests generados por módulo"
  },

  commands_section: {
    title: "Comandos Disponibles",
    description: "El paquete incluye 12 comandos Artisan paraAndamiar tu arquitectura DDD:",
    items: [
      "ddd:install — Instalador interactivo de estructura DDD",
      "ddd:make-module — Crear un módulo completo",
      "ddd:make-entity — Crear una entidad con modelo y migración",
      "ddd:make-service — Crear una clase de servicio",
      "ddd:make-repository — Crear interfaz e implementación de repositorio",
      "ddd:make-value-object — Crear un objeto valor",
      "ddd:make-controller — Crear un controlador delgado",
      "ddd:make-request — Crear una petición de formulario",
      "ddd:make-resource — Crear un recurso API",
      "ddd:make-routes — Generar rutas para un módulo",
      "ddd:list — Listar todos los módulos DDD",
      "ddd:test — Ejecutar tests del proyecto"
    ]
  },

  architecture_section: {
    title: "Principios Arquitectónicos",
    entity: {
      title: "Entity",
      description: "Clase base para entidades de dominio. Contiene lógica de negocio relacionada con la propia entidad."
    },
    value_object: {
      title: "Value Object",
      description: "Objetos inmutables que representan valores en tu dominio, con igualdad basada en sus atributos."
    },
    repository: {
      title: "Repository",
      description: "Capa de abstracción entre el dominio y la persistencia de datos. Las interfaces viven en el dominio, las implementaciones en infraestructura."
    },
    service: {
      title: "Service",
      description: "Orquesta operaciones de negocio usando repositorios. Contiene lógica de casos de uso que abarca múltiples entidades."
    },
    controller: {
      title: "Controller",
      description: "Controlador delgado que delega en servicios. Sin lógica de negocio, solo manejo HTTP."
    }
  },

  installation_section: {
    title: "Instalación Rápida",
    steps: [
      "Crea un nuevo proyecto Laravel: composer create-project laravel/laravel my-project",
      "Requiere el paquete: composer require laravel-ddd/starter",
      "Ejecuta el instalador interactivo: php artisan ddd:install",
      "Elige tus preferencias: autenticación, módulo de ejemplo, documentación, paquete de tests y contexto IA"
    ]
  },

  example_section: {
    title: "Ejemplo: Construir un Blog",
    description: "Así crearías un blog con Posts y Comments usando los comandos DDD:",
    steps: [
      "Crea el módulo Posts: php artisan ddd:make-module Posts",
      "Crea la entidad Comment: php artisan ddd:make-entity Comment Posts --migration --model",
      "Crea form requests: php artisan ddd:make-request StorePostRequest Posts",
      "Crea recursos API: php artisan ddd:make-resource PostResource Posts",
      "Actualiza routes/api.php para incluir las rutas del módulo",
      "Ejecuta las migraciones: php artisan migrate"
    ]
  },

  cta_section: {
    title: "¿Listo para construir con DDD?",
    description: "Comienza tu próximo proyecto Laravel con una base sólida de Domain-Driven Design.",
    github: "Ver en GitHub",
    docs: "Leer la Documentación"
  }
};
