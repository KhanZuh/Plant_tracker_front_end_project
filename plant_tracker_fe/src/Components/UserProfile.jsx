import { useParams } from "react-router-dom";

const UserProfile = ({ users }) => {
    const {id} = useParams();
    const user = users.find(user => user.id === parseInt(id))



    return(
        <>
            <h2>{user.name[0].toUpperCase() + user.name.slice(1)}'s Profile</h2>
        </>
    );

}

export default UserProfile;