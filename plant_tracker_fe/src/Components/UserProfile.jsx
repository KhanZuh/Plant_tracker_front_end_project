import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserProfile = ({ users, duties, message, showInformation }) => {

    const {id} = useParams();
    const user = users.find(user => user.id === parseInt(id))
    const userDuties = duties.filter(duties => duties.person.id === user.id)

    const handleInformation = (plantId) => {
        return showInformation(plantId);
    }

    useEffect(() => {
        userDuties.forEach(duty => {
          handleInformation(duty.plant.id);
        });
    }, [id, userDuties, handleInformation]);

    return(
        <>
            <h2>{user.name[0].toUpperCase() + user.name.slice(1)}'s Profile</h2>
            <h3>Duty</h3>
            <ul>
                {userDuties.map(duty => (
                    <div key={duty.id}>
                        <li>{duty.plant.name}</li> 
                        <p>{message.instruction || "Loading..."}</p>
                    </div>
                ))}
            </ul>
            <button><Link to={`/users/${id}/add-duty/`}>Add Duty</Link></button>
            {/* Maybe add a "Water plant" button and functionality here */}
        </>
    );

}

export default UserProfile;