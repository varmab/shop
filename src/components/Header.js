import React, { Component } from 'react'

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

    logout() {
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
                    <a className="navbar-brand" href="#">The Shop</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                            {
                                (token) ? 
                                (
                                    <React.Fragment>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/myorders">My Orders</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/logout">Logout</a>
                                        </li>
                                    </React.Fragment>
                                )
                                :
                                (
                                    <React.Fragment>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/login">Login</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/register">Register</a>
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