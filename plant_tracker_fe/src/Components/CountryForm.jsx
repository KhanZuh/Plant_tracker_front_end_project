import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/Form.css'
import { Container, Row } from "react-bootstrap";


const CountryForm = ({postCountry}) => {

    const navigate = useNavigate();

    const [country , setCountry] = useState(
        {
            name: "",
            climate: ""
        }
    );

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await postCountry(country);
        setCountry({
          name: "",
          climate: ""
        });
        navigate('/countries');
      }
      
    const handleValueChange = (e) => {
        const { name, value } = e.target;
        const newCountry = { ...country };

        if (name === "name") {
            newCountry[name] = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            newCountry[name] = value;
        }

        setCountry(newCountry);
    }

    return (
        <>
        <Container className="content">
            <Row>
                <section className="form-parent">
                    <h2 className="form-title">Add a Country</h2>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            name = "name"
                            type = "text"
                            placeholder = "Name of country"
                            onChange = {handleValueChange}
                            required
                        />

                        <select
                            name="climate"
                            onChange={handleValueChange}
                            value={country.climate}
                            required
                        >
                            <option disabled value="">Select the climate</option>
                            <option value="TROPICAL">Tropical</option>
                            <option value="DRY">Dry</option>
                            <option value="TEMPERATE">Temperate</option>
                            <option value="CONTINENTAL">Continental</option>
                            <option value="POLAR">Polar</option>
                        </select>

                        <input type="submit" value = "Add country" className="form-submit"/>
                    </form>
                </section>
            </Row>
        </Container>
        </>
    )

}

export default CountryForm;