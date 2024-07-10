import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PlantProfile = ({ plants, duties, waterPlant, getPlant, getPlantCountdown }) => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [plantDuties, setPlantDuties] = useState([]);
    const [plantCountdown, setPlantCountDown] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchPlantData();
    }, [id]);

    const fetchPlantData = async () => {
        const fetchedPlant = await getPlant(parseInt(id));
        setPlant(fetchedPlant);
        const filteredDuties = duties.filter(duty => duty.plant.id === fetchedPlant.id);
        setPlantDuties(filteredDuties);
        const fetchedCountdown = await getPlantCountdown(parseInt(id));
        setPlantCountDown(fetchedCountdown);
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
            <p>Days until next water: {plantCountdown.countdown}</p>
            <h3>Caretaker:</h3>
            <ul>
                {plantDuties.map(duty => (
                    <li key={duty.id}>{duty.person.name[0].toUpperCase() + duty.person.name.slice(1)}</li>
                ))}
            </ul>
            <button
                onClick={handleWaterPlant}
                disabled = {plantCountdown.countdown !== 0}
                style={{
                    opacity: plantCountdown.countdown !== 0 ? 0.5 : 1,
                    cursor: plantCountdown.countdown !== 0 ? 'not-allowed' : 'pointer'
                }}
                title={plantCountdown.countdown !== 0? "Plant already watered, please wait until the next watering date" : "Water Plant"}>Water Plant</button>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default PlantProfile;