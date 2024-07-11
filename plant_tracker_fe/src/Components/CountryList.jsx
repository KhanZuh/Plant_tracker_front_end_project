import { useState } from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import CountryFilter from "./CountryFilter";
import { Link } from "react-router-dom";
import './styles/CountryList.css';
import CountryJSON from '../utils/CountryJSON.json'



const CountryList = ( { countries }) => {

    const [filteredCountries, setFilteredCountries] = useState(countries);

    const handleFilter = (searchTerm) => {
        let filtered = countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredCountries(filtered);
    }


    return (
        <div className = 'content'> 
            <h2 className='title-of-page'>Countries</h2>
            <div className = 'country-options'>
                <Link to = {"/countries/create"}>
                    <button>Add Country</button>
                </Link>
                <CountryFilter onFilter = {handleFilter}/>
            </div>
            <div className='country-list'>
                <Container>
                    <Row>
                        {filteredCountries.map(country => (
                            <Col xs={12} sm={6} md={4} key={`country-${country.id}-${country.name}`} className="country-card">
                                <Card style={{ width: '100%' }} className="card">
                                    <Card.Img variant="top" src={CountryJSON.img} alt="picture of country" className="country-card-image"/>
                                    <Card.Body>
                                        <Card.Title>
                                            {country.name[0].toUpperCase() + country.name.slice(1)}
                                        </Card.Title>
                                        <Card.Text>
                                            <p>Climate: {country.climate[0].toUpperCase() + country.climate.slice(1).toLowerCase()}</p>
                                            <p>Tracked plants from this country: {country.plants.length}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );

}

export default CountryList