import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

class ContactPage extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Contact/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default ContactPage;