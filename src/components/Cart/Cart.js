import React, { Component } from "react";
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProduitConsumer} from '../../Context';
import CartList from './CartList';
import CartTotal from './CartTotal';

export default class Cart extends Component{
    render(){
        return(
            <section>
                <ProduitConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length > 0){
                            return(
                                <React.Fragment>
                                    <Title name="your" title="cart"></Title>
                                    <CartColumns></CartColumns> 
                                    <CartList value={value}></CartList>
                                    <CartTotal value={value}/> 
                                </React.Fragment>
                            );
                        }
                        else{
                          return  <EmptyCart/>;
                        }
                    }
                    }
                </ProduitConsumer>
            </section>
        )
    }
}

