import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlantFilter from "./PlantFilter";
import { Container, Card, Row, Col } from "react-bootstrap";
import './styles/PlantList.css'
import Leaf from '../utils/Leaf.png'

const PlantList = ({ plants, countries, fetchPlants }) => {
    const [filteredPlants, setFilteredPlants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (plants && plants.length > 0) {
            console.log('Plants:', plants);  // Added for debugging
            const updatedPlants = plants.map(plant => ({
                ...plant,
                displayName: plant.name || plant.tempName || 'Unnamed Plant'
            }));
            setFilteredPlants(updatedPlants);
            setIsLoading(false);
        } else {
            fetchPlants();
        }
    }, [plants, fetchPlants]);

    const handleFilter = (searchTerm) => {
        if (!plants) return;
        
        let filtered = plants.filter(plant => 
            (plant.name || plant.tempName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
            (plant.country && plant.country.name && plant.country.name.toLowerCase().includes(searchTerm.toLowerCase()))
        );

        setFilteredPlants(filtered.map(plant => ({
            ...plant,
            displayName: plant.name || plant.tempName || 'Unnamed Plant'
        })));
    }

    if (isLoading) {
        return <div>Loading plants...</div>;
    }

    return (
        <div className="content">
            <h2 className="title-of-page">Plants</h2>
            <div className="plant-options">
                <Link to="/plants/create"><button className='create-button'>Create Plant</button></Link>
                <PlantFilter onFilter={handleFilter} />
            </div>
            <Container className="plant-card-container">
                <Row>
                    {filteredPlants && filteredPlants.length > 0 ? (
                        filteredPlants.map(plant => (
                            <Col xs={12} sm={6} md={4} key={`plant-${plant.id}-${plant.name}`} className="plant-card">
                                <Card style={{ width: '100%' }} className="card">
                                    <Card.Img variant="top" src={Leaf} alt="picture of plant"  className="plant-card-image"/>
                                    <Card.Body>
                                        <Card.Title>
                                            {plant.displayName[0].toUpperCase() + plant.displayName.slice(1)}
                                        </Card.Title>
                                        <Card.Text>
                                            <p>Country of Origin: {plant.country ? plant.country.name : 'Unknown'}</p>
                                            {plant.duties && plant.duties.length > 0 && plant.duties[0].person ? 
                                                <p>Caretaker: {plant.duties[0].person.name[0].toUpperCase() + plant.duties[0].person.name.slice(1)}</p> 
                                                : 
                                                <p>Caretaker: Not assigned</p>
                                            }
                                        </Card.Text>
                                        <Link to={`/plants/${plant.id}`}>
                                            <button className="btn-custom">
                                                <i className="fas fa-info-circle"></i> Info
                                            </button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <p>No plants available</p>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default PlantList;