import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import Plant from "../utils/Plant.json";
import { Container, Row } from 'react-bootstrap'
import './styles/PlantProfile.css'
import './styles/PlantAnimation.css'

const PlantProfile = ({ plants, duties, waterPlant, getPlant, getPlantCountdown, plantCountdown }) => {
    const { id } = useParams();
    const lottieRef = useRef(null);
    const [showText, setShowText] = useState(false);
    const [plant, setPlant] = useState(null);
    const [plantDuties, setPlantDuties] = useState([]);
    const [message, setMessage] = useState("");
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        fetchPlantData();
    }, [id]);

    useEffect(() => {
        if(plantCountdown.countdown !==0) {
            setShowAnimation(true);
        } else {
            setShowAnimation(false);
        }
    }, [plantCountdown])

    const fetchPlantData = async () => {
        const fetchedPlant = await getPlant(parseInt(id));
        setPlant(fetchedPlant);
        const filteredDuties = duties.filter(duty => duty.plant.id === fetchedPlant.id);
        setPlantDuties(filteredDuties);
        await getPlantCountdown(parseInt(id));
    };

    const checkLastWatered = (plant) => {
        if(plant.lastWateredDates.length === 0) {
            return "Never Watered"
        }

        return plant.lastWateredDates[plant.lastWateredDates.length - 1];
    }

    const handleWaterPlant = async () => {
        try {
            await waterPlant(plant.id);
            await fetchPlantData(); // Refresh the plant data
            setMessage("Plant watered successfully!");
            setTimeout(() => setMessage(""), 5000); // Clear message after 3 seconds
        } catch (error) {
            setMessage("Error watering plant. Please try again.");
            setTimeout(() => setMessage(""), 5000);
        }
    };

    const canWater = (arg) => {

        switch(arg) {
            case "check":
                if(plantDuties.length !== 0 ){
                    if (plantCountdown.countdown === 0){
                        return true;
                    }
                }
                return false;
            case "message":
                if (plantDuties.length === 0) {
                    return "Please assign this plant to a caretaker"
                } else if (plantCountdown.countdown !== 0) {
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
        setShowAnimation(true);
    }

    const handleButtonClick = () => {
        handleWaterPlant();
        handlePlayAnimation();
    }

    const calculateWaterLevel = () => {

        if (plantCountdown.countdown === 0) {
            return 0;
        }

        const maxCountdown = plant.intervalBetweenWatering;
        return (plantCountdown.countdown / maxCountdown) * 100;
    }

    return (
        <div>
            <Container className="content">
                <Row>
                    <div className = "plant-parent">
                        <div className = "plant-details">
                            <h2 className="plant-name">{plant.name}</h2>
                            <p>Age: {plant.age}</p>
                            <p>Priority: {plant.priority}</p>
                            <p>Country: {plant.country.name}</p>
                            <p>Last Watered Date: {checkLastWatered(plant)}</p>
                            <p>Days until next water:</p>
                            <div className="water-level-container">
                                <div
                                    className="water-level"
                                    style={{ width: `${calculateWaterLevel()}%` }}
                                >
                                    <div className="water-level-label">
                                        {plantCountdown.countdown} days
                                    </div>
                                </div>
                            </div>
                            <h3>Caretaker:</h3>
                            <div className = "plant-caretaker">
                            {plantDuties.map(duty => (
                                    <h4 key={duty.id}>{duty.person.name[0].toUpperCase() + duty.person.name.slice(1)}</h4>
                                ))}
                            </div>
                        </div>
                        { showAnimation &&
                            <Lottie className="lottie-animation"
                                animationData={Plant} 
                                lottieRef={lottieRef} 
                                loop={false} 
                                autoplay={true} 
                            />
                        }
                        {message && <p className="message">{message}</p>}
                        <button
                            className = "btn-water"
                            onClick={handleButtonClick}
                            disabled = {!canWater("check")}
                            style={{
                                opacity: canWater("check") ? 1 :  0.5,
                                cursor: canWater("check") ? 'pointer' : 'not-allowed'
                            }}
                            title={canWater("check") ? "Water Plant" : canWater("message")}>Water Plant</button>
                    </div>
                </Row>
            </Container>
        </div>

    );
};

export default PlantProfile;