import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>erreur</h1>
                        <h2>Page non trouvée</h2>
                        <h3>
                        L'URL demandée<span className="text-danger">{this.props.location.pathname}</span>{" "}n'a pas été trouvé
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}
