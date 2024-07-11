import React, { useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { useState} from "react";
import './styles/Form.css';
import { Container, Row } from "react-bootstrap";


const UserDutyForm = ({ users, plants, postDuty, fetchPlants }) => {
    
    const [stateDuty, setStateDuty] = useState({plantId : null, personId : null})
    const navigate = useNavigate();

    const {id} = useParams();
    const user = users.find(user => user.id === parseInt(id))
    const filteredPlants = plants.filter(plant => plant.duties.length === 0)
    const plantOptions = filteredPlants.map((plant) => {
        return <option key={plant.id} value={plant.id}>{plant.name}</option>
    })

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postDuty(stateDuty);
        setStateDuty({
            personId: null,
            plantId: null
        });

        navigate(`/users/${id}`) 
    }

    useEffect(() => {
        fetchPlants();
    }, [])


    const handleValueChange = (event) => {
        const copiedDuty = { ...stateDuty};
        copiedDuty["personId"] = parseInt(user.id);
        copiedDuty["plantId"] = event.target.value;
        setStateDuty(copiedDuty);
    }

    

    return(
        <>
        <Container className="content">
            <Row>
                <section className="form-parent">
                    <h2 className="form-title">Create Duty for {user.name[0].toUpperCase() + user.name.slice(1)}</h2>
                    <form onSubmit={handleFormSubmit}>
                        <select 
                            id="plant"
                            name="plantId"
                            defaultValue="select-plant"
                            onChange={handleValueChange}
                        >
                            <option disabled value="select-plant">Choose a plant</option>
                            {plantOptions}
                        </select>
                        <input type="submit" value="Add Duty" className="form-submit"></input>
                    </form>
                </section>
            </Row>
        </Container>
        </>
    );

}

export default UserDutyForm;