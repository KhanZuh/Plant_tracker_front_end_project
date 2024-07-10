import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <Container>
        <span className="text-muted">© 2024 Plant Tracker | Privacy Policy | Terms of Use</span>
      </Container>
    </footer>
  );
};

export default Footer;