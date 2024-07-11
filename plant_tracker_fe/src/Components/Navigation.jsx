import React from 'react';
import { useTranslation } from 'react-i18next';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png';
import './styles/Navigation.css';

const Navigation = () => {
    const { t } = useTranslation();

    return (
        <Navbar expand = "lg">
            <Navbar.Brand>
                <LinkContainer to="/">
                    <Nav.Link><img src={logo} className='logo' alt={t('plantTrackerLogo')}/></Nav.Link>
                </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls= "navbar-nav"/>
            <Navbar.Collapse id = "navbar-nav">
                <Nav>
                    <LinkContainer to="/users">
                        <Nav.Link>{t('users')}</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/plants">
                        <Nav.Link>{t('plants')}</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/countries">
                        <Nav.Link>{t('countries')}</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;