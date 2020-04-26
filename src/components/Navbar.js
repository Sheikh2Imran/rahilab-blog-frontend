import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        <nav className="#5c6bc0 indigo lighten-1">
            <div className="nav-wrapper container">
                <Link to="/" class="brand-logo">Rahilab Blog</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    );
}

export default Navbar;