export const channelManager = {
  back: "Back to Backend Developer experience",

  header: {
    title: "Activity Channel Manager",
    description:
      "Evolution and maintenance of the distribution system connecting our activity platform with multiple tourism distribution channels."
  },

  metrics: [
    {
      value: "5+",
      label: "distribution platforms integrated"
    },
    {
      value: "3",
      label: "API versions maintained"
    },
    {
      value: "2",
      label: "distribution directions supported"
    }
  ],

  context: {
    title: "Context",
    paragraphs: [
      "The channel manager is responsible for distributing activity inventory across multiple tourism platforms while keeping availability, pricing and reservations synchronized across systems.",
      "The platform exposes several APIs that allow external channels to consume product data, create reservations and synchronize availability."
    ]
  },

  distributions: {
    title: "Distribution Integrations",
    intro:
      "The system integrates with several major tourism distribution platforms, each with different API specifications and operational requirements.",
    platforms: ["Civitatis", "GetYourGuide", "Viator", "Tiqets", "Axess"]
  },

  apiEvolution: {
    title: "API Evolution",
    intro:
      "Part of my work involved evolving and maintaining the APIs consumed by these distribution platforms as their integration requirements changed over time.",
    items: [
      "Migration of the GetYourGuide integration to a newer API version",
      "Maintenance and extension of the Viator endpoints",
      "Continuous evolution of the Civitatis integration working collaboratively with their technical team",
      "Development of a new version of our internal partner API used by smaller distribution channels"
    ]
  },

  octo: {
    title: "OCTO Protocol Integration",
    paragraphs: [
      "To support additional distribution platforms, I implemented a new API following the OCTO protocol, an industry specification designed to standardize connectivity between reservation systems and distribution channels.",
      "This integration allowed new channels such as Tiqets to connect to the platform while keeping the system aligned with industry standards."
    ]
  },

  reverseChannel: {
    title: "Reverse Channel Architecture",
    paragraphs: [
      "The system was also evolved to support a reverse distribution model.",
      "In addition to distributing our own inventory to external channels, the platform can now ingest activities from external reservation engines and expose them within our ecosystem.",
      "This was implemented through a new submodule capable of mapping external activity catalogs and availability structures into our internal domain model.",
      "The architecture allows multiple external reservation engines to be integrated in the future while exposing those activities through all existing distribution channels."
    ]
  }
};
