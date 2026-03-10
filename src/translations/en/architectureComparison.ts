export const architectureComparison = {
  back: "Back to projects",

  header: {
    title: "Architecture Comparison — Reservation System",
    description:
      "A practical experiment exploring how different architectural approaches respond to increasing domain complexity."
  },

  goal: {
    title: "Project Goal",
    p1: "This project is a practical laboratory designed to compare different architectural styles applied to the same functional domain.",
    p2: "The objective is not to demonstrate that one architecture is superior to another, but to analyse how each approach behaves as business complexity increases."
  },

  evaluation: {
    title: "What is evaluated",
    items: [
      "Structural complexity",
      "Cognitive complexity",
      "Testability",
      "Coupling level",
      "Scalability of the design",
      "Evolution capacity",
      "Cost of change when adding new rules"
    ]
  },

  domain: {
    title: "Common Domain",
    p1: "All architectures implement the same domain: a multi-product reservation system with progressively more complex business rules.",
    items: [
      "Products reservable by date ranges",
      "Optional extras (fixed or per-night)",
      "Total price calculation",
      "Progressively more complex business rules"
    ]
  },

  architectures: {
    title: "Architectures Compared",
    a01: {
      name: "A01 — Monolithic Eloquent",
      summary: "Pure Active Record approach using Eloquent directly.",
      description: "Fast to develop but tightly coupled to the framework. Complexity grows rapidly as domain rules increase."
    },
    a02: {
      name: "A02 — Repository Pattern",
      summary: "Separation between controller, service layer and repository abstraction.",
      description: "Introduces dependency inversion and improves testability while keeping a relatively simple domain model."
    },
    a03: {
      name: "A03 — Strategy + Polymorphism",
      summary: "Reservation behaviour varies depending on reservation type.",
      description: "Encapsulates business rules using polymorphism and strategy objects, making the domain model more expressive."
    },
    a04: {
      name: "A04 — Decorator Domain",
      summary: "Behaviour is composed dynamically through decorators.",
      description: "Applies the Open/Closed principle allowing rules and modifiers to be added without modifying existing logic."
    }
  },

  phases: {
    title: "Evolution Phases",
    phase1Title: "Phase 01 — Base Calculation",
    phase1: "Base price, extras and total calculation.",
    phase2Title: "Phase 02 — Conditional Rules",
    phase2: "Volume discounts, promotions and cross-rule validations.",
    phase3Title: "Phase 03 — Polymorphic Behaviour",
    phase3: "Different reservation types with distinct pricing logic.",
    phase4Title: "Phase 04 — Composable Rules",
    phase4: "Dynamic modifiers, chained rules and complex interactions."
  },

  criteria: {
    title: "Evaluation Criteria",
    p1: "During the experiment each architecture is evaluated based on how the design evolves when complexity increases.",
    items: [
      "Number of classes",
      "Lines of code",
      "Structural complexity",
      "Ease of introducing new business rules",
      "Testing difficulty",
      "Clarity of the domain model"
    ]
  },

  philosophy: {
    title: "Architectural Philosophy",
    p1: "Architectures are not inherently good or bad.",
    p2: "They are appropriate or inappropriate depending on the domain complexity, expected evolution and long-term maintenance cost."
  },

  purpose: {
    title: "Purpose of the Project",
    p1: "This project is intended as an educational exploration of software design and architectural decision-making. It provides a controlled environment to observe how different design strategies respond to growing business complexity."
  }
};