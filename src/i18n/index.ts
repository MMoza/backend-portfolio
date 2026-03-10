import { home as homeEN } from "../translations/en/index";
import { home as homeES } from "../translations/es/index";

import { header as headerEN } from "../translations/en/header";
import { header as headerES } from "../translations/es/header";

import { projectsPage as projectsEN } from "../translations/en/projects";
import { projectsPage as projectsES } from "../translations/es/projects";

import { architectureComparison as architectureComparisonEN } from "../translations/en/architectureComparison";
import { architectureComparison as architectureComparisonES } from "../translations/es/architectureComparison";

import { apiBenchmark as apiBenchmarkEN } from "../translations/en/apiBenchmark";
import { apiBenchmark as apiBenchmarkES } from "../translations/es/apiBenchmark";

import { patternsPlayground as patternsPlaygroundEN } from "../translations/en/patternsPlayground";
import { patternsPlayground as patternsPlaygroundES } from "../translations/es/patternsPlayground";

export const translations = {
  en: {
    home: homeEN,
    header: headerEN,
    projects: projectsEN,
    architectureComparison: architectureComparisonEN,
    apiBenchmark: apiBenchmarkEN,
    patternsPlayground: patternsPlaygroundEN
  },

  es: {
    home: homeES,
    header: headerES,
    projects: projectsES,
    architectureComparison: architectureComparisonES,
    apiBenchmark: apiBenchmarkES,
    patternsPlayground: patternsPlaygroundES
  }
};

export type Language = "en" | "es";

export function getTranslations(lang: Language) {
  return translations[lang];
}