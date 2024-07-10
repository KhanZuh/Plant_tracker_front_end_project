import { useState } from "react";
import './styles/CountryFilter.css'


const CountryFilter = ({ onFilter }) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onFilter(value);
    }

    return (
        <>
        <div className="search-bar">
            <input
            type="text"
            placeholder="Search by country name"
            value={searchTerm}
            onChange={handleInputChange}
            />
        </div>
        </>
    );
}

export default CountryFilter;