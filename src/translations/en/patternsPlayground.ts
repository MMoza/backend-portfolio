export const patternsPlayground = {
  back: "Back to projects",

  header: {
    label: "Architecture Playground",
    title: "Patterns Playground",
    description:
      "A practical project designed to explore and understand common software design patterns through real implementations in Laravel."
  },

  highlights: {
    architecture: {
      title: "Architecture Focus",
      description:
        "Exploring structural and behavioral design patterns used in backend systems."
    },
    laravel: {
      title: "Laravel Implementation",
      description:
        "Patterns implemented within a real Laravel application environment."
    },
    learning: {
      title: "Learning by Building",
      description:
        "Understanding design patterns through concrete implementations and experiments."
    }
  },

  intro: {
    p1: "Design patterns are often easier to understand conceptually than to apply correctly in real-world systems.",
    p2: "This project acts as a sandbox where different design patterns can be implemented, tested and analyzed in isolation while still remaining grounded in a realistic Laravel application structure."
  },

  goals_section: {
    title: "Project Goals",
    p1: "The purpose of this project is to explore how different patterns help structure backend systems and how they affect maintainability, extensibility and readability of the codebase.",
    items: [
      "Understand the intent behind common design patterns",
      "Analyze their impact on code organization",
      "Evaluate when patterns simplify complexity and when they introduce unnecessary abstraction",
      "Experiment with different approaches to solve the same problem"
    ]
  },

  patterns_section: {
    title: "Patterns Implemented",
    intro: "The playground will progressively include implementations of different categories of design patterns.",
    creational: {
      title: "Creational Patterns",
      items: ["Factory", "Abstract Factory", "Builder"]
    },
    structural: {
      title: "Structural Patterns",
      items: ["Decorator", "Adapter", "Facade"]
    },
    behavioral: {
      title: "Behavioral Patterns",
      items: ["Strategy", "Observer", "Command"]
    }
  },

  why_laravel_section: {
    title: "Why Laravel",
    p1: "Laravel provides a good environment to experiment with design patterns because it already incorporates several of them in its core architecture.",
    p2: "Concepts such as service containers, facades, event systems and middleware pipelines offer a natural playground to observe how patterns interact with a real framework ecosystem.",
    p3: "By building small isolated examples within a Laravel application, the project allows experimentation without the complexity of a large production codebase."
  },

  learning_approach_section: {
    title: "Learning Approach",
    p1: "Each pattern implementation includes a small domain example that demonstrates when the pattern becomes useful and what trade-offs it introduces.",
    p2: "The focus is not only on implementing patterns, but also on understanding the reasoning behind them and identifying scenarios where simpler solutions might be preferable."
  }
};
