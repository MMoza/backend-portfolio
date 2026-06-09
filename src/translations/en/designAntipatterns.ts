export const designAntipatterns = {
  back: "Back to projects",

  header: {
    label: "Design Analysis",
    title: "Design Antipatterns in Legacy Code",
    description:
      "A comprehensive catalog of design antipatterns observed in PHP legacy codebases from the e-commerce sector, with strategies for identification and strangulation."
  },

  highlights: {
    categories: {
      title: "20 Categories",
      description:
        "Antipatterns organized across architecture, security, database, performance and socio-technical dimensions."
    },
    antipatterns: {
      title: "100+ Antipatterns",
      description:
        "Detailed documentation of each antipattern with generic illustrative examples."
    },
    approach: {
      title: "Strangulation Strategy",
      description:
        "Each antipattern includes guidance on how to identify and gradually eliminate it from legacy systems."
    }
  },

  intro: {
    p1: "Legacy codebases accumulate design antipatterns over years of incremental changes, team turnover and pressure to deliver features quickly.",
    p2: "This project documents antipatterns observed across multiple PHP legacy codebases in the e-commerce sector. All code examples are generic and invented, inspired by real industry patterns. No code belongs to a real system."
  },

  purpose_section: {
    title: "Purpose",
    p1: "The goal is to identify, document and learn how to strangle each antipattern with illustrative examples. This catalog serves as a reference for developers working with legacy systems.",
    items: [
      "Recognize antipatterns in existing codebases",
      "Understand the root causes and consequences of each antipattern",
      "Apply strangulation strategies to gradually improve code quality",
      "Prevent the introduction of new antipatterns in greenfield projects"
    ]
  },

  categories_section: {
    title: "Antipattern Categories",
    intro: "Antipatterns are organized into the following categories:",

    structure: {
      title: "A. Structure and Architecture",
      items: [
        "God Class",
        "God Method",
        "Inheritance Abuse",
        "Constructor Heavy",
        "High Cognitive Load Architecture",
        "Leaky Abstractions",
        "Hardcoded Infrastructure",
        "Infrastructure Leakage"
      ]
    },

    state: {
      title: "B. State and Coupling",
      items: [
        "Mutable Shared State",
        "Action at Distance",
        "Temporal Coupling",
        "Implicit Workflow Coupling",
        "Service Locator by Object State",
        "Hidden Side Effects",
        "Recursive Service Instantiation",
        "Environment Logic Scattered"
      ]
    },

    modeling: {
      title: "C. Data Modeling (PHP)",
      items: [
        "Primitive Obsession",
        "Array-Based Domain Modeling",
        "stdClass as Universal Model",
        "Anemic Domain Model",
        "Stringly Typed Architecture",
        "Boolean / Integer Flags",
        "Data Clumps"
      ]
    },

    security: {
      title: "D. Security",
      items: [
        "SQL Injection",
        "Security Anti-Patterns",
        "SSL Verification Disabled"
      ]
    },

    errors: {
      title: "E. Error Handling",
      items: [
        "Silent Catch",
        "Exception Handling as Business Logic",
        "Fear-Driven Logging"
      ]
    },

    code: {
      title: "F. Code and Maintainability",
      items: [
        "Dead Code / Fossil Code",
        "Mixed Language Naming",
        "Magic Numbers",
        "DRY Violations",
        "Long Parameter List"
      ]
    },

    presentation: {
      title: "G. Presentation and Communication",
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
        "Duplicate Table Pairs",
        "Inconsistent Column Naming",
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
        "Wide Table",
        "Repeating Groups (1NF Violation)",
        "DOUBLE for Money",
        "VARCHAR for Numeric Values",
        "Zero Date Default",
        "Obsolete Charset (latin1)",
        "Over-Indexing",
        "Missing Foreign Keys",
        "Trigger-Based Denormalization",
        "Catch-All Varchar Column",
        "Excessive Composite Primary Key",
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
      title: "J. Integrations and APIs",
      items: [
        "Retry Storm",
        "No Idempotency in External Operations",
        "API Response Shape Coupling",
        "Vendor SDK Domain Leakage"
      ]
    },

    concurrency: {
      title: "K. Concurrency and Consistency",
      items: [
        "Check-Then-Act Race Condition",
        "Transaction Script Without Transactions",
        "Distributed Transaction Illusion"
      ]
    },

    performance: {
      title: "L. Performance and Scalability",
      items: [
        "Cache Aside Chaos",
        "Premature Micro-Optimization",
        "Batch Processing via Memory Explosion"
      ]
    },

    observability: {
      title: "M. Observability and Operations",
      items: [
        "Log-and-Pray",
        "Monitoring Blind Spots",
        "Configuration by Database"
      ]
    },

    framework: {
      title: "N. Legacy Homemade Framework",
      items: [
        "Homemade Framework Syndrome",
        "Copy-Paste Inheritance Framework"
      ]
    },

    deployment: {
      title: "O. Deployment and Environments",
      items: [
        "Snowflake Server",
        "Environment Drift",
        "Feature Flags by Commenting Code"
      ]
    },

    testing: {
      title: "P. Legacy Testing",
      items: [
        "Integration Test as Unit Test",
        "Mock Everything Syndrome",
        "Golden Master Dependency"
      ]
    },

    domain: {
      title: "Q. Domain and Business",
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
    title: "Methodology",
    p1: "Each antipattern will be addressed individually with a consistent structure that includes identification criteria, root causes, consequences and strangulation strategies.",
    p2: "The catalog will be progressively expanded with detailed analysis of each antipattern, including generic code examples that illustrate the problem and its resolution."
  },

  next_steps_section: {
    title: "Next Steps",
    p1: "The antipatterns in this catalog will be addressed one by one in subsequent iterations. Each entry will include:",
    items: [
      "Clear definition and identification criteria",
      "Generic code examples illustrating the antipattern",
      "Analysis of root causes and contributing factors",
      "Consequences and impact on the codebase",
      "Strangulation strategy with step-by-step guidance",
      "Refactored code examples showing the solution"
    ]
  }
};
