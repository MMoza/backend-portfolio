export const smartLocks = {
  backLink: {
    label: "Back to FullStack Developer in MisterPlan"
  },

  header: {
    title: "Electronic Lock Integrations",
    description:
      "Development of integrations with multiple smart lock providers used by hotels and short-term rental accommodations. The system allows automated guest access management by generating and distributing temporary access credentials linked to reservations."
  },

  metrics: {
    providers: {
      value: "7",
      label: "lock providers integrated"
    },
    locks: {
      value: "+3000",
      label: "locks managed"
    },
    accommodations: {
      value: "+250",
      label: "accommodations connected"
    }
  },

  architecture: {
    title: "Access abstraction model",
    p1:
      "Different providers expose completely different ways of granting access to a lock: numeric codes, temporary links, eKeys, mobile app permissions or provider-specific tokens.",
    p2:
      "To handle this variability, the system introduces an abstract domain entity called Key. This entity represents a generic access credential independently of the underlying provider implementation.",
    p3:
      "Each integration adapts its provider-specific access mechanism to this domain abstraction, allowing the system to support new providers and access types without changing the core domain logic."
  },

  workflow: {
    title: "Access provisioning workflow",
    intro:
      "The module supports two different integration strategies depending on the capabilities of the lock provider.",
    strategies: {
      directLockMapping: {
        title: "Direct lock mapping",
        description:
          "Our system maps a room to one or more locks and generates access credentials directly through the provider API."
      },
      roomSynchronization: {
        title: "Room synchronization",
        description:
          "Our system maps our room with the room entity in the provider system and sends reservation information. The provider then generates the required access credentials for all locks associated with that room."
      }
    }
  },

  technicalHighlights: {
    title: "Technical highlights",
    items: [
      "Integrations with TTLock, Nuki, Tesa, Yacan, Padword, Omnitec and Akiles",
      "Domain-driven abstraction for access credentials",
      "Decoupled architecture supporting multiple providers",
      "Event-driven processes to ensure consistency across distributed systems"
    ]
  }
};