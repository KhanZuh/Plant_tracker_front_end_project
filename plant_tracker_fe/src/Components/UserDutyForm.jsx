import React from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { useState} from "react";


const UserDutyForm = ({ users, plants, postDuty }) => {
    
    const [stateDuty, setStateDuty] = useState({plantId : null, personId : null})
    // const navigate = useNavigate();

    const {id} = useParams();
    const user = users.find(user => user.id === parseInt(id))
    const plantOptions = plants.filter((plant) => {
        return <option key={plant.id} value={plant.id}>{plant.name}</option>
    })

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postDuty(stateDuty);
        setStateDuty({
            personId: null,
            plantId: null
        });

        // navigate(`/users/${id}`)
    }


    const handleValueChange = (event) => {
        const copiedDuty = { ...stateDuty};
        copiedDuty["personId"] = parseInt(user.id);
        copiedDuty["plantId"] = event.target.value;
        setStateDuty(copiedDuty);
    }

    return(
        <>
        <h3>Create Duty for {user.name[0].toUpperCase() + user.name.slice(1)}</h3>
        <form onSubmit={handleFormSubmit}>
        <label htmlFor="plant">Plant</label>
        <select 
            id="plant"
            name="plantId"
            defaultValue="select-plant"
            onChange={handleValueChange}
        >
            <option disabled value="select-plant">Choose a plant</option>
            {plantOptions}
        </select>
        <input type="submit" value="add-duty"></input>
        </form>
        </>
    );

}

export default UserDutyForm;