import React from 'react'

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title text-danger">
                    <h1>votre panier est actuellement vide</h1>
                    <img src={"emptycart.gif"} height={400} alt="emptycart"/>
                </div>
            </div>
        </div>
    )
}
