import { useParams } from "react-router-dom";

const UserProfile = ({ users }) => {
    const {id} = useParams();
    const user = users.find(user => user.id === parseInt(id))



    return(
        <>
            <h2>{user.name}'s Profile</h2>
        </>
    );

}

export default UserProfile;