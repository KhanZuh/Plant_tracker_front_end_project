import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        {languages.find(lang => lang.code === i18n.language)?.flag || '🌐'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {languages.map((lang) => (
          <Dropdown.Item key={lang.code} onClick={() => changeLanguage(lang.code)}>
            {lang.flag} {lang.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;