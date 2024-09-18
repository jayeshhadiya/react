import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item"><Link to="/home">Home</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                    <li className="nav-item"><Link to="/project">Project</Link></li>
                    <li className="nav-item"><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;