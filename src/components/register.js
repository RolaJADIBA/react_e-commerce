import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';


export default class register extends Component {

    constructor(){
        super();
        this.state = {
            gendre: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = e =>{

        e.preventDefault();
        const data = {
            prenom: this.prenom,
            nom: this.nom,
            email: this.email,
            password: this.password
        }

        axios.post('http://e_commerce.test/api/ajout/user',data).then(
            res => {
                this.setState({gendre:true})                     
            }
        ).catch(
            err => {
                this.setState({gendre:false})     
                console.log(err); 
            }
        )
    }

    render() {

        if(this.state.gendre){
            return(<Redirect to={"/login"} />)
        }


        return (
            <div className="container">
                <div className="row justify-content-center mt-5">
                <form className="shadow p-5 register" onSubmit={this.handleSubmit}>
                    <img src={"register.png"} className="registerImg" alt="register"/>
                    <div className="form-group mt-3">
                        <label htmlFor="prenom">Prenom</label>
                        <input type="text" name="prenom" className="form-control" 
                            onChange={e => this.prenom = e.target.value} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input type="text" name="nom" className="form-control" 
                            onChange={e => this.nom = e.target.value}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="email" className="form-control" 
                            onChange={e => this.email = e.target.value}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="form-control"
                            onChange={e => this.password = e.target.value} />
                    </div>
                    <button className="btn btn-primary btn btn-block loginBtn">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}
