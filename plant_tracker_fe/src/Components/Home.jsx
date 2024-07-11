import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlantTracker from '../assets/PlantTracker.png';
import './styles/Home.css';
import Calendar from './Calendar';

const Home = ({ events, getEvents }) => {
    const { t } = useTranslation();

    return (
        <Container>
            <Row>
                <Col>
                    <div className="home">
                        <img src={PlantTracker} className='plant-tracker-logo-lg' alt={t('plantTrackerLogo')}/>
                        <h3>{t('trackNurture')}</h3>
                        <Calendar events={events} getEvents = {getEvents}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;