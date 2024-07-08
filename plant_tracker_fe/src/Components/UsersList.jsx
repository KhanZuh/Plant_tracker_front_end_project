import { Link } from 'react-router-dom'

const UsersList = ({ users }) => {

    return (
        <div>
            <h2>Users</h2>
            {users.map(user => (
                <p key={user.id}>{user.name}</p>
                // <Link to={`/users/${user.id}`} key={user.id}>

                //     {/* <UserItem user={user} /> */}
                // </Link>
            ))}
        </div>
    );
};

export default UsersList;