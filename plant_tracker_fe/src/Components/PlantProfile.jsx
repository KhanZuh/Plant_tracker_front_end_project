import React from "react";
import { useParams } from "react-router-dom";

const PlantProfile = ({plants, duties}) => {
    const {id} = useParams();
    const plant = plants.find(plant => plant.id === parseInt(id));
    const plantDuties = duties.filter(duty => duty.plant.id === plant.id)

    return(

        <div>
            <h2>{plant.name}</h2>
            <p>Age: {plant.age}</p>
            <p>Priority: {plant.priority}</p>
            <p>Country: {plant.country.name}</p>
            <h3>Caretaker:</h3>
            <ul>
                {plantDuties.map(duty => (
                    <li key={duty.id}>{duty.person.name[0].toUpperCase()+duty.person.name.slice(1)}</li>
                ))}
            </ul>
            {/* Maybe add  plant info modal functionality here */}
        </div>
    )

}

export default PlantProfile;

