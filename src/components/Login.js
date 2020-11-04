import React, { Component } from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';


export default class Login extends Component {

    // constructor(){
    //     super();
    //     this.state = {
    //         login: false,
    //     }
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    state = {}

    handleSubmit = e =>{
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password,
        }
        axios.post('http://e_commerce.test/api/login', data)
            .then(res =>{
                    localStorage.setItem('token', res.data.token);
                    this.setState({login:true});
                    this.props.setUser(res.data.user)
                    // this.props.history.push('/nav/' + data.prenom);
                })
            .catch(err => {
                console.log(err);
                this.setState({err: 'Authentication Faild'})
            })
    };

    render() {

        if(this.state.login){
            return(<Redirect to={"/home"} />)
        }

        return (
            <div className="container">
            <div className="row justify-content-center mt-5">
                <form className="shadow p-5 mt-5 login" onSubmit={this.handleSubmit}>
                    <img src={"avatar1.png"} className="avatar" alt="avatar"/>
                    <div className="form-group mt-5">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" placeholder="Email"
                          name="email" onChange={e => this.email = e.target.value} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" placeholder="Password"
                          name="password" onChange={e => this.password = e.target.value} />
                    </div>
                    <button className="btn btn-block loginBtn">Submit</button>
                    <div className="text-left text-danger mt-3">
                        { (this.state.err != null) ?<p>{this.state.err}</p>  : null }
                    </div>
                    <p className="mt-5">vous n'avez pas de compte?
                        <Link to="/register">
                            <span className="text-danger">Inscrire</span>
                        </Link>
                    </p>

                </form>
            </div>
        </div>

        )
    }
}
