// import { Link } from 'react-router-dom';
// import './Navbar.scss';

// function Navbar() {
//     return (
//         <nav className="navbar">
//             <ul className="navbar__links">
//                 <li className="navbar__item">
//                     <Link to="/" className="navbar__link">My Lists</Link>
//                 </li>
//                 <li className="navbar__item">
//                     <Link to="/suggestions" className="navbar__link">Get Inspired</Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;

import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
import React from 'react';

function Navbar() {
    const location = useLocation(); // To get the current path

    // Check if we are on a "My Lists" page or "Get Inspired" page
    const isMyListsPage = location.pathname === '/' || location.pathname.startsWith('/list');
    const isGetInspiredPage = location.pathname.startsWith('/suggestions') ||
        location.pathname.startsWith('/category');

    return (
        <nav className="navbar">
            <ul className="navbar__links">
                <li className={`navbar__item ${isMyListsPage ? 'active' : ''}`}>
                    <Link to="/" className="navbar__link">My Lists</Link>
                </li>
                <li className={`navbar__item ${isGetInspiredPage ? 'active' : ''}`}>
                    <Link to="/suggestions" className="navbar__link">Get Inspired</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
