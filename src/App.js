import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProduitsList from './components/ProduitsList';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal';
import Robe from './components/produit/femme/robe';
import Tshirt from './components/produit/femme/t-shirts';
import Blouse from './components/produit/femme/blouse';
import Monteau from './components/produit/femme/monteau';
import Pantalon from './components/produit/femme/pantalon';
import Jupe from './components/produit/femme/jupes';
import Short from './components/produit/femme/short';
import Plage from './components/produit/femme/plage';
import Chausseur from './components/produit/femme/chausseurs';
import Sac from './components/produit/femme/sac';
import Bijoux from './components/produit/femme/bijoux';
import Lunette from './components/produit/femme/Lunettes';
import Chemise from './components/produit/homme/chemise';
import Pantalonh from './components/produit/homme/pantalonh';
import Tshirth from './components/produit/homme/t-shirt';
import Shorth from './components/produit/homme/short';
import Polo from './components/produit/homme/polo';
import Monteauh from './components/produit/homme/monteauh';
import Maillot from './components/produit/homme/maillot';
import ChausseurSac from './components/produit/homme/chausseurSac';
import Accessoire from './components/produit/homme/accessoires';
import AdosFille from './components/produit/enfant/adosFille';
import AdosGarçon from './components/produit/enfant/adosGarçon';
import PetitFille from './components/produit/enfant/petitFille';
import PetitGarçon from './components/produit/enfant/petitGarçon';
import BebeFille from './components/produit/enfant/bebeFille';
import BebeGarçon from './components/produit/enfant/bebeGarçon';
import Login from './components/Login';
import Register from './components/register';
import Home from './components/Home';

export default class App extends Component {

  render(){
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={ProduitsList}></Route>
        <Route  path={sessionStorage.getItem("userData") ? "/home/:prenom" : "/home"}  component={Home} ></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/robe" component={Robe}></Route>
        <Route path="/tshirt" component={Tshirt}></Route>
        <Route path="/blouse" component={Blouse}></Route>
        <Route path="/monteau" component={Monteau}></Route>
        <Route path="/pantalon" component={Pantalon}></Route>
        <Route path="/jupe" component={Jupe}></Route>
        <Route path="/short" component={Short}></Route>
        <Route path="/plage" component={Plage}></Route>
        <Route path="/chausseur" component={Chausseur}></Route>
        <Route path="/sac" component={Sac}></Route>
        <Route path="/bijoux" component={Bijoux}></Route>
        <Route path="/lunette" component={Lunette}></Route>
        <Route path="/chemise" component={Chemise}></Route>
        <Route path="/pantaloneh" component={Pantalonh}></Route>
        <Route path="/tshirth" component={Tshirth}></Route>
        <Route path="/shorth" component={Shorth}></Route>
        <Route path="/polo" component={Polo}></Route>
        <Route path="/monteauh" component={Monteauh}></Route>
        <Route path="/maillot" component={Maillot}></Route>
        <Route path="/chausseurSac" component={ChausseurSac}></Route>
        <Route path="/accessoire" component={Accessoire}></Route>
        <Route path="/adosfille" component={AdosFille}></Route>
        <Route path="/adosgarçon" component={AdosGarçon}></Route>
        <Route path="/petitFille" component={PetitFille}></Route>
        <Route path="/petitGarçon" component={PetitGarçon}></Route>
        <Route path="/bebeFille" component={BebeFille}></Route>
        <Route path="/bebeGarçon" component={BebeGarçon}></Route>
        <Route path="/login" component={Login} ></Route>
        <Route path="/register" component={Register} ></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}
}

