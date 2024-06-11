import en from '../../public/locales/en/translations.json';
import zh_TW from '../../public/locales/zh-TW/translations.json';
import jp from '../../public/locales/jp/translations.json';


declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translations';
    resources: {
      "en": typeof en,
      "zh-TW": typeof zh_TW,
      "jp": typeof jp
    };
  }
}
