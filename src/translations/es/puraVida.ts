export const puraVida = {
  back: "Volver a proyectos",
  title: "Pura Vida",
  subtitle: "Web de restaurante para Pura Vida - Piscinas Bar con menú dinámico impulsado por Google Sheets API",

  sections: [
    {
      id: "overview",
      type: "text",
      title: "Resumen",
      paragraphs: [
        "Pura Vida es una web de restaurante construida para Pura Vida - Piscinas Bar, un local que necesitaba una presencia online sencilla pero efectiva para mostrar sus ofertas a los clientes.",
        "El proyecto combina un diseño limpio y moderno con un enfoque práctico de gestión de contenido que permite al personal del restaurante actualizar su menú directamente a través de Google Sheets, sin necesidad de conocimientos técnicos ni intervención de un desarrollador."
      ]
    },
    {
      id: "dynamic-menu",
      type: "image-right",
      title: "Sistema de Menú Dinámico",
      text: "El sistema de menú es la funcionalidad principal de la web. En lugar de codificar los elementos del menú en la base de código, el personal del restaurante gestiona sus ofertas a través de una hoja de Google. La web obtiene estos datos en tiempo real y los renderiza de forma atractiva. Esto significa que los especiales del día, cambios de temporada y actualizaciones de precios ocurren al instante sin ningún despliegue.",
      image: "/pura-vida-menu.png",
      imageAlt: "Interfaz del menú dinámico mostrando las ofertas del restaurante"
    },
    {
      id: "google-sheets",
      type: "image-left",
      title: "Integración con Google Sheets",
      text: "La integración con Google Sheets API proporciona una interfaz familiar para el personal del restaurante. Pueden actualizar precios, añadir nuevos platos, marcar artículos como no disponibles y organizar categorías usando una hoja de cálculo que ya saben utilizar. La web consulta estos datos y mantiene el menú siempre actualizado.",
      image: "/pura-vida-sheets.png",
      imageAlt: "Integración con Google Sheets mostrando la estructura de datos del menú"
    },
    {
      id: "tech-stack",
      type: "text",
      title: "Stack Tecnológico",
      paragraphs: [
        "El proyecto está construido con Astro para un rendimiento óptimo y SEO. Google Sheets API gestiona la capa de contenido, proporcionando una solución sin formación para el personal del restaurante.",
        "El sitio es totalmente responsive, funciona en todos los dispositivos y carga rápidamente incluso en conexiones lentas — importante para clientes que consultan el menú en sus teléfonos antes de llegar al local."
      ]
    },
    {
      id: "implementation",
      type: "code",
      title: "Implementación",
      files: [
        {
          name: "menu.ts",
          language: "typescript",
          code: `import { google } from "googleapis";

const sheets = google.sheets({ version: "v4" });

export async function getMenu() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId: process.env.SHEET_ID,
    range: "Menu!A:E",
  });

  const rows = response.data.values || [];
  const headers = rows.shift();

  return rows.map((row) => ({
    category: row[0],
    name: row[1],
    description: row[2],
    price: row[3],
    available: row[4] === "yes",
  }));
}`
        },
        {
          name: "Menu.astro",
          language: "astro",
          code: `---
import { getMenu } from "../lib/menu";

const menuItems = await getMenu();
const categories = [...new Set(menuItems.map((i) => i.category))];
---

<div class="menu">
  {categories.map((category) => (
    <section class="menu-category">
      <h2>{category}</h2>
      <div class="menu-grid">
        {menuItems
          .filter((item) => item.category === category && item.available)
          .map((item) => (
            <article class="menu-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span class="price">{item.price}€</span>
            </article>
          ))}
      </div>
    </section>
  ))}
</div>`
        }
      ]
    }
  ]
};
