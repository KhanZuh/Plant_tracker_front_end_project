import { useState } from "react";

const UserFilter = ({ onFilter}) => {

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
            placeholder="Search Users"
            value={searchTerm}
            onChange={handleInputChange}
            />
        </div>
        </>
    );
}

export default UserFilter;