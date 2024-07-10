import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlantForm = ({postPlant, countries}) => {

    const navigate = useNavigate();

    const [plant , setPlant] = useState(
        {
            name: "",
            age: "Age",
            countryId: "select-country",
            plantType: "select-plant-type",
            priority: "select-priority"
        }
    );

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await postPlant(plant);
        setPlant({
          name: "",
          age: "Age",
          countryId: "select-country",
          plantType: "select-plant-type",
          priority: "select-priority"
        });
        navigate('/plants');
      }
      
    const handleValueChange = (e) => {
        const { name, value } = e.target;
        const newPlant = { ...plant };

        if (name === "name") {
            newPlant[name] = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            newPlant[name] = value;
        }

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
                    value={plant.countryId}
                    required
                >
                    <option disabled value="select-country">Select a country</option>
                    {countries.map(country => (
                        <option key={country.id} value={country.id}>{country.name}</option>
                    ))}
                </select>

                <select
                    name="priority"
                    onChange={handleValueChange}
                    value={plant.priority}
                    required
                >
                    <option disabled value="select-priority">Select priority</option>
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