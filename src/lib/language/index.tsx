import i18n from 'i18next';
import { PropsWithChildren } from 'react';
import { initReactI18next } from 'react-i18next';
import { language } from 'src/constants/storage';
import { languageRu } from 'src/language/ru';
import { languageEn } from 'src/language/en';

function LanguageProvider({ children }: PropsWithChildren) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: languageEn },
      ru: { translation: languageRu },
    },
    fallbackLng: language || 'ru',
    interpolation: { escapeValue: false },
  });
  return <>{children}</>;
}

export default LanguageProvider;
