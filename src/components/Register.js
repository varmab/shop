import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component {
    constructor() {
        super();

        this.state = {
            user: {
                name: '',
                phone: '',
                email: '',
                password: '',
                agreeToTerms: false
            },
            touched: {
                name: false,
                phone: false,
                email: false,
                password: false
            },
            registrationCompleted: false
        }

        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
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

    onBlur(e) {
        let touched = Object.assign({}, this.state.touched);
        touched[e.target.name] = true;
        this.setState({
            touched
        })
    }

    validate() {
        const errors = {};
        const { user } = this.state;

        if (!user.email) {
            errors.email = 'Email is required';
        }

        if (!user.name) {
            errors.name = 'Name is required';
        }

        if (!user.phone) {
            errors.phone = 'Phone is required';
        }

        if (!user.password) {
            errors.password = 'Password is required';
        }

        if (!user.agreeToTerms) {
            errors.agreeToTerms = 'You must agree to terms';
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        };
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
                alert("Thank you, You have registered successfully. We will email you confirmation shortly.")

                localStorage.setItem("token", user.token)

                this.props.onRegistrationComplete(true)

                this.setState({
                    user: {
                        name: '',
                        phone: '',
                        email: '',
                        password: '',
                        agreeToTerms: false
                    },
                    touched: {
                        name: false,
                        phone: false,
                        email: false,
                        password: false
                    },
                    registrationCompleted: true
                })
            })
            .catch((err) => {
                console.log(JSON.stringify(err))
                this.props.onRegistrationComplete(false)
                alert("Failed to register, Please try again");
            })

    }

    render() {


        if (this.state.registrationCompleted) {
            return (
                <div>
                    <h3>Thank you, You're successfully registered</h3>
                    <Link to="/dashboard">Go to Dashboard</Link>
                </div>
            )
        }
        else {
            const { user, touched } = this.state;
            const { errors, isValid } = this.validate();

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
                                                <input type="text" id="firstName" className="form-control" placeholder="First name" required="required" autofocus="autofocus" />
                                                <label for="firstName">First name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-label-group">
                                                <input type="text" id="lastName" className="form-control" placeholder="Last name" required="required" />
                                                <label for="lastName">Last name</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="required" />
                                        <label for="inputEmail">Email address</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="form-label-group">
                                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="required" />
                                                <label for="inputPassword">Password</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-label-group">
                                                <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm password" required="required" />
                                                <label for="confirmPassword">Confirm password</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-primary btn-block" href="login.html">Register</a>
                            </form>
                            <div className="text-center">
                                <a className="d-block small mt-3" href="login.html">Login Page</a>
                                <a className="d-block small" href="forgot-password.html">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Register;