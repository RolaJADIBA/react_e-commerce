import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-bright">produits</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-bright">nom du produit</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-bright">prix</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-bright">quantité</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-bright">supprime</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-bright">total</p>
                </div>
            </div>
        </div>
    )
}
