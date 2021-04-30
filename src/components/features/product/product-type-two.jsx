import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addToCart } from '../../../action';

function ProductTypeTwo( props ) {
    let { addClass,  product, addToCart } = props;
 
  return (
      <>
        <div className={ `product-default ${ addClass }` }>
            <figure>
                <Link to={ `#` } >
                    <span>
                        <img src={ process.env.PUBLIC_URL + '/' + product.pictures[ 0 ] } className="first-image" alt="product" />
                    </span>
                </Link>

                <div className="label-group">
                    {
                       product.bestseller ?
                            <span style= {{backgroundColor: 'white', color: '#000'}} className="product-label label-sale">BEST SELLER</span>
                            : ""
                    }
                </div>

                <Link to="#" className="btn-quickview" title="Add to Cart" onClick={ () => addToCart( product, 1 ) }>ADD TO CART</Link>
            </figure>

            <div className="product-details">
                <div className="category-wrap">
                    <div className="category-list">
                        {
                            product.category.map( ( category, index ) => (
                                index === ( product.category.length - 1 ) ?
                                    <Link to="#" className="product-category" key={ "category" + index }>{ category }</Link>
                                    : <Link to="#"className="product-category" key={ "category" + index }>{ category }, </Link>
                            ) )
                        }
                    </div>
                </div>

                <h3 className="product-title">
                    <Link to="#">{ product.name }</Link>
                </h3>

   
                            <div className="price-box">
                                <span className="product-price">${ product.price.toFixed( 2 ) }</span>
                            </div>
                
            </div>
        </div>
    </>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, { addToCart } )( ProductTypeTwo );

