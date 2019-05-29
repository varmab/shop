import React, { Component } from 'react'
import Catalog from './Catalog';
import Banner from './Banner';
import Cart from './Cart';
import Checkout from './Checkout';

class Home extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-lg-9">
                        <Banner/>
                        <Catalog/>
                    </div>

                    <div class="col-lg-3">
                        <Cart/>
                        <Checkout/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;