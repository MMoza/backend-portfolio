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
    title: "Architectures Compared"
  },

  phases: {
    title: "Evolution Phases",
    phase1: "Base price, extras and total calculation.",
    phase2: "Volume discounts, promotions and cross-rule validations.",
    phase3: "Different reservation types with distinct pricing logic.",
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