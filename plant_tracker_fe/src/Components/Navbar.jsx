import { Link } from 'react-router-dom'

const Navbar = () => {

    return(
        <nav>
            <ul>
                <Link to="/"><button>Home</button></Link>
                <Link to="/users"><button>Users</button></Link>
                <Link to="/plants"><button>Plants</button></Link>
            </ul>
        </nav>
    )

}

export default Navbar;


