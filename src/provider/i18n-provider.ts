import polyglotI18nProvider from 'ra-i18n-polyglot';
import en from 'ra-language-english';
import { fr } from './translations/fr';

const translations = { en, fr, mg: fr };

export const i18nProvider = polyglotI18nProvider(locale => translations[locale], 'en', [
  { locale: 'fr', name: 'English' },
  { locale: 'en', name: 'Français' },
  { locale: 'mg', name: 'Malagasy' },
]);
