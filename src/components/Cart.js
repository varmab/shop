import React, { Component } from 'react'
import Item from './Item';

class Cart extends Component {
    constructor(props){
        super(props);

        this.state={
            cartItems:props.items
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            cartItems:newProps.items
        })
    }

    removeFromCart=(item)=>{
        console.log(item)
        this.props.removeFromCart(item)
    }

    render() {
        return (
            <div className="row">
                <h1><center>Cart</center></h1>
                {
                    this.state.cartItems.map((cartItem)=>{
                        return <Item key={cartItem.id} item={cartItem} isCart={true} removeFromCart={this.removeFromCart}/>
                    })
                }
            </div>
        )
    }
}

export default Cart;