import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home';

class HomePage extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Home/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default HomePage;