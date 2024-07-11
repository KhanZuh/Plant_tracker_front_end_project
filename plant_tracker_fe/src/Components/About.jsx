import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './styles/About.css';

const About = () => {
  const { t } = useTranslation();

  const faqs = [
    { question: 'whatIsPlantTracker', answer: 'plantTrackerDescription' },
    { question: 'howToAddNewPlant', answer: 'addNewPlantInstructions' },
    { question: 'canTrackWateringSchedules', answer: 'wateringSchedulesInfo' },
    { question: 'howToAssignDuties', answer: 'assignDutiesInstructions' },
    { question: 'whatCountryInfo', answer: 'countryInfoDescription' },
  ];

  return (
    <Container className="about-container">
      <h1>{t('about')}</h1>
      <p>{t('aboutDescription')}</p>
      
      <h2>{t('faq')}</h2>
      <Accordion>
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{t(faq.question)}</Accordion.Header>
            <Accordion.Body>{t(faq.answer)}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default About;