import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'

class AboutPage extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <About/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default AboutPage;