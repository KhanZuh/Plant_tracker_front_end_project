import { Link } from 'react-router-dom'
import UserProfile from './UserProfile';
import UserFilter from './UserFilter'

const UsersList = ({ users }) => {

    return (
        <div> 
            <h2>Users</h2>
            <UserFilter />
            {users.map(user => (
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