import { useState } from "react";
import './styles/PlantFilter.css'


const PlantFilter = ({ onFilter }) => {

    const [searchTerm , setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onFilter(value);
    }

    return (
        <>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by name or country of origin"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </div>
        </>
    )

}

export default PlantFilter;