export const randomuserTechnicalTest = {
  back: "Back to projects",

  header: {
    label: "2023 — Technical Test",
    title: "RandomUser API Technical Test",
    description:
      "This project represents the technical test I completed during the selection process for my first professional role as a web developer."
  },

  highlights: {
    api: {
      title: "External API Integration",
      description: "Consuming third-party APIs using PHP and cURL."
    },
    communication: {
      title: "Backend–Frontend Communication",
      description: "AJAX requests retrieving JSON data from a PHP endpoint."
    },
    assessment: {
      title: "First Technical Assessment",
      description:
        "Project completed during the hiring process for my first developer role."
    }
  },

  intro: {
    p1: "The goal of the exercise was to build a small web application capable of retrieving user data from the RandomUser API and displaying it dynamically in the browser.",
    p2: "Although the problem itself was relatively simple, the challenge was designed to evaluate several fundamental skills expected from a junior developer entering a professional environment."
  },

  objectives_section: {
    title: "Technical Objectives",
    items: [
      "Consume an external REST API using PHP",
      "Implement HTTP requests using cURL",
      "Return structured JSON responses",
      "Perform AJAX requests from the frontend",
      "Render dynamic data in the browser"
    ]
  },

  architecture_section: {
    title: "Architecture of the Solution",
    intro: "The solution was intentionally simple but structured around clear responsibilities between backend and frontend.",
    items: [
      "A dedicated PHP class responsible for performing the HTTP request to the RandomUser API using cURL.",
      "An endpoint exposing the data in JSON format.",
      "A frontend implementation using JavaScript and AJAX requests to retrieve the data asynchronously.",
      "Rendering of the returned user data inside a simple HTML interface."
    ]
  },

  backend_section: {
    title: "Backend Implementation",
    p1: "The backend layer was implemented using PHP and focused on interacting with the external API.",
    p2: "A PHP class was created to encapsulate the HTTP request logic using cURL, handling the communication with the RandomUser API and returning a JSON response to the frontend.",
    p3: "This separation helped keep the API communication logic isolated from the presentation layer."
  },

  frontend_section: {
    title: "Frontend Interaction",
    p1: "On the frontend, JavaScript was used to perform an asynchronous request to the PHP endpoint.",
    p2: "The returned JSON payload was parsed and rendered dynamically in the HTML page, displaying the user information retrieved from the API."
  },

  learning_section: {
    title: "Learning Experience",
    p1: "This technical challenge marked my first real exposure to a professional software selection process.",
    p2: "It required applying several concepts I had recently learned, such as working with APIs, performing HTTP requests in PHP and structuring a small web application with clear separation between frontend and backend.",
    p3: "Completing this test successfully allowed me to secure my first position as a developer, making this project a significant milestone in my professional journey."
  }
};
