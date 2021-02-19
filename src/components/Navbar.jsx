import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName ="selected">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/projets" activeClassName ="selected">Projets</NavLink></li>
                <li className="nav-item"><NavLink to="/contact" activeClassName ="selected">Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
