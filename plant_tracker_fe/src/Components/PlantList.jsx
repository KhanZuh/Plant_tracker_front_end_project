import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlantFilter from "./PlantFilter";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import './styles/PlantList.css'
import PlantJson from '../utils/PlantJSON.json'


const PlantList = ({ plants, countries, fetchPlants }) => {
    const [filteredPlants, setFilteredPlants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (plants && plants.length > 0) {
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
            (plant.country && plant.country.name.toLowerCase().includes(searchTerm.toLowerCase()))
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
                <Link to="/plants/create"><button>Create Plant</button></Link>
                <PlantFilter onFilter={handleFilter}/>
            </div>
            <div className="flex-container-plant">
                <Container className="plant-card-container">
                    {filteredPlants && filteredPlants.length > 0 ? (
                        filteredPlants.map(plant => (
                            <Card style={{ width: '18rem' }} key={`plant-${plant.id}-${plant.name}`} className="plant-card">
                            <Card.Img variant="top" src={PlantJson.img} alt="picture of plant" />
                                <Card.Body>
                                    <Card.Title>
                                        {plant.displayName[0].toUpperCase() + plant.displayName.slice(1)}
                                    </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Link to={`/plants/${plant.id}`}>
                                        <button>INFO</button>
                                    </Link>
                                </Card.Body>    
                            </Card>
                        ))
                    ) : (
                        <p>No plants available</p>
                    )}
                </Container>
            </div>
        </div>
    );
}

export default PlantList;