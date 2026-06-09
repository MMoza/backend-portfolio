export const laravelDDD = {
  back: "Back to projects",

  header: {
    label: "Open Source Package",
    title: "Laravel DDD Starter Kit",
    description:
      "A Composer package that transforms a fresh Laravel project into a fully structured Domain-Driven Design architecture."
  },

  highlights: {
    structure: {
      title: "Complete DDD Structure",
      description: "Organized by domains/modules with base classes."
    },
    commands: {
      title: "12 Artisan Commands",
      description: "Generate modules, entities, services and more."
    },
    tests: {
      title: "Automatic Tests",
      description: "PHPUnit, Pest or none — tests generated with every command."
    }
  },

  intro: {
    p1: "This package provides a complete Domain-Driven Design foundation for Laravel projects. It includes base classes, code generators and an interactive installer that sets up authentication, sample modules, documentation and test configuration.",
    p2: "The goal is to give developers a solid architectural starting point that follows DDD principles while remaining flexible and easy to extend."
  },

  features_section: {
    title: "Key Features",
    items: [
      "Complete DDD Structure — Organized by domains/modules",
      "Base Classes — Entity, ValueObject, Repository, Service",
      "12 Artisan Commands — Generate modules, entities, services, and more",
      "Interactive Installation — Choose auth, sample module, docs, test package, and AI context",
      "Automatic Test Generation — PHPUnit, Pest, or none",
      "Sample Module — Optional Users module with full examples",
      "API Ready — Routes organized by domain",
      "AI Agent Ready — Optional AGENTS.md for AI context",
      "Laravel 13 & 12 Support — Works with both versions",
      "PHP 8.4+ — Modern PHP requirements"
    ]
  },

  structure_section: {
    title: "Project Structure",
    description: "After installation, your project follows a clean DDD organization:",
    domains: "Domains/ — Business logic organized by module (Entities, Repositories, Services, Controllers, Routes)",
    application: "Application/ — Use cases and actions",
    infrastructure: "Infrastructure/ — External implementations (Eloquent repositories, HTTP adapters)",
    support: "Support/ — Helpers and utilities",
    models: "Models/ — Eloquent models with no business logic",
    routes: "routes/domains/ — Domain-specific route files",
    tests: "tests/Unit/Domains/ & tests/Feature/Domains/ — Generated tests per module"
  },

  commands_section: {
    title: "Available Commands",
    description: "The package includes 12 Artisan commands to scaffold your DDD architecture:",
    items: [
      "ddd:install — Interactive DDD structure installer",
      "ddd:make-module — Create a complete module",
      "ddd:make-entity — Create an entity with model and migration",
      "ddd:make-service — Create a service class",
      "ddd:make-repository — Create repository interface and implementation",
      "ddd:make-value-object — Create a value object",
      "ddd:make-controller — Create a thin controller",
      "ddd:make-request — Create a form request",
      "ddd:make-resource — Create an API resource",
      "ddd:make-routes — Generate routes for a module",
      "ddd:list — List all DDD modules",
      "ddd:test — Run project tests"
    ]
  },

  architecture_section: {
    title: "Architecture Principles",
    entity: {
      title: "Entity",
      description: "Base class for domain entities. Contains business logic related to the entity itself."
    },
    value_object: {
      title: "Value Object",
      description: "Immutable objects representing values in your domain, with equality based on their attributes."
    },
    repository: {
      title: "Repository",
      description: "Abstraction layer between domain and data persistence. Interfaces live in the domain, implementations in infrastructure."
    },
    service: {
      title: "Service",
      description: "Orchestrates business operations using repositories. Contains use-case logic that spans multiple entities."
    },
    controller: {
      title: "Controller",
      description: "Thin controller that delegates to services. No business logic, only HTTP handling."
    }
  },

  installation_section: {
    title: "Quick Installation",
    steps: [
      "Create a new Laravel project: composer create-project laravel/laravel my-project",
      "Require the package: composer require laravel-ddd/starter",
      "Run the interactive installer: php artisan ddd:install",
      "Choose your preferences: authentication, sample module, documentation, test package and AI context"
    ]
  },

  example_section: {
    title: "Example: Building a Blog",
    description: "Here's how you would create a blog with Posts and Comments using the DDD commands:",
    steps: [
      "Create the Posts module: php artisan ddd:make-module Posts",
      "Create the Comment entity: php artisan ddd:make-entity Comment Posts --migration --model",
      "Create form requests: php artisan ddd:make-request StorePostRequest Posts",
      "Create API resources: php artisan ddd:make-resource PostResource Posts",
      "Update routes/api.php to include the module routes",
      "Run migrations: php artisan migrate"
    ]
  },

  cta_section: {
    title: "Ready to build with DDD?",
    description: "Start your next Laravel project with a solid Domain-Driven Design foundation.",
    github: "View on GitHub",
    docs: "Read the Docs"
  }
};
