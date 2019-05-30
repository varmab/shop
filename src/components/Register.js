import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

class Register extends Component {
    constructor() {
        super();

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
                agreeToTerms: false
            },
            registrationCompleted: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {

        //e - form
        //target - field
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const targetName = target.name;
        console.log(targetName + " " + value)

        const user = Object.assign({}, this.state.user);
        user[targetName] = value;

        this.setState({
            user
        })
    }

    onSubmit(e) {
        e.preventDefault();

        var formBody = [];

        for (var property in this.state.user) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(this.state.user[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }

        formBody = formBody.join("&");

        //fullName=Ravi&email=asdasdas@aefda.com&

        //API Call

        fetch('/api/users/register', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        })
            .then(resp => resp.json())
            .then(user => {
                console.log(JSON.stringify(user))
                alert("Thank you, You have registered successfully.")
                localStorage.setItem("token", user.token)
                this.setState({
                    user: {
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        agreeToTerms: false
                    },
                    registrationCompleted: true
                })
            })
            .catch((err) => {
                console.log(JSON.stringify(err))
                alert("Failed to register, Please try again");
            })

    }

    render() {


        if (this.state.registrationCompleted) {
            return (
                <Redirect to="/"/>
            )
        }
        else {
            const { user } = this.state;
            return (
                <div className="container">
                    <div className="card card-register mx-auto mt-5">
                        <div className="card-header">Register an Account</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="form-label-group">
                                                <input type="text" id="firstName" name="firstName" onChange={this.onChange} value={this.state.firstName} className="form-control" placeholder="First name" required="required" autofocus="autofocus" />
                                                <label for="firstName">First name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-label-group">
                                                <input type="text" id="lastName" name="lastName" onChange={this.onChange} value={this.state.lastName} className="form-control" placeholder="Last name" required="required" />
                                                <label for="lastName">Last name</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" name="email" onChange={this.onChange} value={this.state.email} className="form-control" placeholder="Email address" required="required" />
                                        <label for="inputEmail">Email address</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="form-label-group">
                                                <input type="password" id="inputPassword" name="password" onChange={this.onChange} value={this.state.password} className="form-control" placeholder="Password" required="required" />
                                                <label for="inputPassword">Password</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-label-group">
                                                <input type="password" id="confirmPassword" name="confirmPassword" onChange={this.onChange} value={this.state.confirmPassword} className="form-control" placeholder="Confirm password" required="required" />
                                                <label for="confirmPassword">Confirm password</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={this.onSubmit}>Register</button>
                            </form>
                            <div className="text-center">
                                <a className="d-block small mt-3" href="/login">Login Page</a>
                                <a className="d-block small" href="/">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Register;