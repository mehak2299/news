import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className= "navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">One</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li> */}
                        </ul>

                      
                    </div>
                </div>
            </nav>
            </div>
        )
    }
}
