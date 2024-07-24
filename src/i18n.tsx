import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend, { HttpBackendOptions } from "i18next-http-backend";
import { US, JP, TW } from 'country-flag-icons/react/3x2'

const flagStyle = "size-8 ml-6";

export const languages = [
  { code: "en", name: "English(US)", country_code: <US className={flagStyle} />},
  { code: "zh-TW", name: "繁體中文", country_code: <TW className={flagStyle}/>},
  { code: "jp", name: "日本語", country_code: <JP className={flagStyle}/>},
];

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpBackend)
  .init<HttpBackendOptions>({
    supportedLngs: languages.map(language => language.code),
    fallbackLng: "en",
    defaultNS: "translations",
    interpolation: {
      escapeValue: false, 
    },
    backend: {
      loadPath: "/locales/{{lng}}/translations.json",
    },
    detection: {
      order: ["htmlTag"],
      htmlTag: document.documentElement,
    }, 
  });

export default i18n;
