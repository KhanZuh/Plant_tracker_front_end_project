// src/Components/TermsOfUseModal.js

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const TermsOfUseModal = ({ show, onHide }) => {
  const { t } = useTranslation();
  const [agreed, setAgreed] = useState(false);

  const handleClose = () => {
    if (agreed) {
      onHide();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{t('termsOfUse')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t('termsOfUseContent')}</p>
        {/* Add more terms of use content here */}
        <Form.Check 
          type="checkbox"
          label={t('agreeToTerms')}
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} disabled={!agreed}>{t('close')}</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TermsOfUseModal;