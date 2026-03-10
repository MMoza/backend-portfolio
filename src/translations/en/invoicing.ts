export const invoicing = {
  back: "Back to FullStack Developer in MisterPlan",

  header: {
    title: "Electronic Invoicing SaaS",
    description:
      "Unified invoicing system consolidating billing from multiple products and integrating electronic invoicing regulations across different countries."
  },

  metrics: [
    {
      value: "+5000",
      label: "invoices generated per day"
    },
    {
      value: "3",
      label: "billing domains unified"
    },
    {
      value: "6",
      label: "regulatory integrations"
    }
  ],

  context: {
    title: "Context of the Problem",
    paragraphs: [
      "Initially, the system only supported electronic invoicing through the TicketBai integration. All the required fiscal logic and validation rules were implemented inside a single service handling different regional variations of the TicketBai protocol.",
      "As the platform evolved, new electronic invoicing integrations had to be implemented, including VeriFactu for Spain and SWSapien for Mexico. Additionally, invoicing functionality needed to be implemented across two different products: the internal management system and the activity management software.",
      "Continuing to extend the existing service with more special cases would quickly lead to a complex and difficult-to-maintain system. Instead of adding new logic to the existing implementation, the decision was made to redesign the invoicing architecture around a unified billing domain."
    ]
  },

  domain: {
    title: "Unified Billing Domain",
    paragraphs: [
      "A unified billing domain model was introduced to consolidate invoice generation across the different products of the platform. This domain acts as the single source of truth for invoice creation, fiscal data validation and invoice lifecycle management.",
      "Both the internal management system and the activity management software now generate invoices using the same domain model. This approach removes duplicated logic between products and guarantees consistent fiscal data across the entire platform.",
      "Once invoices are generated within the unified domain, the system delegates the responsibility of communicating with external fiscal administrations to dedicated integration services."
    ]
  },

  architecture: {
    title: "Regulatory Integration Architecture",
    paragraphs: [
      "Electronic invoicing regulations vary significantly depending on the country and, in some cases, even between regional administrations. Each integration exposes different APIs, validation requirements and communication protocols.",
      "To handle this variability, the invoicing system was designed with an integration layer that decouples the billing domain from the external regulatory services.",
      "Each integration implements a dedicated adapter responsible for translating the internal invoice representation into the format required by the corresponding administration or platform."
    ]
  },

  integrations: {
    title: "Current Integrations",
    items: [
      {
        name: "TicketBai",
        description:
          "integration for the Basque Country, supporting the three regional implementations: Araba, Bizkaia and Gipuzkoa."
      },
      {
        name: "VeriFactu",
        description:
          "integration implementing the national electronic invoicing requirements in Spain."
      },
      {
        name: "SWSapien",
        description:
          "integration acting as a middleware platform responsible for communicating invoice data with the Mexican tax authority (SAT)."
      }
    ]
  },

  extensibility: {
    title: "Extensible Architecture",
    paragraphs: [
      "One of the primary design goals of this system was long-term extensibility. New fiscal integrations can be implemented by creating new adapters without modifying the core billing domain.",
      "This architectural approach allows the platform to evolve as new regulatory requirements appear while keeping the internal domain model stable and maintainable."
    ]
  }
};
