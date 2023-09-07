import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationHE from "./locales/uz/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  uz: {
    translation: translationHE,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng:"uz",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;