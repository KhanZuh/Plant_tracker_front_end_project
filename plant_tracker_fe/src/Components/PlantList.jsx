import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlantFilter from "./PlantFilter";

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
        <div>
            <h2>Plants</h2>
            <Link to="/plants/create"><button>Create Plant</button></Link>
            <PlantFilter onFilter={handleFilter}/>
            {filteredPlants && filteredPlants.length > 0 ? (
                filteredPlants.map(plant => (
                    <div key={`plant-${plant.id}-${plant.name}`}>
                        <h3>
                            {plant.displayName[0].toUpperCase() + plant.displayName.slice(1)}
                        </h3>
                        <Link to={`/plants/${plant.id}`}>
                            <button>INFO</button>
                        </Link>
                    </div>
                ))
            ) : (
                <p>No plants available</p>
            )}
        </div>
    );
}

export default PlantList;