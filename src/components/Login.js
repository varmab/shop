import React, { Component } from 'react'
import {
    Redirect
} from 'react-router-dom'

class Login extends Component {
    constructor() {
        super();

        this.state = {
            loggedInStatus: false,
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {

        if (e.target.name == "email") {
            this.setState({
                email: e.target.value
            })
        }

        if (e.target.name == "password") {
            this.setState({
                password: e.target.value
            })
        }

    }

    onSubmit(e) {
        e.preventDefault();
        var body = `email=${this.state.email}&password=${this.state.password}`

        fetch('/api/users/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
        })
            .then(resp => resp.json())
            .then(user => {
                console.log(JSON.stringify(user))

                localStorage.setItem("token", user.token)

                this.setState({
                    loggedInStatus: true
                })
            })
            .catch((err) => {
                console.log(JSON.stringify(err))
                alert("Failed to register, Please try again");
            })

    }

    render() {
        if (this.state.loggedInStatus == true) {
            return (<Redirect to="/" />)
        }
        return (
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="required" autofocus="autofocus" />
                                    <label for="inputEmail">Email address</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="required" />
                                    <label for="inputPassword">Password</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="remember-me" />
                                        Remember Password
                                    </label>
                                </div>
                            </div>
                            <a className="btn btn-primary btn-block" href="index.html">Login</a>
                        </form>
                        <div className="text-center">
                            <a className="d-block small mt-3" href="register.html">Register an Account</a>
                            <a className="d-block small" href="forgot-password.html">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;