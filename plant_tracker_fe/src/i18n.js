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
          footer: "© 2024 Plant Tracker",
          plantTrackerLogo: "Plant Tracker Logo",
          trackNurture: "Track, nurture and watch your garden flourish.",
          about: "About",
          aboutDescription: "Plant Tracker is a web application designed to help you manage and care for your plants. Keep track of watering schedules, assign duties to users, and learn about suitable plants for different climates.",
          faq: "Frequently Asked Questions",
          whatIsPlantTracker: "What is Plant Tracker?",
          plantTrackerDescription: "Plant Tracker is a web application that helps you manage and monitor your plants.",
          howToAddNewPlant: "How do I add a new plant?",
          addNewPlantInstructions: "Go to the Plants page and click on the \"Create Plant\" button. Fill in the required information and submit the form.",
          canTrackWateringSchedules: "Can I track watering schedules?",
          wateringSchedulesInfo: "Yes! Each plant has a countdown timer that shows when it needs to be watered next.",
          howToAssignDuties: "How do I assign duties to users?",
          assignDutiesInstructions: "On a user's profile page, you can add duties by selecting a plant and assigning it to the user.",
          whatCountryInfo: "What information can I see about countries?",
          countryInfoDescription: "The Countries page shows a list of countries and their climate types, which helps in determining suitable plants for each region.",
          privacyPolicy: "Privacy Policy",
          termsOfUse: "Terms of Use",
          close: "Close",
          agreeToTerms: "I agree to the terms and conditions",
          privacyPolicyContent: "This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.",
          termsOfUseContent: "Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use."
        }
      },
      de: {
        translation: {
          users: "Benutzer",
          plants: "Pflanzen",
          countries: "Länder",
          footer: "© 2024 Plant Tracker",
          plantTrackerLogo: "Plant Tracker Logo",
          trackNurture: "Verfolgen, pflegen und beobachten Sie, wie Ihr Garten gedeiht.",
          about: "Über uns",
          aboutDescription: "Plant Tracker ist eine Webanwendung, die Ihnen hilft, Ihre Pflanzen zu verwalten und zu pflegen. Behalten Sie den Überblick über Bewässerungspläne, weisen Sie Benutzern Aufgaben zu und informieren Sie sich über geeignete Pflanzen für verschiedene Klimazonen.",
          faq: "Häufig gestellte Fragen",
          whatIsPlantTracker: "Was ist Plant Tracker?",
          plantTrackerDescription: "Plant Tracker ist eine Webanwendung, die Ihnen hilft, Ihre Pflanzen zu verwalten und zu überwachen.",
          howToAddNewPlant: "Wie füge ich eine neue Pflanze hinzu?",
          addNewPlantInstructions: "Gehen Sie zur Pflanzen-Seite und klicken Sie auf die Schaltfläche \"Pflanze erstellen\". Füllen Sie die erforderlichen Informationen aus und senden Sie das Formular ab.",
          canTrackWateringSchedules: "Kann ich Bewässerungspläne verfolgen?",
          wateringSchedulesInfo: "Ja! Jede Pflanze hat einen Countdown-Timer, der anzeigt, wann sie als nächstes gegossen werden muss.",
          howToAssignDuties: "Wie weise ich Benutzern Aufgaben zu?",
          assignDutiesInstructions: "Auf der Profilseite eines Benutzers können Sie Aufgaben hinzufügen, indem Sie eine Pflanze auswählen und sie dem Benutzer zuweisen.",
          whatCountryInfo: "Welche Informationen kann ich über Länder sehen?",
          countryInfoDescription: "Die Länderseite zeigt eine Liste von Ländern und deren Klimatypen, was bei der Bestimmung geeigneter Pflanzen für jede Region hilft.",
          privacyPolicy: "Datenschutzrichtlinie",
          termsOfUse: "Nutzungsbedingungen",
          close: "Schließen",
          agreeToTerms: "Ich stimme den Nutzungsbedingungen zu",
          privacyPolicyContent: "Diese Datenschutzerklärung beschreibt, wie Ihre persönlichen Informationen erfasst, verwendet und weitergegeben werden, wenn Sie unsere Website besuchen oder einen Kauf tätigen.",
          termsOfUseContent: "Willkommen auf unserer Website. Wenn Sie weiterhin auf dieser Website surfen und sie nutzen, erklären Sie sich mit den folgenden Nutzungsbedingungen einverstanden."
        }
      },
      es: {
        translation: {
          users: "Usuarios",
          plants: "Plantas",
          countries: "Países",
          footer: "© 2024 Plant Tracker",
          plantTrackerLogo: "Logo de Plant Tracker",
          trackNurture: "Rastrea, cuida y observa cómo florece tu jardín.",
          about: "Acerca de",
          aboutDescription: "Plant Tracker es una aplicación web diseñada para ayudarte a gestionar y cuidar tus plantas. Mantén un registro de los horarios de riego, asigna tareas a los usuarios y aprende sobre plantas adecuadas para diferentes climas.",
          faq: "Preguntas frecuentes",
          whatIsPlantTracker: "¿Qué es Plant Tracker?",
          plantTrackerDescription: "Plant Tracker es una aplicación web que te ayuda a gestionar y monitorear tus plantas.",
          howToAddNewPlant: "¿Cómo agrego una nueva planta?",
          addNewPlantInstructions: "Ve a la página de Plantas y haz clic en el botón \"Crear Planta\". Completa la información requerida y envía el formulario.",
          canTrackWateringSchedules: "¿Puedo hacer un seguimiento de los horarios de riego?",
          wateringSchedulesInfo: "¡Sí! Cada planta tiene un temporizador de cuenta regresiva que muestra cuándo necesita ser regada a continuación.",
          howToAssignDuties: "¿Cómo asigno tareas a los usuarios?",
          assignDutiesInstructions: "En la página de perfil de un usuario, puedes agregar tareas seleccionando una planta y asignándola al usuario.",
          whatCountryInfo: "¿Qué información puedo ver sobre los países?",
          countryInfoDescription: "La página de Países muestra una lista de países y sus tipos de clima, lo que ayuda a determinar las plantas adecuadas para cada región.",
          privacyPolicy: "Política de privacidad",
          termsOfUse: "Términos de uso",
          close: "Cerrar",
          agreeToTerms: "Acepto los términos y condiciones",
          privacyPolicyContent: "Esta Política de privacidad describe cómo se recopila, utiliza y comparte su información personal cuando visita o realiza una compra en nuestro sitio web.",
          termsOfUseContent: "Bienvenido a nuestro sitio web. Si continúa navegando y utilizando este sitio web, acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso."
        }
      },
      fr: {
        translation: {
          users: "Utilisateurs",
          plants: "Plantes",
          countries: "Pays",
          footer: "© 2024 Plant Tracker",
          plantTrackerLogo: "Logo Plant Tracker",
          trackNurture: "Suivez, nourrissez et regardez votre jardin s'épanouir.",
          about: "À propos",
          aboutDescription: "Plant Tracker est une application web conçue pour vous aider à gérer et à prendre soin de vos plantes. Suivez les horaires d'arrosage, attribuez des tâches aux utilisateurs et renseignez-vous sur les plantes adaptées aux différents climats.",
          faq: "Questions fréquemment posées",
          whatIsPlantTracker: "Qu'est-ce que Plant Tracker ?",
          plantTrackerDescription: "Plant Tracker est une application web qui vous aide à gérer et à surveiller vos plantes.",
          howToAddNewPlant: "Comment ajouter une nouvelle plante ?",
          addNewPlantInstructions: "Allez sur la page Plantes et cliquez sur le bouton \"Créer une plante\". Remplissez les informations requises et soumettez le formulaire.",
          canTrackWateringSchedules: "Puis-je suivre les horaires d'arrosage ?",
          wateringSchedulesInfo: "Oui ! Chaque plante a un compte à rebours qui indique quand elle doit être arrosée.",
          howToAssignDuties: "Comment attribuer des tâches aux utilisateurs ?",
          assignDutiesInstructions: "Sur la page de profil d'un utilisateur, vous pouvez ajouter des tâches en sélectionnant une plante et en l'attribuant à l'utilisateur.",
          whatCountryInfo: "Quelles informations puis-je voir sur les pays ?",
          countryInfoDescription: "La page Pays affiche une liste de pays et leurs types de climat, ce qui aide à déterminer les plantes appropriées pour chaque région.",
          privacyPolicy: "Politique de confidentialité",
          termsOfUse: "Conditions d'utilisation",
          close: "Fermer",
          agreeToTerms: "J'accepte les conditions d'utilisation",
          privacyPolicyContent: "Cette Politique de confidentialité décrit comment vos informations personnelles sont collectées, utilisées et partagées lorsque vous visitez ou effectuez un achat sur notre site.",
          termsOfUseContent: "Bienvenue sur notre site web. Si vous continuez à naviguer et à utiliser ce site web, vous acceptez de vous conformer et d'être lié par les conditions d'utilisation suivantes."
        }
      },
      ru: {
        translation: {
          users: "Пользователи",
          plants: "Растения",
          countries: "Страны",
          footer: "© 2024 Plant Tracker",
          plantTrackerLogo: "Логотип Plant Tracker",
          trackNurture: "Отслеживайте, ухаживайте и наблюдайте, как ваш сад процветает.",
          about: "О нас",
          aboutDescription: "Plant Tracker - это веб-приложение, разработанное для помощи в управлении и уходе за вашими растениями. Отслеживайте графики полива, назначайте обязанности пользователям и узнавайте о подходящих растениях для разных климатических условий.",
          faq: "Часто задаваемые вопросы",
          whatIsPlantTracker: "Что такое Plant Tracker?",
          plantTrackerDescription: "Plant Tracker - это веб-приложение, которое помогает вам управлять и отслеживать ваши растения.",
          howToAddNewPlant: "Как добавить новое растение?",
          addNewPlantInstructions: "Перейдите на страницу Растения и нажмите кнопку \"Создать растение\". Заполните необходимую информацию и отправьте форму.",
          canTrackWateringSchedules: "Могу ли я отслеживать графики полива?",
          wateringSchedulesInfo: "Да! У каждого растения есть таймер обратного отсчета, который показывает, когда его нужно полить в следующий раз.",
          howToAssignDuties: "Как назначать обязанности пользователям?",
          assignDutiesInstructions: "На странице профиля пользователя вы можете добавлять обязанности, выбирая растение и назначая его пользователю.",
          whatCountryInfo: "Какую информацию я могу увидеть о странах?",
          countryInfoDescription: "На странице Страны отображается список стран и их типы климата, что помогает определить подходящие растения для каждого региона.",
          privacyPolicy: "Политика конфиденциальности",
          termsOfUse: "Условия использования",
          close: "Закрыть",
          agreeToTerms: "Я соглашаюсь с условиями использования",
          privacyPolicyContent: "Эта Политика конфиденциальности описывает, как ваша персональная информация собирается, используется и распространяется при посещении или покупке нашего сайта.",
          termsOfUseContent: "Добро пожаловать на наш сайт. Продолжая пользоваться этим сайтом, вы соглашаетесь соблюдать и быть связанными следующими условиями использования."
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
