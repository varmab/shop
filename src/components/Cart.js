import React, { Component } from 'react'

class Cart extends Component {
    render() {
        return (
            <div class="row">
                <h1><center>Cart</center></h1>
                <div class="col-12">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="item.html">Item One</a>
                            </h4>
                            <h5>$24.99</h5>
                        </div>
                        <div class="card-footer">
                            <button>Remove</button>
                        </div>
                    </div>
                </div>

                <div class="col-12">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="item.html">Item Two</a>
                            </h4>
                            <h5>$24.99</h5>
                        </div>
                        <div class="card-footer">
                            <button>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;