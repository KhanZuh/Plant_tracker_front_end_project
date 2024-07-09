import React from "react"
import { Link } from "react-router-dom"





const PlantList = ({plants, countries}) => {
    return (
        <div>
            <h2>Plants</h2>
            <PlantsFilter countries ={countries} />
            {plants.map(plant => (
                <Link to={`/plants/${plant.id}`} key={plant.id}>
                    <button>INFO</button>
                </Link>
            ))}

        </div>




    )
}

export default PlantList;