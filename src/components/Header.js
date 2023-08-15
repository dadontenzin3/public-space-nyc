import { Link } from 'react-router-dom';

function Header(props){
    return (
        <nav className="nav">
               
            <ul>
                <Link to="/home" className="my-link-class logo">
                    <li> Public Space NYC </li>
                </Link>                 
                <Link to="/home" className="my-link-class"><li>Home</li></Link>
                <Link to="/about" className="my-link-class"><li>About</li></Link>
                <Link to="/myparks" className="my-link-class"><li>Saved Spaces</li></Link>
                <Link to="/myreviews" className="my-link-class"><li>My Reviews</li></Link>
                <Link to="/account" className="my-link-class"><li>My Account</li></Link>
            </ul>
        </nav>
    );
}

export default Header; 