import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import PayPalButton from './payPalButton';
import Stripe from './Stripe';

export default function CartTotal({ value, history }) {

    const { cartSubTotal, cartTax , cartTotal, clearCart } = value;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>Vider le panier</button>
                        </Link>
                        <h5>
                            <span> subtotal: </span>
                             <strong className="text-muted">$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span>tax: </span>
                            <strong className="text-muted">$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span>total: </span>
                            <strong className="text-muted">$ {cartTotal}</strong>
                        </h5>
                        <div className="mt-3">
                            {/* <PayPalButton total={cartTotal} clearCart={clearCart} history={history} /> */}
                            <Stripe total={cartTotal} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

