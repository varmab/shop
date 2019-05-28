import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/Login'

class LoginPage extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Login/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default LoginPage;