import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = ({ users, duties, showInformation }) => {

    const {id} = useParams();
    const user = users.find(user => user.id === parseInt(id))
    const userDuties = duties.filter(duties => duties.person.id === user.id)

    const handleInformation = (plantId) => {
        return showInformation(plantId);
    }

    return(
        <>
            <h2>{user.name[0].toUpperCase() + user.name.slice(1)}'s Profile</h2>
            <h3>Duty</h3>
            <ul>
                {userDuties.map(duty => (
                    <div key={duty.id}>
                        <li>{duty.plant.name}</li> 
                        <p>{handleInformation(duty.plant.id).instruction}</p>
                    </div>
                ))}
            </ul>
            {/* Maybe add a "Water plant" button and functionality here */}
        </>
    );

}

export default UserProfile;