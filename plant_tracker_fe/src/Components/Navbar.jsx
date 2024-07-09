import { Link } from 'react-router-dom'

const Navbar = () => {

    return(
        <nav>
            <ul>
                <button><Link to="/">Home</Link></button>
                <button><Link to="/users">Users</Link></button>
                <button><Link to="/plants">Plants</Link></button>
            </ul>
        </nav>
    )

}

export default Navbar;


