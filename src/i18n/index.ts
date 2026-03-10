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

import { randomuserTechnicalTest as randomuserTechnicalTestEN } from "../translations/en/randomuserTechnicalTest";
import { randomuserTechnicalTest as randomuserTechnicalTestES } from "../translations/es/randomuserTechnicalTest";

import { experience as experienceEN } from "../translations/en/experience";
import { experience as experienceES } from "../translations/es/experience";

import { contact as contactEN } from "../translations/en/contact";
import { contact as contactES } from "../translations/es/contact";

import { about as aboutEN } from "../translations/en/about";
import { about as aboutES } from "../translations/es/about";

import { backendDeveloper as backendDeveloperEN } from "../translations/en/backend-developer";
import { backendDeveloper as backendDeveloperES } from "../translations/es/backend-developer";

export const translations = {
  en: {
    home: homeEN,
    header: headerEN,
    projects: projectsEN,
    architectureComparison: architectureComparisonEN,
    apiBenchmark: apiBenchmarkEN,
    patternsPlayground: patternsPlaygroundEN,
    randomuserTechnicalTest: randomuserTechnicalTestEN,
    experience: experienceEN,
    contact: contactEN,
    about: aboutEN,
    backendDeveloper: backendDeveloperEN
  },

  es: {
    home: homeES,
    header: headerES,
    projects: projectsES,
    architectureComparison: architectureComparisonES,
    apiBenchmark: apiBenchmarkES,
    patternsPlayground: patternsPlaygroundES,
    randomuserTechnicalTest: randomuserTechnicalTestES,
    experience: experienceES,
    contact: contactES,
    about: aboutES,
    backendDeveloper: backendDeveloperES
  }
};

export type Language = "en" | "es";

export function getTranslations(lang: Language) {
  return translations[lang];
}