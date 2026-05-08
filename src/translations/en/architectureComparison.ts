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
    quadrant: {
      title: "Architecture Trade-off Map",
      caption: "Where does each architecture live in the simplicity vs fragility space? The ideal is bottom-left (simple AND robust), but reality forces trade-offs."
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
    backToComparison: "← Back to Comparison",
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
      serviceLayer: "Service Layer (lines)",
      phase01: "Phase 01",
      phase02: "Phase 02",
      phase03: "Phase 03",
      phase04: "Phase 04"
    },
    conclusion: "Conclusion",
    source: "View Source on GitHub",
    exploreCode: "Explore the Code",
    metrics_phase_01: "Base Calculation Phase",
    metrics_phase_02: "Conditional Rules Phase",
    metrics_phase_03: "Polymorphic Behavior Phase",
    metrics_phase_04: "Composable Rules Phase",
    
    // A01 - Monolithic Eloquent
    a01: {
      title: "A01 — Monolithic Eloquent",
      subtitle: "Direct ORM usage with business logic in models and controllers",
      patternValue: "Active Record / Monolithic",
      philosophyValue: "Embrace ORM as the primary abstraction. Fast iteration, minimal boilerplate.",
      description: "A01 uses Laravel Eloquent models directly in the controller layer. Business logic resides in model methods and controller actions. This approach prioritizes rapid development over long-term maintainability.",
      strengths: {
        header: "Strengths:",
        items: [
          "Minimal setup; start coding immediately",
          "Leverage Eloquent's expressive query builder",
          "Quick to add simple business logic",
          "No abstraction overhead"
        ]
      },
      weaknesses: {
        header: "Weaknesses:",
        items: [
          "Tight coupling to the database layer",
          "Logic scattered across models and controllers",
          "Difficult to test without a database",
          "Complexity grows exponentially with domain rules",
          "Hard-coded business rules are brittle"
        ]
      },
      warning: {
        label: "Warning",
        message: "Controller grew 122% (83 → 184 lines). All complexity concentrated in a single method handling 13 distinct responsibilities."
      },
      metrics: {
        totalFiles: { label: "Total Files", value: "7", note: "No growth across phases" },
        totalLines: { label: "Total Lines of Code", value: "466", note: "+114% growth P01→P04" },
        controllerSize: { label: "Controller Size (Phase 04)", value: "184 lines", note: "+101 lines from Phase 01" },
        testability: { label: "Testability Score", value: "Low", note: "Requires database mocking" }
      },
      conclusion: {
        bold: "Simplicity has exponential cost.",
        paragraphs: [
          "A01 is fastest to start but becomes unwieldy as domain complexity grows. The controller handles multiple responsibilities with hard-coded business logic. Early booking discounts are parsed using string manipulation (str_starts_with + explode), creating fragile, difficult-to-maintain code.",
          "By Phase 04, the single controller method has become impossible to test in isolation, and adding new pricing rules requires careful modifications to avoid breaking existing logic."
        ]
      },
      whenToUse: {
        title: "✓ When to Use A01",
        items: [
          "Prototype or proof-of-concept with stable, simple logic",
          "Single developer, small team, short project timeline",
          "When you're confident domain complexity will not grow significantly"
        ]
      }
    },
    
    // A02 - Repository Pattern
    a02: {
      title: "A02 — Repository Pattern",
      subtitle: "Service and Repository layers separate controllers from data access",
      patternValue: "Service + Repository",
      philosophyValue: "Invert dependencies, keep controllers thin, abstract data access.",
      description: "A02 introduces a service layer and repository pattern. Controllers delegate to services, services contain business logic, and repositories abstract data access. This creates clear separation of concerns and improves testability.",
      strengths: {
        header: "Strengths:",
        items: [
          "Controllers remain thin (30 lines) across all phases",
          "Dependency inversion through interfaces",
          "Services are easier to test with mock repositories",
          "Clear separation between infrastructure and logic",
          "Good balance between structure and pragmatism"
        ]
      },
      weaknesses: {
        header: "Weaknesses:",
        items: [
          "All complexity migrates to 'God Service' (172 lines)",
          "Service still coupled to business logic implementation details",
          "No reduction in algorithmic complexity",
          "Adding new pricing rules still requires modifying the service",
          "Service layer can become a catch-all for logic"
        ]
      },
      warning: {
        label: "God Service Pattern",
        message: "Controller stays thin (30 lines) but service grew to 172 lines handling all pricing logic. Repository Pattern decouples data access but doesn't reduce algorithmic complexity."
      },
      metrics: {
        totalFiles: { label: "Total Files", value: "10", note: "Stable across phases" },
        totalLines: { label: "Total Lines of Code", value: "587", note: "+118% growth P01→P04" },
        controllerSize: { label: "Controller Size (Phase 04)", value: "30 lines", note: "+1 line from Phase 01" },
        testability: { label: "Testability Score", value: "Medium", note: "Services testable with mocks" }
      },
      conclusion: {
        bold: "Repository Pattern solves the wrong problem.",
        paragraphs: [
          "While it decouples data access (good!), it doesn't address the core issue: algorithmic complexity. All pricing logic still lives in one 'God Service' that handles every pricing scenario. Adding new rules still requires modifying the service and understanding its entire logic flow.",
          "A02 is better than A01, but it's a tactical improvement that doesn't tackle the structural problem of growing domain complexity."
        ]
      },
      whenToUse: {
        title: "✓ When to Use A02",
        items: [
          "You need testability but domain logic is still relatively simple",
          "Team benefits from clear separation of concerns",
          "Stable domain with infrequent business rule changes",
          "Good stepping stone between A01 and more complex patterns"
        ]
      }
    },
    
    // A03 - Strategy + Polymorphism
    a03: {
      title: "A03 — Strategy + Polymorphism",
      subtitle: "Encapsulate behaviors through polymorphic strategy objects",
      patternValue: "Strategy Pattern + Polymorphism",
      philosophyValue: "Encapsulate varying behaviors. Each strategy type implements its own pricing rules.",
      description: "A03 uses the Strategy Pattern to encapsulate different pricing behaviors. Each reservation type (Hotel, Event, etc.) has its own Strategy class implementing pricing logic. This makes the domain model more expressive and aligns code structure with business concepts.",
      strengths: {
        header: "Strengths:",
        items: [
          "Clear mapping between business types and code",
          "Easy to test individual strategies in isolation",
          "New reservation types require new strategy classes, not modifications",
          "Good balance between structure and complexity",
          "Controllers and services remain thin (30-32 lines)"
        ]
      },
      weaknesses: {
        header: "Weaknesses:",
        items: [
          "More files (14) than simpler approaches",
          "Phase04PricingStrategy duplicates logic from BasicPricingStrategy",
          "Creating a new phase creates a new strategy duplicating prior logic",
          "Needs better refactoring to handle shared behavior between strategies",
          "Still requires understanding strategy hierarchy"
        ]
      },
      warning: {
        label: "Strategy Duplication",
        message: "Phase04PricingStrategy duplicates logic from BasicPricingStrategy to add 3 new methods. Shows the pattern works but needs refactoring for phase-based evolution."
      },
      metrics: {
        totalFiles: { label: "Total Files", value: "14", note: "Stable across phases" },
        totalLines: { label: "Total Lines of Code", value: "775", note: "+109% growth P01→P04" },
        controllerSize: { label: "Controller Size (Phase 04)", value: "32 lines", note: "+1 line from Phase 01" },
        testability: { label: "Testability Score", value: "Good", note: "Strategies are testable units" }
      },
      conclusion: {
        bold: "Good balance with room for refinement.",
        paragraphs: [
          "A03 strikes a solid middle ground. Controllers stay thin, strategies are cohesive and testable, and the domain model clearly expresses business intent. However, it shows the risk of strategy duplication: adding a new phase requires copying prior strategy logic and extending it.",
          "With better refactoring (composition over inheritance, shared trait methods), this pattern scales much better. It's an excellent choice when you have distinct product types with varying behaviors."
        ]
      },
      whenToUse: {
        title: "✓ When to Use A03",
        items: [
          "Product types or contexts have different calculation rules",
          "Business domains map naturally to different strategies",
          "You want good testability with clear behavior encapsulation",
          "Teams benefit from seeing strategy-to-business mapping"
        ]
      }
    },
    
    // A04 - Decorator Domain
    a04: {
      title: "A04 — Decorator Domain",
      subtitle: "Compose behaviors dynamically through decorators without modification",
      patternValue: "Builder + Decorator Pattern",
      philosophyValue: "Open/Closed Principle. Add behavior through composition, never modification.",
      description: "A04 applies the Decorator Pattern with a Builder to compose pricing rules dynamically. Each pricing rule (discount, tax, surcharge) is a separate decorator wrapping the previous one. New rules require new decorator files, not modification of existing code.",
      strengths: {
        header: "Strengths:",
        items: [
          "Open/Closed Principle: extend through composition, not modification",
          "Each decorator is a single responsibility: apply one rule",
          "Pure domain logic, highly testable without database",
          "Scales horizontally: new rules = new files, existing code untouched",
          "Phase 05 would barely require changes to existing code",
          "Chainable rules allow complex pricing scenarios"
        ]
      },
      weaknesses: {
        header: "Weaknesses:",
        items: [
          "Highest initial cost (22 files, 1139 lines in Phase 04)",
          "Steep learning curve for decorator composition concept",
          "Debugging can be complex: decorators are wrapped inside each other",
          "Builder configuration must be precise to get correct rule order",
          "Over-engineering for simple, stable domains"
        ]
      },
      warning: {
        label: "Horizontal Scalability",
        message: "Controller never changes (32 lines). New files added (+9) but existing code untouched. Each decorator is a focused, testable unit. Higher initial cost pays dividends as domain evolves."
      },
      metrics: {
        totalFiles: { label: "Total Files (Phase 04)", value: "22", note: "+9 files, all new decorators" },
        totalLines: { label: "Total Lines of Code", value: "1139", note: "+169% growth P01→P04" },
        controllerSize: { label: "Controller Size (All Phases)", value: "32 lines", note: "Zero growth across all phases" },
        testability: { label: "Testability Score", value: "Excellent", note: "Pure domain, no DB needed" }
      },
      conclusion: {
        bold: "Horizontal scalability at a cost.",
        paragraphs: [
          "A04 is the most sophisticated approach. It delivers on the promise of the Open/Closed Principle: the system grows through new files, not modifications. Each decorator is focused, testable, and independent. Phase 05 would add a few new decorators without touching existing code.",
          "The trade-off is significant upfront complexity: 22 files and 1139 lines for Phase 04. This investment is justified when rules change frequently, but overkill for stable domains. This is the pattern to reach for when you know your domain will evolve rapidly and needs protection against fragility."
        ]
      },
      whenToUse: {
        title: "✓ When to Use A04",
        items: [
          "Pricing rules change frequently and unpredictably",
          "Business expects long-term maintenance and evolution",
          "Team has experience with design patterns and composition",
          "Each rule should be independently testable and deployable",
          "You need zero-modification extensibility"
        ]
      }
    }
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
