import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <Link to="/">
                    <img class="ml-3" src="../logo.png" height={100} alt="logo"/>
                  </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                <div className="nav-item dropdown">

                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Femme
                    </a>

            <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                <li className="dropdown-submenu">
                    <a tabindex="-1" href="#">Vêtements </a>
                    <ul className="dropdown-menu">
                    <li><a href="#">Robes</a></li>
                    <li><a href="#">T-shirts</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Monteaux & Vestes</a></li>
                    <li><a href="#">Pantalons</a></li>
                    <li><a href="#">Jupes</a></li>
                    <li><a href="#">Shorts</a></li>
                    <li><a href="#">Vêtements de plage</a></li>
                    </ul>
                </li>

                <li className="dropdown-submenu">
                    <a tabindex="-1" href="#">Chausseurs & Sacs</a>
                    <ul className="dropdown-menu">
                    <li><a href="#">Chausseurs</a></li>
                    <li><a href="#">Sacs</a></li>
                    </ul>
                </li>


                <li className="dropdown-submenu">
                    <a tabindex="-1" href="#">Accessoires</a>
                    <ul className="dropdown-menu">
                    <li><a href="#">Bijoux</a></li>
                    <li><a href="#">Lunettes de soliel</a></li>
                    </ul>
                </li>

            </ul>
            </div>


    <div class="nav-item dropdown">

        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Homme
        </a>

        <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
              <li class="dropdown-submenu">
                <a tabindex="-1" href="#">Vêtements</a>
                <ul class="dropdown-menu">
                  <li><a href="#">Chemises</a></li>
                  <li><a href="#">Pantalons</a></li>
                  <li><a href="#">T-shirts</a></li>
                  <li><a href="#">Shorts</a></li>
                  <li><a href="#">Polos</a></li>
                  <li><a href="#">Monteaux & Vestes</a></li>
                  <li><a href="#">Maillots de bain</a></li>
                </ul>
              </li>

              <li class="dropdown sub">
                <a tabindex="-1" href="#">Chausseurs & Sacs</a>
              </li>


              <li class="dropdown sub">
                <a tabindex="-1" href="#">Accessoires</a>
              </li>

          </ul>
        </div>

      <div className="nav-item dropdown">

        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Enfants
        </a>

        <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
              <li className="dropdown-submenu">
                <a tabindex="-1" href="">Ados</a>
                <ul className="dropdown-menu">
                  <li><a href="#">Fille(7-12 ans)</a></li>
                  <li><a href="#">Garçon(7-12 ans)</a></li>                  
                </ul>
              </li>

              <li className="dropdown-submenu">
                <a tabindex="-1" href="">Petits</a>
                <ul className="dropdown-menu">
                  <li><a href="#">Fille(1-6 ans)</a></li>
                  <li><a href="#">Garçon(1-6 ans)</a></li>
                </ul>
              </li>


              <li class="dropdown-submenu">
                <a tabindex="-1" href="">Bébé</a>
                <ul class="dropdown-menu">
                  <li><a href="#">bébé fille</a></li>
                  <li><a href="#">bébé garçon</a></li>
                </ul>
              </li>


          </ul>
        </div>

      <li class="nav-item">
        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">A propos</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</a>
      </li>
    </ul>

  </div>
  <Link to="/cart" className="ml-auto">
        <ButtonContainer>
            <span className="mr-2">
            <i className="fas fa-cart-plus " />
            </span>
            mon panier
        </ButtonContainer>
    </Link>

</nav>
         );
    }
}

