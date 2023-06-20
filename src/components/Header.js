import React from "react";
import logo from '../items/logo.png';
import '../style/header-style.css';
import world from "../items/world.png"
const Header = () =>{
   return(
    <>
      <div className="nav">
          <div>
             <img src={logo} alt="Airbnb Logo" className="logo"></img>
          </div>
          <div className="nav-1" >
             <p className="nav-1-items">Nearby </p>
             <p>|</p>
             <p className="nav-1-items">Anytime </p>
             <p>|</p>
             <p className="nav-1-items">Addguests</p>
             <h2></h2> 
          </div>
          <div className="nav-2">
            <p className="nav-2-items">Airbnb your home</p>
            <img src={world}  className="world"></img>
          </div>
      </div>
    </>
   )
}
export default Header;