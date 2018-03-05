import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    return (
        <ul className="nav nav-sidebar">
            <li className="active">
                <Link to="/app/home">Home</Link>
            </li>
            <li>
                <Link to="/app/campaign/new">Create Campaign</Link>
            </li>
            <li>
                <a href="#">Manage Campaign</a>
            </li>
            <li>
                <Link to="/login">Logout</Link>
            </li>
        </ul>
    );
};

export default Sidebar;