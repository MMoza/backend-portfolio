export const puraVida = {
  back: "Back to projects",
  title: "Pura Vida",
  subtitle: "Restaurant website for Pura Vida - Piscinas Bar with a dynamic menu powered by Google Sheets API",

  sections: [
    {
      id: "overview",
      type: "text",
      title: "Overview",
      paragraphs: [
        "Pura Vida is a restaurant website built for Pura Vida - Piscinas Bar, a venue that needed a simple yet effective online presence to showcase their offerings to customers.",
        "The project combines a clean, modern design with a practical content management approach that allows the restaurant staff to update their menu directly through Google Sheets, without needing any technical knowledge or developer intervention."
      ]
    },
    {
      id: "dynamic-menu",
      type: "image-right",
      title: "Dynamic Menu System",
      text: "The menu system is the core feature of the website. Instead of hardcoding menu items into the codebase, the restaurant staff manages their offerings through a Google Sheet. The website fetches this data in real-time and renders it beautifully on the page. This means daily specials, seasonal changes and price updates happen instantly without any deployment.",
      image: "/pura-vida-menu.png",
      imageAlt: "Dynamic menu interface showing restaurant offerings"
    },
    {
      id: "google-sheets",
      type: "image-left",
      title: "Google Sheets Integration",
      text: "The integration with Google Sheets API provides a familiar interface for the restaurant staff. They can update prices, add new dishes, mark items as unavailable and organize categories using a spreadsheet they already know how to use. The website polls this data and keeps the menu always up to date.",
      image: "/pura-vida-sheets.png",
      imageAlt: "Google Sheets integration showing menu data structure"
    },
    {
      id: "tech-stack",
      type: "text",
      title: "Tech Stack",
      paragraphs: [
        "The project is built with Astro for optimal performance and SEO. Google Sheets API handles the content management layer, providing a zero-training solution for the restaurant staff.",
        "The site is fully responsive, works across all devices and loads quickly even on slower connections — important for customers browsing the menu on their phones before arriving at the venue."
      ]
    },
    {
      id: "implementation",
      type: "code",
      title: "Implementation",
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
