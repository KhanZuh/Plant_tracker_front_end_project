import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './styles/Form.css'


const PlantForm = ({postPlant, countries}) => {

    const navigate = useNavigate();

    const [plant , setPlant] = useState(
        {
            name: "",
            age: "",
            countryId: "",
            plantType: "",
            priority: ""
        }
    );

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await postPlant(plant);
        setPlant({
          name: "",
          age: "",
          countryId: "",
          plantType: "",
          priority: ""
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
        <Container className="content">
            <Row>
                <section className="form-parent">
                    <h2 className="form-title">Create a Plant</h2>
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
                            placeholder = "Age"
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
                            <option disabled value="">Select a plant type</option>
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
                            <option disabled value="">Select a country</option>
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
                            <option disabled value="">Select priority</option>
                            <option value="LOW">Low</option>
                            <option value="MEDIUM">Medium</option>
                            <option value="HIGH">High</option>
                        </select>

                        <input type="submit" value="Create Plant" className="form-submit"/>
                    </form>
                </section>
            </Row>
        </Container>    
        </>
    )

}

export default PlantForm;