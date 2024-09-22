import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar__links">
                <li className="navbar__item">
                    <Link to="/" className="navbar__link">My Lists</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/suggestions" className="navbar__link">Get Inspired</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
