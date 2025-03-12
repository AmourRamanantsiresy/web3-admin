import polyglotI18nProvider from 'ra-i18n-polyglot';
import { en } from './translations/en';
import { fr } from './translations/fr';

const translations = { en, fr };

export const i18nProvider = polyglotI18nProvider(
  locale => translations[locale],
  'fr', // default locale
  [
    { locale: 'en', name: 'Français' },
    { locale: 'fr', name: 'English' },
  ]
);
