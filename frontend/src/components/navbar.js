import React from 'react';
import "../styles/navbar.css"
export default function Navbar(){

      
    return(
        <div>
            <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/">Freelancer</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-brand" id="navbarNav">
                    <ul className='navbar-nav '>
                        <li className="nav-item">
                            <a className="nav-link" href="/myprojects">Your Projects</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}