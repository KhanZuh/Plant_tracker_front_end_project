import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../assets/logo.png'
import './styles/Navigation.css'

const Navigation = () => {

    return(
        <Navbar sticky = 'top'>
            <Navbar.Brand>
                <img src = { logo } className = 'logo' alt='Plant Tracker Logo'/>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <LinkContainer to = "/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/users">
                        <Nav.Link>Users</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/plants">
                        <Nav.Link>Plants</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default Navigation;


