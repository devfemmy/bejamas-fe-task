import { combineReducers } from 'redux';
import cartReducer from './cart';
import productReducer from './product';
import wishReducer from './wishlist';
import filtersReducer from './filter';

const rootReducer = combineReducers( {
    cartList: cartReducer,
    data: productReducer,
    wishlist: wishReducer,
    filter: filtersReducer
} );

export default rootReducer;