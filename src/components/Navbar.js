import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <div>
                    <Link to='/'><h1>Home</h1></Link>
                    </div>
                <div>
                    <ul>
                        <Link to="/login"><li>Login</li></Link>
                        <Link to='/signup'><li>Signup</li></Link>
                    </ul>
                </div>
            </div>
            
        </nav>
    )
}
