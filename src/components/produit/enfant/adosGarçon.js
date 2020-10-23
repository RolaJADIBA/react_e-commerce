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
                        <Title name="Nos" title="garcon (7-12)"/>
                        <div className="row">
                            <ProduitConsumer>
                                {value =>{
                                    return value.produits.map( produit =>{
                                        if(produit.categorie === "Enfant" && produit.options === "garcon(7-12)"){
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
