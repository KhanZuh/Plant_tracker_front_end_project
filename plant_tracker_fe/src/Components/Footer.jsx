import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import './styles/Footer.css';

const Footer = ({ showLanguageSelector = false }) => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Container>
        <span>{t('footer')}</span>
        {showLanguageSelector && (
          <span className="language-selector">
            <LanguageSelector />
          </span>
        )}
      </Container>
    </footer>
  );
};

export default Footer;