import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import Plant from "../utils/Plant.json";
import './styles/PlantAnimation.css'

const PlantProfile = ({ plants, duties, waterPlant, getPlant, getPlantCountdown }) => {
    const { id } = useParams();
    const lottieRef = useRef(null);
    const [showText, setShowText] = useState(false);
    const [plant, setPlant] = useState(null);
    const [plantDuties, setPlantDuties] = useState([]);
    const [plantCountdown, setPlantCountDown] = useState({});
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

    const canWater = (arg) => {

        switch(arg) {
            case "check":
                if(plantDuties.length !== 0 ){
                    if (plantCountdown.countdown === ""){
                        return true;
                    }
                }
                return false;
            case "message":
                if (plantDuties.length === 0) {
                    return "Please assign this plant to a caretaker"
                } else if (plantCountdown.countdown !== "") {
                    return "Plant already watered, please wait until the next watering date"
                }
                break;
            default:
                break
        }

    }

    if (!plant) return <div>Loading...</div>;

    const handlePlayAnimation = () => {
        if (lottieRef.current) {
            lottieRef.current.play();
          }
          setShowText(true); //this is to present that the plant has been watered
    }

    const handleButtonClick = () => {
        handleWaterPlant();
        handlePlayAnimation();
        }

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
                onClick={handleButtonClick}
                disabled = {!canWater("check")}
                style={{
                    opacity: canWater("check") ? 1 :  0.5,
                    cursor: canWater("check") ? 'pointer' : 'not-allowed'
                }}
                title={canWater("check") ? "Water Plant" : canWater("message")}>Water Plant</button>
                <Lottie className="lottie-animation"
                animationData={Plant} 
                lottieRef={lottieRef} 
                loop={false} 
                autoplay={false} 
                />
            {message && <p className="message">{message}</p>}
        </div>

    );
};

export default PlantProfile;