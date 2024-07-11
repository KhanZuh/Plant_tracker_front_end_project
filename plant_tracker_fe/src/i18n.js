import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          users: "Users",
          plants: "Plants",
          countries: "Countries",
          footer: "© 2024 Plant Tracker | Privacy Policy | Terms of Use",
          plantTrackerLogo: "Plant Tracker Logo",
          trackNurture: "Track, nurture and watch your garden flourish.",
        }
      },
      de: {
        translation: {
          users: "Benutzer",
          plants: "Pflanzen",
          countries: "Länder",
          footer: "© 2024 Plant Tracker | Datenschutzrichtlinie | Nutzungsbedingungen",
          plantTrackerLogo: "Plant Tracker Logo",
          trackNurture: "Verfolgen, pflegen und beobachten Sie, wie Ihr Garten gedeiht.",
        }
      },
      es: {
        translation: {
          users: "Usuarios",
          plants: "Plantas",
          countries: "Países",
          footer: "© 2024 Plant Tracker | Política de privacidad | Términos de uso",
          plantTrackerLogo: "Logo de Plant Tracker",
          trackNurture: "Rastrea, cuida y observa cómo florece tu jardín.",
        }
      },
      fr: {
        translation: {
          users: "Utilisateurs",
          plants: "Plantes",
          countries: "Pays",
          footer: "© 2024 Plant Tracker | Politique de confidentialité | Conditions d'utilisation",
          plantTrackerLogo: "Logo Plant Tracker",
          trackNurture: "Suivez, nourrissez et regardez votre jardin s'épanouir.",
        }
      },
      ru: {
        translation: {
          users: "Пользователи",
          plants: "Растения",
          countries: "Страны",
          footer: "© 2024 Plant Tracker | Политика конфиденциальности | Условия использования",
          plantTrackerLogo: "Логотип Plant Tracker",
          trackNurture: "Отслеживайте, ухаживайте и наблюдайте, как ваш сад процветает.",
        }
      },
    },
    lng: 'en', // Set default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;