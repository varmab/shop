import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logoutStatus: false,
            loggedIn: false,
            fullName: ''
        }

        this.getLoggedInUser = this.getLoggedInUser.bind(this)
    }

    getLoggedInUser() {
        fetch('/api/users/me', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
        })
            .then(resp => resp.json())
            .then(user => {
                this.setState({
                    fullName: user.firstName + " " + user.lastName,
                    loggedIn: true
                })
            })
            .catch((err) => {
                console.log(JSON.stringify(err))
            })
    }

    logout=()=>{
        localStorage.removeItem("token");
        this.setState({
            logoutStatus: true,
            loggedIn: false,
        })

    }


    componentDidMount() {
        var token = localStorage.getItem("token");
        if (token) {
            this.getLoggedInUser();
        }
    }

    render() {
        var token = localStorage.getItem("token");
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">The Shop</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="navbar-brand" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            {
                                (token) ? 
                                (
                                    <React.Fragment>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/myorders">My Orders</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a onClick={this.logout} className="nav-link">Logout</a>
                                        </li>
                                    </React.Fragment>
                                )
                                :
                                (
                                    <React.Fragment>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/register">Register</Link>
                                        </li>
                                    </React.Fragment>
                                )
                            }
                            
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;