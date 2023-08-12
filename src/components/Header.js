import { Link } from 'react-router-dom';

function Header(props){
    return (
        <nav className="nav">
            <Link to="/">
                <div> Parks App</div>
            </Link>
        </nav>
    );
};

export default Header; 