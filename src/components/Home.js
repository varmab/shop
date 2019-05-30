import React, { Component } from 'react'
import Catalog from './Catalog';
import Banner from './Banner';
import Cart from './Cart';
import Checkout from './Checkout';

class Home extends Component {
    constructor(){
        super();

        this.state={
            items:[],
            cartItems:[],
            orderTotal:0
        }
    }

    componentDidMount(){
        fetch('/api/shop/items')
        .then(response=>response.json())
        .then((items)=>{
            this.setState({
                items:items
            })
        })
        .catch((err)=>{
            alert("Failed to load items")
        })
    }

    addToCart=(item)=>{
        console.log(item);

        

        var isItemExists=this.state.cartItems.some((cartItem)=>{
            return item._id==cartItem._id
        })

        if(isItemExists){
            item.qty++;

            this.setState({
                cartItems:[
                    ...this.state.cartItems.filter((cartItem)=>{
                        return item._id!=cartItem._id;
                    }),
                    item
                ]
            },()=>{
                this.setState({
                    orderTotal:this.state.cartItems.reduce((total,cartItem)=>{
                        return total + cartItem.price * cartItem.qty;
                    },0)
                })
            })
        }
        else {
            item.qty=1;
            this.setState({
                cartItems:[
                    ...this.state.cartItems,
                    item
                ]
            },()=>{
                this.setState({
                    orderTotal:this.state.cartItems.reduce((total,cartItem)=>{
                        return total + cartItem.price * cartItem.qty;
                    },0)
                })
            })
        }
        
    }

    removeFromCart=(item)=>{
        console.log(item)
        this.setState({
            cartItems:this.state.cartItems.filter((cartItem)=>{
                return cartItem._id!=item._id
            })
        },()=>{
            this.setState({
                orderTotal:this.state.cartItems.reduce((total,cartItem)=>{
                    return total + cartItem.price;
                },0)
            })
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <Banner/>
                        <Catalog items={this.state.items} addToCart={this.addToCart}/>
                    </div>

                    <div className="col-lg-3">
                        <Cart items={this.state.cartItems} removeFromCart={this.removeFromCart}/>
                        <Checkout orderTotal={this.state.orderTotal} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;