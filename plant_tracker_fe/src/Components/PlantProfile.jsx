import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PlantProfile = ({ plants, duties, waterPlant, getPlant }) => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [plantDuties, setPlantDuties] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchPlantData();
    }, [id]);

    const fetchPlantData = async () => {
        const fetchedPlant = await getPlant(parseInt(id));
        setPlant(fetchedPlant);
        const filteredDuties = duties.filter(duty => duty.plant.id === fetchedPlant.id);
        setPlantDuties(filteredDuties);
    };

    const handleWaterPlant = async () => {
        try {
            await waterPlant(plant.id);
            await fetchPlantData(); // Refresh the plant data
            setMessage("Plant watered successfully!");
            setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
        } catch (error) {
            setMessage("Error watering plant. Please try again.");
            setTimeout(() => setMessage(""), 3000);
        }
    };

    if (!plant) return <div>Loading...</div>;

    return (
        <div>
            <h2>{plant.name}</h2>
            <p>Age: {plant.age}</p>
            <p>Priority: {plant.priority}</p>
            <p>Country: {plant.country.name}</p>
            <h3>Caretakers:</h3>
            <ul>
                {plantDuties.map(duty => (
                    <li key={duty.id}>{duty.person.name}</li>
                ))}
            </ul>
            <button onClick={handleWaterPlant}>Water Plant</button>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default PlantProfile;