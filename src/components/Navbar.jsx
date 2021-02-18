import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="#"><a href="">Home</a></Link></li>
                <li><Link to="#"><a href="">Projets</a></Link></li>
                <li><Link to="#"><a href="">Contact</a></Link></li>
            </ul>
        </div>
    )
}

export default Navbar
