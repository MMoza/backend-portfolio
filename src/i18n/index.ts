import { home as homeEN } from "../translations/en/index";
import { home as homeES } from "../translations/es/index";

import { header as headerEN } from "../translations/en/header";
import { header as headerES } from "../translations/es/header";

import { projectsPage as projectsEN } from "../translations/en/projects";
import { projectsPage as projectsES } from "../translations/es/projects";

export const translations = {
  en: {
    home: homeEN,
    header: headerEN,
    projects: projectsEN
  },

  es: {
    home: homeES,
    header: headerES,
    projects: projectsES
  }
};

export type Language = "en" | "es";

export function getTranslations(lang: Language) {
  return translations[lang];
}