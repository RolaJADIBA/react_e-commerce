import React, { Component } from 'react'
import {detailProduit} from './data';
import { Link } from 'react-router-dom';


const ProduitContext = React.createContext(); 

class ProduitProvider extends Component {

    constructor(props){
        super(props);
        this.state = {
          produits:[],
          users:[],
          detailProduit: detailProduit,
          cart: [],
          modalProduit: detailProduit,
          modalOpen: false,
          cartSubTotal: 0,
          cartTax: 0,
          cartTotal: 0,
        }
      }
    
      componentDidMount(){
        const url = "http://e_commerce.test/api/produits/liste"
        return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
    
          this.setState({
            isLoading: false,
            produits: responseJson.produits,
            users: responseJson.users
          });
        })
          .catch((error) =>{
          console.error(error);
        });
      }
    
      setProduit = () =>{
        let temProduit = [];
        this.state.produits.forEach(item =>{
            const singleItem = { ...item };
            temProduit = [...temProduit , singleItem];
        });
        this.setState(() => {
            return { produits: temProduit };
        });
    };

    getItem = (id) => {
      const produit = this.state.produits.find(item => item.id === id);
      return produit;
    }

    handleDetail = (id) => {
      const produit = this.getItem(id);
      this.setState(()=>{
        return {detailProduit:produit}
      })
    }

    addToCart = (id) =>{
      let temProduits = [...this.state.produits];
      const index = temProduits.indexOf(this.getItem(id));
      const produit = temProduits[index];
      produit.inCart = true;
      produit.count = 1;
      const prix = produit.prix;
      produit.total = prix;
      this.setState(()=>{
          return{ produits: temProduits, cart: [...this.state.cart, produit] };
      },
      ()=>{
        this.addTotals();
      });
  };

    openModal = id => {
      const produit = this.getItem(id);
      this.setState(() => {
        return {modalProduit: produit, modalOpen: true}
      });
    }

    closeModal = () =>{
      this.setState(() => {
        return{ modalOpen : false}
       })
    }

    increment = id =>{

      let tempCart = [...this.state.cart];
      const selectedProduit = tempCart.find(item => item.id === id);
      const index = tempCart.indexOf(selectedProduit);
      const produit = tempCart[index];
      produit.count = produit.count + 1;
      produit.total = produit.count * produit.prix;

      this.setState(()=> {
        return { cart : [...tempCart]}
      },
        ()=>{
          this.addTotals();
        })
    }

    decrement = (id) =>{
      let tempCart = [...this.state.cart];
      const selectedProduit = tempCart.find(item => item.id === id);
      const index = tempCart.indexOf(selectedProduit);
      const produit = tempCart[index];
      produit.count = produit.count - 1;
      if(produit.count === 0){
         this.removeItem(id);
      }else{
        produit.total = produit.count * produit.prix;
        this.setState(()=>{
          return { cart : [...tempCart]}
        },
          () => {
            this.addTotals();
          }
          )
      }
    }

    removeItem = id =>{
      let tempProduits = [...this.state.produits];
      let tempCart = [...this.state.cart];

      tempCart = tempCart.filter(item => item.id !== id);
      const index = tempProduits.indexOf(this.getItem(id));
      let removeProduit = tempProduits[index];
      removeProduit.inCart = false;
      removeProduit.count = 0;
      removeProduit.total = 0;

      this.setState(() => {
        return { cart: [...tempCart],
                 produits: [...tempProduits]  }
      }, ()=>{
        this.addTotals();
      }
      );
    }

    clearCart = () =>{
      this.setState(() =>{
          return{ cart:[]};
      },() => {
          this.setProduit();
          this.addTotals();
      });
  }

  addTotals = () =>{
    let subTotal = 0;
    this.state.cart.map(item=> (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(()=>{
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      }
    })
  }


    render() {
        return (
            <ProduitContext.Provider 
            value={{...this.state,
                     handleDetail: this.handleDetail,
                     addToCart: this.addToCart,
                     openModal: this.openModal,
                     closeModal: this.closeModal,
                     increment: this.increment,
                     decrement: this.decrement,
                     removeItem: this.removeItem,
                     clearCart: this.clearCart,
                    //  newChangeEmail: this.newChangeEmail,
                    //  newChangePass: this.newChangePass,
                    }}
                >
                {this.props.children}
            </ProduitContext.Provider>
        )
    }
}

const ProduitConsumer = ProduitContext.Consumer;

export { ProduitProvider , ProduitConsumer};

