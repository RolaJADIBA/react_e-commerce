import React, { Component } from 'react'
import Produit from '../../Produits';
import Title from '../../Title';
import {ProduitConsumer} from '../../../Context';

export default class ProduitsList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="p-5">
                    <div className="container">
                        <Title name="Nos" title="Robes"/>
                        <div className="row">
                            <ProduitConsumer>
                                {value =>{
                                    return value.produits.map( produit =>{
                                        if(produit.categorie === "Femme" && produit.options === "Blouses"){
                                        return <Produit key={produit.id} produit={produit}/>
                                        }
                                    })
                                }}
                            </ProduitConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    }
