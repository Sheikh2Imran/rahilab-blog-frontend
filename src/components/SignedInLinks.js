import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/create">Create Blog</NavLink></li>
            <li><NavLink to="/signout">Sign Out</NavLink></li>
        </ul>
    );
}

export default SignedInLinks;