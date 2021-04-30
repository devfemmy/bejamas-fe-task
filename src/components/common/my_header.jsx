import React from 'react';
import logo from './images/logo.svg';
import Cart from './images/cart.svg';
import './my_header.css';
import CartMenu from './partials/cart-menu';

const MyHeader = (show) => {
    return (
        <div  style= {{margin: '0rem 4.6rem'}} className= "header-container">
            <img alt= "img"  src= {logo} className= "header-img" />
          
           
            <CartMenu>
            <img  alt= "img"   src= {Cart} className= "cart-header-img" />
            </CartMenu>

        </div>
    )
}

export default MyHeader;