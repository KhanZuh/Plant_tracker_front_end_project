import { Link } from 'react-router-dom'
import UserFilter from './UserFilter'
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserJSON from '../utils/UserJSON.json'
import './styles/UsersList.css'
import { Accordion, AccordionBody } from 'react-bootstrap';

const UsersList = ({ users }) => {

    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        setFilteredUsers(users)
        console.log(filteredUsers);
    }, [users])

    const handleFilter = (searchTerm) => {
        let filtered = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredUsers(filtered);
    }

    return (
        <div className = 'content'> 
            <h2 className='title-of-page'>Users</h2>
            <div className = 'user-options'>
                <Link to = {"/users/create"}><button>Create User</button></Link>
                <UserFilter onFilter = {handleFilter}/>
            </div>
            <div className = 'user-list'>
                <Container>
                    <Row>
                        <Col>
                            <Accordion>
                                {filteredUsers.map(user => (
                                    <Accordion.Item eventKey={user.id.toString()} key={user.id} className = 'user-bar'>
                                        <Accordion.Header className='user-name'>{user.name[0].toUpperCase() + user.name.slice(1)}</Accordion.Header>
                                            <Accordion.Body className='user-accordion-body'>
                                                <img src={UserJSON.img} alt='profile pic' className='user-profile-pic'/>
                                                <p className='bio'>{UserJSON.bio}</p>
                                                <Link to={`/users/${user.id}`} >
                                                    <button>INFO</button>
                                                </Link>
                                            </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default UsersList;