import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProduitConsumer} from '../../Context';
import CartList from './CartList';
import CartTotal from './CartTotal';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_Jlk9zoVIvJl0AYz7Nkh3OdrV001us9Wfau");


export default class cart extends Component {

    render() {
        return (
            <section>
                <ProduitConsumer>
                    {value =>{
                        const {cart} = value;
                        console.log(value);
                        if(cart.length > 0){
                            return(
                                <React.Fragment>
                                    <div className="mb-5">
                                        <Title name="votre" title="panier"></Title>
                                    </div>
                                    <CartColumns></CartColumns> 
                                    <CartList value={value}></CartList>
                                    <CartTotal value={value}/>
                                    {/* <div>
                                        <Elements stripe={stripePromise}>
                                            <CheckoutForm />
                                        </Elements>
                                    </div> */}
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

