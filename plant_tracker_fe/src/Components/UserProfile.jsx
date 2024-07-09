import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = ({ users, duties }) => {
    const {id} = useParams();
    const user = users.find(user => user.id === parseInt(id))
    const userDuties = duties.filter(duties => duties.person.id === user.id)


    return(
        <>
            <h2>{user.name[0].toUpperCase() + user.name.slice(1)}'s Profile</h2>
            <h3>Duty</h3>
            <ul>
                {userDuties.map(duty => (
                    <li key={duty.id}>{duty.plant.name}</li> // can be a modal for displaying duty
                ))}
            </ul>
            {/* Maybe add a "Water plant" button and functionality here */}
        </>
    );

}

export default UserProfile;