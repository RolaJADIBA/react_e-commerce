import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Navbar extends Component {

    handleLogOut = () =>{
      localStorage.clear();
      this.props.setUser(null);
  }

    render() {

        let buttons;

        if(this.props.user){
          buttons = (
            <li class="nav-item dropdown">
                <a id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Hi {this.props.user}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* <a class="dropdown-item" href="#">Logout</a> */}
                <Link to={"/login" }onClick={this.handleLogOut}>
                  <a className="dropdown-submenu text-danger">Logout</a>
                 </Link>
                </div>
            </li>
            )
            }else{
                buttons = (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/login"} className="nav-link">Connexion/S'inscrire</Link>
                    </li>
                </ul>
                )
            }

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <Link to="/home">
                    <img className="ml-3" src="../logo.png" height={100} alt="logo"/>
                  </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                <div className="nav-item dropdown">

                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Femme
                    </a>

            <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                <li className="dropdown-submenu">
                    <a tabindex="-1">Vêtements </a>
                    <ul className="dropdown-menu">
                      <Link to="/robe">
                        <li><a>Robes</a></li>
                      </Link>
                      <Link to="/tshirt">
                        <li><a>T-shirts</a></li>
                      </Link>
                      <Link to="/blouse">
                        <li><a>Blouses</a></li>
                      </Link>
                      <Link to="monteau">
                        <li><a>Monteaux & Vestes</a></li>
                      </Link>
                      <Link to="pantalon">
                        <li><a>Pantalons</a></li>
                      </Link>
                      <Link to="jupe">
                        <li><a>Jupes</a></li>
                      </Link>
                      <Link to="short">
                        <li><a>Shorts</a></li>
                      </Link>
                      <Link to="plage">
                        <li><a>Vêtements de plage</a></li>
                      </Link>
                    </ul>
                </li>

                <li className="dropdown-submenu">
                    <a tabindex="-1">Chausseurs & Sacs</a>
                    <ul className="dropdown-menu">
                      <Link to="/chausseur">
                        <li><a>Chausseurs</a></li>
                      </Link>
                      <Link to="/sac">
                        <li><a>Sacs</a></li>
                      </Link>
                    </ul>
                </li>


                <li className="dropdown-submenu">
                    <a tabindex="-1">Accessoires</a>
                    <ul className="dropdown-menu">
                      <Link to="/bijoux">
                        <li><a>Bijoux</a></li>
                      </Link>
                      <Link to="/lunette">
                        <li><a>Lunettes de soliel</a></li>
                      </Link>
                    </ul>
                </li>

            </ul>
            </div>


    <div className="nav-item dropdown">

        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Homme
        </a>

        <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
              <li class="dropdown-submenu">
                <a tabindex="-1">Vêtements</a>
                <ul class="dropdown-menu">
                  <Link to="/chemise">
                    <li><a>Chemises</a></li>
                  </Link>
                  <Link to="/pantaloneh">
                    <li><a>Pantalons</a></li>
                  </Link>
                  <Link to="/tshirth">
                    <li><a>T-shirts</a></li>
                  </Link>
                  <Link to="/shorth">
                    <li><a>Shorts</a></li>
                  </Link>
                  <Link to="/polo">
                    <li><a>Polos</a></li>
                  </Link>
                  <Link to="/monteauh">
                    <li><a>Monteaux & Vestes</a></li>
                  </Link>
                  <Link to="/maillot">
                    <li><a>Maillots de bain</a></li>
                  </Link>
                </ul>
              </li>

              <li class="dropdown sub">
                <Link to="/chausseurSac">
                  <a tabindex="-1">Chausseurs & Sacs</a>
                </Link>
              </li>


              <li class="dropdown sub">
                <Link to="/accessoire">
                  <a tabindex="-1" href="#">Accessoires</a>
                </Link>
              </li>

          </ul>
        </div>

      <div className="nav-item dropdown">

        <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Enfants
        </a>

        <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
              <li className="dropdown-submenu">
                <a tabindex="-1">Ados</a>
                <ul className="dropdown-menu">
                  <Link to="/adosfille">
                    <li><a >Fille (7-12 ans)</a></li>
                  </Link>
                  <Link to="/adosgarçon">
                    <li><a >Garçon (7-12 ans)</a></li>                  
                  </Link>
                </ul>
              </li>

              <li className="dropdown-submenu">
                <a tabindex="-1" href="">Petits</a>
                <ul className="dropdown-menu">
                  <Link>
                  </Link>
                  <Link to="/petitFille">
                    <li><a >Fille (1-6 ans)</a></li>
                  </Link>
                  <Link to="/petitGarçon">
                    <li><a >Garçon (1-6 ans)</a></li>
                  </Link>
                </ul>
              </li>


              <li className="dropdown-submenu">
                <a tabindex="-1" href="">Bébé</a>
                <ul className="dropdown-menu">
                  <Link to="/bebeFille">
                    <li><a>bébé fille</a></li>
                  </Link>
                  <Link to="/bebeGarçon">
                    <li><a>bébé garçon</a></li>
                  </Link>
                </ul>
              </li>


          </ul>
        </div>
      
      <Link to="/propos">
        <li className="nav-item">
          <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">A propos</a>
        </li>
      </Link>

      <Link to="/contact">
        <li className="nav-item">
          <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</a>
        </li>
      </Link>
    </ul>
  </div>

  {buttons}

  <Link to="/cart" className="ml-auto text-decoration-none">
        <a className="ml-auto nav-link text-muted">
            <span className="mr-2">
            <i className="fas fa-cart-plus" />
            </span>
            mon panier
        </a>
    </Link>

</nav>
         );
    }
}

