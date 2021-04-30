import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import {  clearCart } from '../../../action'
import { getCartTotal, getQtyTotal } from '../../../utils';


function CartMenu ( props ) {
    const { btnClass = "btn-outline-dark", cartItems } = props;
    const clearCartNow = ( e ) => {
        e.preventDefault();

        if ( props.cartItems.length > 0 )
            props.clearCart();
    }


    return (
        <div className="dropdown cart-dropdown">
            <div className="dropdown-toggle">
                <i style= {{color: '#000000'}} className="fa fa-shopping-cart"></i>
                <span style= {{borderRadius: '0px', backgroundColor: '#000000', top: '28px', right: '-5px'}} className="cart-count badge-circle">{ getQtyTotal( cartItems ) }</span>
            </div>

            <div className="dropdown-menu">
                <div className="dropdownmenu-wrapper">

                    <div className="dropdown-cart-products">
                        {
                            cartItems.map( ( item, index ) => (
                                <div className="product" key={ "product" + index }>
                                    <div className="product-details">
                                        <h2 className="product-title">
                                            <Link to={ `${process.env.PUBLIC_URL}/product-detail` }>{ item.name }</Link>
                                        </h2>
                                        <span className="cart-product-info">
                                            <span className="cart-product-qty">{ item.qty }</span>
                                                x ${ item.salePrice ? item.salePrice.toFixed( 2 ) : item.price.toFixed( 2 ) }
                                        </span>
                                    </div>
                                    <figure className="product-image-container">
                                        <Link to={'#'} className="product-image">
                                            <img src={ `${process.env.PUBLIC_URL}/${item.pictures[ 0 ]}` } alt="product" />
                                        </Link>
                                    </figure>
                                </div>
                            ) )
                        }
                    </div>
                    <div className="dropdown-cart-total">
                        <span>Total</span>
                        <span className="cart-total-price float-right">${ getCartTotal( cartItems ).toFixed( 2 ) }</span>
                    </div>
                    <div className="dropdown-cart-action">
                        <Link style= {{color: '#000000', fontWeight: 'bold', backgroundColor: 'white'}} onClick={ clearCartNow }  to="#" className={ "btn btn-block clear-btn " + btnClass }>CLEAR</Link>
                    </div>
                </div>
            </div>
        </div>
    );

}


function mapStateToProps ( state ) {
    return {
        cartItems: state.cartList.cart ? state.cartList.cart : []
    }
}

export default connect( mapStateToProps, {  clearCart } )( CartMenu );