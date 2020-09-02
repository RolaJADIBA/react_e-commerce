import React, { Component } from 'react';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';
import {  ProduitConsumer } from '../Context';

export default class Modal extends Component {
    render() {
        return (
            <ProduitConsumer>
                {(value) => {
                    const{modalOpen, closeModal} = value;
                    const {nom, image_choisi, prix} = value.modalProduit;
                    if(!modalOpen){
                        return null
                    }else{
                        return(
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <h5>item ajouté au panier</h5>
                                            <img src={"img_choisi/" + image_choisi } alt="produit" className="img-fluid"/>
                                            <h5>{nom}</h5>
                                            <h5 className="text-muted">prix : $ {prix}</h5>
                                            <Link to="/">
                                                <ButtonContainer onClick={()=>{closeModal()}}>
                                                    Boutique
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer cart onClick={()=> closeModal()}>
                                                    aller au panier
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                            )
                    }
                }}
            </ProduitConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal{
        background: var(--mainWhite);
    }
`
