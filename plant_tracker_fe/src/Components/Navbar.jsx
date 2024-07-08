import { Link } from 'react-router-dom'

const Navbar = () => {

    return(
        <nav>
            <ul>
                <button><Link to="/">Home</Link></button>
                <button><Link to="/users">Users</Link></button>
                {/* <li><Link to="/">Home</Link>Plants</li> */}
            </ul>
        </nav>
    )

}

export default Navbar;


