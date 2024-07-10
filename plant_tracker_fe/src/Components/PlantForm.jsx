import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlantForm = ({postPlant, countries}) => {

    const navigate = useNavigate();

    const [plant , setPlant] = useState(
        {
            name: "",
            age: 0,
            countryId: "",
            plantType: "",
            priority: "LOW"
        }
    );

    const handleFormSubmit = (e) => {
        e.preventDefault();
        postPlant(plant);
        setUser({
                name: "",
                age: 0,
                countryId: "",
                plantType: "",
                priority: "LOW"
            });
        navigate('/plants');
    }

    const handleValueChange = (e) => {
        const newPlant = {...plant};
        newPlant[e.target.name] = e.target.value;
        setPlant(newPlant);
    }

    return (
        <>
            <h2>Create a Plant</h2>
            <form onSubmit={handleFormSubmit}>
                <input
                    name = "name"
                    type = "text"
                    placeholder = "Plant name"
                    onChange = {handleValueChange}
                    value = {plant.name}
                    required
                />
                <input
                    name = "age"
                    type = "number"
                    placeholder = "0"
                    min={0}
                    onChange = {handleValueChange}
                    value = {plant.age}
                />

                <select
                    name="plantType"
                    onChange={handleValueChange}
                    defaultValue="select-plant-type"
                    value={plant.plantType}
                    required
                >
                    
                    <option disabled value="select-plant-type">Select a plant type</option>
                    <option value="climbers">Climbers</option>
                    <option value="succulents">Succulents</option>
                    <option value="regular">Regular</option>
                </select>

                <select 
                    name="countryId"
                    onChange={handleValueChange}
                    value={plant.plantType}
                    required
                >
                    <option value="">Select a country</option>
                    {countries.map(country => {
                        <option key={country.id} value={country.id}>{country.name}</option>
                    })}
                </select>

                <select
                    name="priority"
                    onChange={handleValueChange}
                    value={plant.priority}
                    required
                >
                    <option value="">Select priority</option>
                    <option value="LOW">Low</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HIGH">High</option>
                </select>

                <input type="submit" value = "Create Plant" />
            </form>
        </>
    )

}

export default PlantForm;