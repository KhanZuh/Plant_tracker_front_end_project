// src/Components/PrivacyPolicyModal.js

import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyModal = ({ show, onHide }) => {
  const { t } = useTranslation();

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{t('privacyPolicy')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t('privacyPolicyContent')}</p>
        {/* Add more privacy policy content here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>{t('close')}</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PrivacyPolicyModal;