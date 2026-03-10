export const portfolio = {
  back: "Back",

  hero: {
    title: "About this portfolio",
    intro:
      "This portfolio was created as a long-term project to document my professional work, technical experiences and the systems I have helped build.",
    goal:
      "My previous portfolio had become outdated and no longer reflected my current role as a backend developer. It mainly showcased projects from my student years, many of them focused on full-stack or frontend development."
  },

  purpose: {
    title: "Building a portfolio for the long term",
    paragraphs: [
      "I decided to rebuild my portfolio from scratch with the goal of creating something more maintainable, professional and representative of my current work.",
      "Instead of a static showcase of small projects, I wanted a place where I could progressively document the most relevant integrations, systems and architectural decisions I work on.",
      "The idea is for this portfolio to evolve over time as I continue gaining experience and working on new integrations and systems."
    ]
  },

  goals: {
    title: "Design goals",
    intro: "From the beginning I defined a few principles for the project:",
    items: [
      "Fully responsive design that works well on both desktop and mobile devices.",
      "Support for multiple languages (English and Spanish).",
      "Light and dark themes.",
      "A simple but visually engaging interface."
    ]
  },

  technology: {
    title: "Technology Choices",
    paragraphs: [
        {
        beforeLink: "For this project I decided to experiment with Astro, a framework I discovered through the content of ",
        linkText: "Midudev",
        afterLink: ", which seemed particularly well suited for projects like this."
        },
        {
        text: "Astro allows building reusable components while keeping the final result very lightweight, avoiding the need to rely on heavier client-side frameworks like React when they are not really necessary."
        },
        {
        text: "It was also my first experience using Tailwind CSS, which allowed me to build the interface quickly while maintaining visual consistency and a fully responsive design."
        },
        {
        text: "This approach allowed me to build a modular and maintainable structure without introducing unnecessary complexity to what is essentially a content-focused website."
        }
    ]
    },

  challenges: {
    title: "Technical challenges",
    paragraphs: [
      "One of the main challenges was implementing a simple but maintainable internationalization system. The site supports both English and Spanish while keeping the routing structure clean and predictable.",
      "Another challenge was designing an interface that feels visually interesting without becoming overly complex. Design is not my strongest area, and being color-blind adds an extra layer of difficulty when working with color palettes.",
      "Implementing support for both light and dark themes while keeping visual consistency across the site was also an interesting exercise."
    ]
  },

  deployment: {
    title: "Deployment workflow",
    paragraphs: [
      "Another interesting part of the project was the deployment workflow.",
      "The site is built in a separate repository and automatically deployed to my existing GitHub Pages repository using a GitHub Actions workflow.",
      "This allowed me to keep the previous portfolio running in production while developing the new version independently until everything was ready to be deployed."
    ]
  }
};