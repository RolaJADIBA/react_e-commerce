import React, { Component } from 'react';
import {ProduitConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {

    render() {
        return (
            <ProduitConsumer>
                {value => {
                    const {id, nom, prix, image_choisi, description, inCart} = value.detailProduit;
                    return(
                        <div className="container">
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={"img_choisi/" + image_choisi } className="img-fluid" alt="produit" />
                                </div>
                            {/* produit text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2 className="text-muted mt-3">{nom}</h2>
                                    <h4 className="mt-5">
                                        <strong>
                                            prix : <span>$</span>{prix}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-5 mb-0">
                                        quelques informations sur le produit:
                                    </p>
                                    <p className="text-muted lead mt-3">{description.replace(/(<([^>]+)>)/ig, '')}</p>
                                    <div className="mt-5">
                                        <Link to="/">
                                            <ButtonContainer>
                                                retour aux produits
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inCart?true:false} onClick={() =>{value.addToCart(id);
                                                                                                            value.openModal(); }}
                                        >
                                            {inCart ? "dans panier" : "ajout au panier"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProduitConsumer>
        )
    }
}
