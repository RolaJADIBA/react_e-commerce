import React, { Component, useState } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProduitConsumer} from '../../Context';
import CartList from './CartList';
import CartTotal from './CartTotal';

export default class cart extends Component {

    render() {
        return (
            <section>
                <ProduitConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length > 0){
                            return(
                                <React.Fragment>
                                    <div className="mb-5">
                                        <Title name="votre" title="panier"></Title>
                                    </div>
                                    <CartColumns></CartColumns> 
                                    <CartList value={value}></CartList>
                                    <CartTotal value={value} history={this.props.history}/>
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



