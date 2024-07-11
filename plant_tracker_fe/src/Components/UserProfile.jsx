import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import './styles/UserProfile.css'
 

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


    return(
        <>
        <div>
            <Container className='content'>
                <Row>
                    <section className="user-parent">
                        <h2>{user.name[0].toUpperCase() + user.name.slice(1)}'s Profile</h2>
                            {userDuties.map(duty => (
                                <div key={duty.id}>
                                    <p className="plant-name">Duty: Water {duty.plant.name}</p> 
                                    <p className="instruction">{message.instruction || "Loading..."}</p>
                                    <button className="button" onClick={() => handleDeleteDuty(duty.id)}>Delete Duty</button>
                                    <Link to={`/plants/${duty.plant.id}`}><button className="button">View Plant</button></Link>
                                </div>
                            ))}                
                        <button className="button"
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
                    </section>
                </Row>
            </Container>
            
        </div>
            {/* Maybe add a "Water plant" button and functionality here */}

        </>
    );
}

export default UserProfile;