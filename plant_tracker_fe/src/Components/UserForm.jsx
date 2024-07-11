import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/Form.css'
import { Container, Row } from "react-bootstrap";


const UserForm = ({postUser}) => {

    const navigate = useNavigate();

    const [user , setUser] = useState(
        {
            name: ""
        }
    );

    const handleFormSubmit = (e) => {
        e.preventDefault();
        postUser(user);
        setUser({name:""});
        navigate('/users');
    }

    const handleValueChange = (e) => {
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }

    return (
        <>
        <Container className="content">
            <Row>
                <section className="form-parent">
                    <h2 className="form-title">Create a User</h2>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            name = "name"
                            type = "text"
                            placeholder = "Enter user's name"
                            onChange = {handleValueChange}
                            value = {user.name}
                        />
                        <input type="submit" value = "Create User" className="form-submit"/>
                    </form>
                </section>    
            </Row>    
        </Container>    
        </>
    )

}

export default UserForm;