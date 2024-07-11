import React from 'react';
import { Container, Accordion, Row } from 'react-bootstrap';
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
    <section className='content'>
      <Container>
          <h2 className='title-of-page'>{t('about')}</h2>
          <p>{t('aboutDescription')}</p>
          
          <h3 className='faq'>{t('faq')}</h3>
          <Accordion className='accordion'>
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={index} className='about-bar'>
                <Accordion.Header className='about-name'>{t(faq.question)}</Accordion.Header>
                <Accordion.Body className='about-accordion-body'>{t(faq.answer)}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
      </Container>
    </section>
  );
};

export default About;