import React from 'react';
// import { Editor } from './index';
import '../index.css';
import { Link } from 'react-router-dom';


const Nav = () => {
    const navStyle = {
        color: 'white'
    };

    return (
<nav>
    <Link style={navStyle} to='/'>
    <h3>Home</h3>
    </Link>
    <ul className='nav-links'>
        <Link style={navStyle} to='/note'>
        <li>Note</li>
        </Link>
        <Link style={navStyle} to='/404'>
        <li>404</li>
        </Link>
    </ul>
</nav>
    );
}

export default Nav;