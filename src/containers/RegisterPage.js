import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Register from '../components/Register'

class RegisterPage extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Register/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default RegisterPage;