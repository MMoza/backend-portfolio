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

import { previousExperience as previousExperienceEN } from "../translations/en/previous-experience";
import { previousExperience as previousExperienceES } from "../translations/es/previous-experience";

import { invoicing as invoicingEN } from "../translations/en/invoicing";
import { invoicing as invoicingES } from "../translations/es/invoicing";

import { channelManager as channelManagerEN } from "../translations/en/channel-manager";
import { channelManager as channelManagerES } from "../translations/es/channel-manager";

import { smartLocks as smartLocksEN } from "../translations/en/smartLocks";
import { smartLocks as smartLokcsES } from "../translations/es/smartLocks";

import { portfolio as portfolioEN } from "../translations/en/portfolio";
import { portfolio as portfolioES } from "../translations/es/portfolio";

import { laravelDDD as laravelDDDEN } from "../translations/en/laravelDDD";
import { laravelDDD as laravelDDDES } from "../translations/es/laravelDDD";

import { designAntipatterns as designAntipatternsEN } from "../translations/en/designAntipatterns";
import { designAntipatterns as designAntipatternsES } from "../translations/es/designAntipatterns";

import { underConstruction as underConstructionEN } from "../translations/en/underConstruction";
import { underConstruction as underConstructionES } from "../translations/es/underConstruction";

import { puraVida as puraVidaEN } from "../translations/en/puraVida";
import { puraVida as puraVidaES } from "../translations/es/puraVida";

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
    backendDeveloper: backendDeveloperEN,
    previousExperience: previousExperienceEN,
    invoicing: invoicingEN,
    channelManager: channelManagerEN,
    smartLocks: smartLocksEN,
    portfolio: portfolioEN,
    laravelDDD: laravelDDDEN,
    designAntipatterns: designAntipatternsEN,
    underConstruction: underConstructionEN,
    puraVida: puraVidaEN
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
    backendDeveloper: backendDeveloperES,
    previousExperience: previousExperienceES,
    invoicing: invoicingES,
    channelManager: channelManagerES,
    smartLocks: smartLokcsES,
    portfolio: portfolioES,
    laravelDDD: laravelDDDES,
    designAntipatterns: designAntipatternsES,
    underConstruction: underConstructionES,
    puraVida: puraVidaES
  }
};

export type Language = "en" | "es";

// Deep merge for nested translations - fallback to English if property doesn't exist
function deepMergeWithFallback(target: any, fallback: any): any {
  const result = { ...fallback };
  
  for (const key in target) {
    if (target[key] !== null && typeof target[key] === 'object' && !Array.isArray(target[key])) {
      result[key] = deepMergeWithFallback(target[key], fallback[key] || {});
    } else {
      result[key] = target[key];
    }
  }
  
  return result;
}

export function getTranslations(lang: Language) {
  if (lang === "es") {
    // Merge Spanish translations with English as fallback for missing properties
    return deepMergeWithFallback(translations.es, translations.en);
  }
  return translations.en;
}