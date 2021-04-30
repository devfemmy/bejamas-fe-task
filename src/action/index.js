import * as api from '../api';
import * as types from '../constants/action-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

/**
 * Receive all Products
 * @param { Array } products 
 */
export const receiveProducts = products => ( {
    type: types.RECEIVE_PRODUCTS,
    products
} );



/**
 * Get all Products
 */
export const getAllProducts = () => dispatch => {
    api.getProducts().then( products => {
        dispatch( receiveProducts( products ) );
        return products;
    } )
}

/**
 * Get a Product
 * @param { String } productId 
 */
export const getProduct = productId => ( {
    type: types.FETCH_SINGLE_PRODUCT,
    productId
} )





/****************** Cart Action *****************/

/**
 * Add to Cart
 * @param { Object } product
 * @param { Number } qty
 */
export const addToCart = ( product, qty = 1 ) => ( dispatch ) => {
    dispatch( { type: types.SHOW_CART_MODAL, product } );
    dispatch( { type: types.ADD_TO_CART, product, qty } );
}


/**
 * Clear Cart
 * @param { Object } product 
 */
export const clearCart = ( product ) => ( dispatch ) => {
    toast.error( "Cart Cleared" );
    dispatch( { type: types.CLEAR_CART, product } );
}



/**
 * Sort by
 * @param { String } sortBy 
 */
export const filterSort = ( sortBy ) => ( {
    type: types.SORT_BY,
    sortBy
} );

