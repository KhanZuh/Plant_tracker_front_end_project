import React, { useState , useEffect } from "react"
import { Link } from "react-router-dom"
import PlantFilter from "./PlantFilter";

const PlantList = ({users, plants, countries}) => {

    const [filteredPlants, setFilteredPlants] = useState(plants);

    useEffect(() => {
        setFilteredPlants(plants);
    }, [plants]);

    const handleFilter = (searchTerm) => {
        let filtered = plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            plant.country.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setFilteredPlants(filtered);
    }

    return (
        <div>
            <h2>Plants</h2>
            <PlantFilter onFilter = {handleFilter}/>
            {filteredPlants.map(plant => (
                <div key={plant.id}>
                    <h3>{ plant.name }</h3>
                    <Link to={`/plants/${plant.id}`}>
                        <button>INFO</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default PlantList;