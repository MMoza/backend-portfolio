export const apiBenchmark = {
  back: "Back to projects",

  header: {
    label: "Architecture Experiment",
    title: "PHP API Benchmark",
    description:
      "Experimental project comparing how different PHP frameworks behave when implementing the same small REST API."
  },

  highlights: {
    implementations: {
      title: "3 Implementations",
      description: "Plain PHP, Laravel and Symfony implementations."
    },
    domain: {
      title: "Single Domain",
      description: "The same entity and rules implemented in all frameworks."
    },
    focus: {
      title: "Architecture Focus",
      description: "Comparing complexity, DX and evolution capacity."
    }
  },

  intro: {
    p1: "This project explores how different architectural approaches affect the development and evolution of a small backend API.",
    p2: "The goal is not to determine which framework is \"better\", but to analyze how each approach handles complexity, structure and developer experience when solving the same problem."
  },

  domain_section: {
    title: "Domain Model",
    p1: "The benchmark is built around a very small domain: a habit tracking API. The system allows users to define personal habits and track their completion progress over time.",
    items: [
      "Create habits",
      "List existing habits",
      "Update habit configuration",
      "Register habit completion"
    ]
  },

  entity_section: {
    title: "Entity: Habit",
    description: "Each habit represents a recurring activity the user wants to track.",
    fields: "id name description frequency (daily / weekly) target_count completed_count created_at"
  },

  implementations_section: {
    title: "Framework Implementations",
    plain_php: "Minimal implementation without a framework, focusing on explicit routing and manual dependency management.",
    laravel: "Implementation using Eloquent models, controllers and Laravel's typical service architecture.",
    symfony: "Implementation using Symfony controllers, dependency injection and Doctrine ORM."
  },

  criteria_section: {
    title: "Evaluation Criteria",
    intro: "Each implementation will be evaluated across several dimensions:",
    items: [
      "Structural complexity",
      "Developer experience during implementation",
      "Ease of adding new features",
      "Testability of the system"
    ]
  },

  goal_section: {
    title: "Project Goal",
    p1: "The purpose of this experiment is to better understand the trade-offs between simplicity and abstraction in backend development.",
    p2: "By implementing the same API with different architectural approaches, it becomes easier to evaluate how frameworks influence the evolution of a codebase as complexity grows."
  }
};
