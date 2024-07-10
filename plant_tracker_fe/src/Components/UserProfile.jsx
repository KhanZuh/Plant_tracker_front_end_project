import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const UserProfile = ({ users, duties, message, showInformation, deleteDuty, fetchUsers}) => {
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

    const handleDeleteDuty = async (dutyId) => {
        await deleteDuty(dutyId)
    }


    const handleWaterPlant = async () => {
        try {
            await waterPlant(plant.id);
            await fetchPlantData(); // Refresh the plant data
            setMessage("Plant watered successfully!");
            setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
        } catch (error) {
            setMessage("Error watering plant. Please try again.");
            setTimeout(() => setMessage(""), 3000);
        }
    };

    return(
        <>
            <h2>{user.name[0].toUpperCase() + user.name.slice(1)}'s Profile</h2>
            <h3>Duty</h3>
            <ul>
                {userDuties.map(duty => (
                    <div key={duty.id}>
                        <li>{duty.plant.name}</li> 
                        <p>{message.instruction || "Loading..."}</p>            
                        <button onClick={() => handleDeleteDuty(duty.id)}>Delete Duty</button>
                        <Link to={`/plants/${duty.id.plant.id}`}><button>View Plant</button></Link>
                    </div>
                ))}                
            </ul>
            <button 
                disabled={userDuties.length > 0}
                style={{
                    opacity: userDuties.length > 0 ? 0.5 : 1,
                    cursor: userDuties.length > 0 ? 'not-allowed' : 'pointer'
                }}
                title={userDuties.length > 0 ? "A duty is already assigned to this user" : "Add a duty"}
            >
                <Link 
                    to={userDuties.length === 0 ? `/users/${id}/add-duty/` : "#"}
                    onClick={(e) => userDuties.length > 0 && e.preventDefault()}
                    style={{ 
                        pointerEvents: userDuties.length > 0 ? 'none' : 'auto',
                        color: 'inherit',
                        textDecoration: 'none'
                    }}
                >
                    Add Duty
                </Link>

            </button>

            {/* Maybe add a "Water plant" button and functionality here */}
        </>
    );
}

export default UserProfile;