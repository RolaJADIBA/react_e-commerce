import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';


export default class Stripe extends Component {

    onToken = (token) => {
        fetch('http://e_commerce.test/charge', {
            method: 'POST',
            body: JSON.stringify(token),
          }).then(response => {
            response.json().then(data => {
              alert(`We are in business, ${data.email}`);
            });
          });
      }

    render() {

        let total = this.props.total * 100;
        return (
            <div>
                <StripeCheckout
                    amount={total} 
                    description="test"
                    image={"logo.png"}
                    stripeKey="pk_test_Jlk9zoVIvJl0AYz7Nkh3OdrV001us9Wfau"
                    token={this.onToken}
                />
            </div>
        )
    }
}
