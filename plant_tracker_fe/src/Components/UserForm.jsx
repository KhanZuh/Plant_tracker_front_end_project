import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            <h2>Create a User</h2>
            <form onSubmit={handleFormSubmit}>
                <input
                    name = "name"
                    type = "text"
                    placeholder = "Please enter the user's name"
                    onChange = {handleValueChange}
                    value = {user.name}
                />
                <input type="submit" value = "Create User" />
            </form>
        </>
    )

}

export default UserForm;