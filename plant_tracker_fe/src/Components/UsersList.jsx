import { Link } from 'react-router-dom'
import UserProfile from './UserProfile';
import UserFilter from './UserFilter'
import { useEffect, useState } from 'react';

const UsersList = ({ users }) => {

    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        setFilteredUsers(users)
        console.log(filteredUsers);
    }, [users])

    const handleFilter = (searchTerm) => {
        let filtered = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredUsers(filtered);
    }

    console.log("USERS: " + users)
    console.log("FILTERED: " + filteredUsers)

    return (
        <div> 
            <h2>Users</h2>
            <Link to = {"/users/create"}>Create User</Link>
            <UserFilter onFilter = {handleFilter}/>
            {filteredUsers.map(user => (
                <div key={user.id}>
                    <p>{user.name[0].toUpperCase() + user.name.slice(1)}</p>
                    <Link to={`/users/${user.id}`} >
                        <button>INFO</button>
                        {/* <UserProfile user={user} /> */}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default UsersList;