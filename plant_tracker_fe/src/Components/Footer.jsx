// src/Components/Footer.js

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsOfUseModal from './TermsOfUseModal';
import './styles/Footer.css';

const Footer = ({ showLanguageSelector = false }) => {
  const { t } = useTranslation();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfUse, setShowTermsOfUse] = useState(false);

  return (
    <footer className="footer">
      <Container>
        <span>
          {t('footer')} | <Link to="/about">{t('about')}</Link> | 
          <span 
            onClick={() => setShowPrivacyPolicy(true)} 
            style={{cursor: 'pointer', textDecoration: 'underline'}}
          > 
            {t('privacyPolicy')}
          </span> | 
          <span 
            onClick={() => setShowTermsOfUse(true)} 
            style={{cursor: 'pointer', textDecoration: 'underline'}}
          > 
            {t('termsOfUse')}
          </span>
        </span>
        {showLanguageSelector && (
          <span className="language-selector">
            <LanguageSelector />
          </span>
        )}
      </Container>

      <PrivacyPolicyModal 
        show={showPrivacyPolicy} 
        onHide={() => setShowPrivacyPolicy(false)} 
      />
      
      <TermsOfUseModal 
        show={showTermsOfUse} 
        onHide={() => setShowTermsOfUse(false)} 
      />
    </footer>
  );
};

export default Footer;