export const randomuserTechnicalTest = {
  back: "Volver a proyectos",

  header: {
    label: "2023 — Prueba Técnica",
    title: "Prueba Técnica API RandomUser",
    description:
      "Este proyecto representa la prueba técnica que completé durante el proceso de selección de mi primer rol profesional como desarrollador web."
  },

  highlights: {
    api: {
      title: "Integración de API Externa",
      description: "Consumir APIs de terceros usando PHP y cURL."
    },
    communication: {
      title: "Comunicación Backend–Frontend",
      description: "Solicitudes AJAX recuperando datos JSON desde un endpoint PHP."
    },
    assessment: {
      title: "Primera Evaluación Técnica",
      description:
        "Proyecto completado durante el proceso de contratación para mi primer rol de desarrollador."
    }
  },

  intro: {
    p1: "El objetivo del ejercicio era construir una pequeña aplicación web capaz de recuperar datos de usuario desde la API RandomUser y mostrarlos dinámicamente en el navegador.",
    p2: "Aunque el problema en sí era relativamente simple, la prueba fue diseñada para evaluar varias habilidades fundamentales esperadas de un desarrollador junior que se incorpora a un entorno profesional."
  },

  objectives_section: {
    title: "Objetivos Técnicos",
    items: [
      "Consumir una API REST externa usando PHP",
      "Implementar solicitudes HTTP usando cURL",
      "Devolver respuestas JSON estructuradas",
      "Realizar solicitudes AJAX desde el frontend",
      "Renderizar datos dinámicos en el navegador"
    ]
  },

  architecture_section: {
    title: "Arquitectura de la Solución",
    intro: "La solución fue intencionalmente simple pero estructurada alrededor de responsabilidades claras entre backend y frontend.",
    items: [
      "Una clase PHP dedicada responsable de realizar la solicitud HTTP a la API RandomUser usando cURL.",
      "Un endpoint que expone los datos en formato JSON.",
      "Una implementación frontend usando JavaScript y solicitudes AJAX para recuperar los datos de forma asincrónica.",
      "Renderizado de los datos del usuario devueltos dentro de una interfaz HTML simple."
    ]
  },

  backend_section: {
    title: "Implementación Backend",
    p1: "La capa backend fue implementada usando PHP y se enfocó en interactuar con la API externa.",
    p2: "Se creó una clase PHP para encapsular la lógica de solicitud HTTP usando cURL, manejando la comunicación con la API RandomUser y devolviendo una respuesta JSON al frontend.",
    p3: "Esta separación ayudó a mantener la lógica de comunicación con la API aislada de la capa de presentación."
  },

  frontend_section: {
    title: "Interacción Frontend",
    p1: "En el frontend, se utilizó JavaScript para realizar una solicitud asincrónica al endpoint PHP.",
    p2: "La carga JSON devuelta fue analizada y renderizada dinámicamente en la página HTML, mostrando la información del usuario recuperada de la API."
  },

  learning_section: {
    title: "Experiencia de Aprendizaje",
    p1: "Este desafío técnico marcó mi primera exposición real a un proceso profesional de selección de software.",
    p2: "Requirió aplicar varios conceptos que había aprendido recientemente, como trabajar con APIs, realizar solicitudes HTTP en PHP y estructurar una pequeña aplicación web con clara separación entre frontend y backend.",
    p3: "Completar esta prueba exitosamente me permitió asegurar mi primer puesto como desarrollador, haciendo de este proyecto un hito significativo en mi trayectoria profesional."
  }
};
