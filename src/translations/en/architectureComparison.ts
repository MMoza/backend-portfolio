export const architectureComparison = {
  back: "Back to projects",

  hero: {
    title: "Architecture Comparison: Reservation System",
    subtitle: "4 architectures. 4 phases of growing complexity. Same domain.",
    badges: ["PHP 8.2", "Laravel 12", "4 Architectures", "4 Phases", "78 Tests", "506 Assertions"],
    cta: "View on GitHub"
  },

  experiment: {
    title: "The Experiment",
    description: "This is a practical laboratory exploring how different architectural approaches respond to increasing domain complexity. The same business logic is implemented in four distinct ways, each tackling the same problem with different design philosophies.",
    question: "How does your architecture behave when the domain becomes complex?"
  },

  architectures: {
    title: "Architectures Compared",
    a01: {
      id: "a01",
      name: "A01 — Monolithic Eloquent",
      pattern: "Active Record / Monolithic",
      philosophy: "Direct ORM usage, logic in models and controllers.",
      strength: "Fastest to start, minimal boilerplate.",
      link: "View Details"
    },
    a02: {
      id: "a02",
      name: "A02 — Repository Pattern",
      pattern: "Service + Repository",
      philosophy: "Separation of concerns with service layer.",
      strength: "Better testability through dependency injection.",
      link: "View Details"
    },
    a03: {
      id: "a03",
      name: "A03 — Strategy Polymorphism",
      pattern: "Strategy Pattern + Polymorphism",
      philosophy: "Encapsulate behaviors through object polymorphism.",
      strength: "More expressive domain model.",
      link: "View Details"
    },
    a04: {
      id: "a04",
      name: "A04 — Decorator Domain",
      pattern: "Builder + Decorator Pattern",
      philosophy: "Compose behaviors dynamically without modification.",
      strength: "Scales horizontally with new rules.",
      link: "View Details"
    }
  },

  domain: {
    title: "Domain & Endpoints",
    description: "Hotel Reservation System with progressive business rule complexity across 4 phases.",
    endpointsTitle: "Shared Endpoints",
    endpoints: [
      {
        method: "POST",
        path: "/api/{arch}/v{phase}/reservation",
        description: "Create reservation"
      },
      {
        method: "GET",
        path: "/api/{arch}/v{phase}/reservation/{id}",
        description: "Get reservation"
      }
    ],
    prefixesTitle: "URL Prefixes by Architecture",
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
        arch: "Strategy + Polymorphism"
      },
      {
        path: "/api/arch_04/",
        arch: "Decorator Domain"
      }
    ]
  },

  phases: {
    title: "Evolution Phases",
    description: "Domain complexity increases progressively across 4 phases",
    phase01: {
      title: "Phase 01: Base Calculation",
      description: "Price per night, per_night/per_stay extras"
    },
    phase02: {
      title: "Phase 02: Conditional Rules",
      description: "Volume discounts (7/14 nights), combined promo, minimum price, spa validation"
    },
    phase03: {
      title: "Phase 03: Polymorphic Behavior",
      description: "Hotel/event taxes, commissions, 3-night event restriction"
    },
    phase04: {
      title: "Phase 04: Combinable Rules",
      description: "Early booking (30/60 days), seasonal surcharge (high/low season)"
    }
  },

  charts: {
    lineOfCode: {
      title: "Lines of Code by Phase",
      caption: "A04 diverges significantly in P04, but the cost is in reusable abstractions."
    },
    controllerSize: {
      title: "Controller Size by Phase",
      caption: "A01's controller grew 122% while A02/A03/A04 remained unchanged."
    },
    accumulatedGrowth: {
      title: "Accumulated Growth: Phase 01 → Phase 04",
      caption: "A01 looks cheap but concentrates all cost in one fragile point."
    }
  },

  rankings: {
    title: "Final Rankings",
    criteria: {
      simplicity: {
        label: "Simplicity",
        gold: "A01 (6 files)",
        silver: "A02 (10)",
        bronze: "A03 (14)",
        worst: "A04 (22)"
      },
      thinController: {
        label: "Thin Controller",
        gold: "A02/A03/A04 (30-32)",
        silver: "—",
        bronze: "—",
        worst: "A01 (184)"
      },
      thinService: {
        label: "Thin Service",
        gold: "A04 (99+152)",
        silver: "A03 (123)",
        bronze: "A02 (172)",
        worst: "A01 (184)"
      },
      testability: {
        label: "Testability",
        gold: "A04 (pure domain)",
        silver: "A03 (strategy)",
        bronze: "A02 (service)",
        worst: "A01 (needs DB)"
      },
      extensibility: {
        label: "Extensibility",
        gold: "A04 (new Decorator)",
        silver: "A03 (new Strategy)",
        bronze: "A02 (modify service)",
        worst: "A01 (modify controller)"
      },
      fragility: {
        label: "Fragility",
        gold: "A04 (low)",
        silver: "A03 (medium)",
        bronze: "A02 (medium-high)",
        worst: "A01 (high)"
      }
    }
  },

  useCases: {
    title: "When to Use Each",
    description: "Architecture selection based on your domain characteristics",
    scenarios: [
      {
        condition: "Stable domain, no changing rules",
        recommendation: "A01 or A02"
      },
      {
        condition: "Product types with different formulas",
        recommendation: "A03"
      },
      {
        condition: "Pricing rules that change frequently",
        recommendation: "A04"
      }
    ]
  },

  conclusions: {
    title: "Key Conclusions",
    a01: {
      title: "A01: Simplicity has exponential cost",
      description: "Controller grew from 83 to 184 lines in a single method handling 13 responsibilities. Early booking discount amount is parsed from the discount_reason string (str_starts_with + explode) — a fragile hack."
    },
    a02: {
      title: "A02: God Service problem",
      description: "Controller stays at 30 lines but all complexity moved to a 172-line 'God Service'. Repository Pattern decouples infrastructure but doesn't reduce algorithmic complexity."
    },
    a03: {
      title: "A03: Strategy duplication",
      description: "Phase04PricingStrategy duplicates all logic from BasicPricingStrategy just to add 3 methods. Good balance but needs refactoring to avoid strategy duplication per phase."
    },
    a04: {
      title: "A04: Horizontal scalability",
      description: "Highest initial cost (22 files, 1139 lines) but scales horizontally: each new rule is a new Decorator file, not modified code. Builder + Decorator means Phase 05 barely touches existing code."
    }
  },

  cta: {
    title: "Ready to dive deeper?",
    description: "Explore each architecture implementation",
    button: "View Architecture Details"
  },

  // Individual architecture pages
  architectureDetail: {
    back: "Back to Comparison",
    pattern: "Pattern",
    philosophy: "Philosophy",
    description: "Description",
    evolution: "Evolution Across Phases",
    metrics: "Key Metrics",
    metricsTable: {
      phase: "Phase",
      files: "Files",
      lines: "Lines of Code",
      controller: "Controller (lines)",
      serviceLayer: "Service Layer (lines)"
    },
    conclusion: "Conclusion",
    source: "View Source on GitHub",
    metrics_phase_01: "Base Calculation Phase",
    metrics_phase_02: "Conditional Rules Phase",
    metrics_phase_03: "Polymorphic Behavior Phase",
    metrics_phase_04: "Composable Rules Phase"
  },

  // Conclusions page
  conclusionPage: {
    title: "Conclusions & Rankings",
    backLabel: "Back to Comparison",
    detailed: "Detailed Analysis",
    expandConclusion: "Expand",
    collapseConclusion: "Collapse",
    seeArchitectureDetails: "See detailed analysis",
    exploreArchitectures: "Explore individual architectures to see implementation details."
  }
};
