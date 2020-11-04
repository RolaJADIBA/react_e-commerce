import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

export default class Home extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         login: false,
    //     }
    //     this.logout = this.logout.bind(this);
    // }

    // componentWillUnmount(){
    //     if(sessionStorage.getItem("userData")){
    //         console.log("Call user feed")
    //     }else{
    //         this.setState({login: true});
    //     }
    // }

    // logout(){
    //     sessionStorage.setItem("userData","");
    //     sessionStorage.clear();
    //     this.setState({login: true});
    //     // this.props.history.push('/logout');
    // }

    render() {

        // if(this.state.login){
        //     return(<Redirect to= {'/login'} />)
        // }
        // const {prenom} = this.props.match.params;

        return (
            <div class="container-fluid">
                <div className="row justify-content-center">
                    <Link to="/">
        <h3 className="text-bleu mb-5">Voulez vous voir tout nos produits?{this.props.prenom}</h3>
                    </Link>
                </div>
                <div class="image">
                </div>
                {/* <div className="row justify-content-center mt-5">
                    
                    <h1>Home Page : {prenom}</h1>
                    
                    <div>
                        <button type="button" className="btn btn-primary" onClick={this.logout}>Logout</button>
                    </div>
                </div>
 */}
            </div>
        )
    }
}

