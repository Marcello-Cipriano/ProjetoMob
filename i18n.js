import I18n from 'i18n-js';
import en from './locales/en.json';
import pt from './locales/pt.json';

I18n.translations = {
  en,
  pt,
};

I18n.locale = 'en';
I18n.fallbacks = true;

export const changeLanguage = (lang) => {
  I18n.locale = lang;
};

export default I18n;
  