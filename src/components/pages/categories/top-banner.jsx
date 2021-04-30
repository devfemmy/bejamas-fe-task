import React, {useEffect, useState} from 'react';
import { getProducts } from '../../../api';
import { connect } from 'react-redux';
import Slider1 from '../../common/images/slider1.png';
import Slider2 from '../../common/images/slider2.png';
import Slider3 from '../../common/images/slider3.png';
import './top-banner.css';
import { addToCart } from '../../../action';

const TopBanner = (props) => {
    let { addToCart } = props;
    const [product, setFeaturedProd] = useState({})
    useEffect(
        () => {
            const getProduct = getProducts();
            getProduct.then(
                (res) => {
                    const Array = res;
                    const featuredProduct = Array.find(
                        (data) => {
                            return data.featured === true
                        }
                    )
                    setFeaturedProd(featuredProduct)
                }
            )
            .catch(
                err => {
                    console.log(err)
                }
            )
        }, []
    )

    return (
        <div>
            <div className= "d-flex justify-content-between align-items-center mt-3">
                <div>
                    <h6 className= "font-weight-bold">
                   {product.name}
                    </h6>
                </div>
                <div>
                    <button onClick={ () => addToCart( product, 1 ) } className= "btn btn-dark cart-btn">
                        ADD TO CART
                    </button>
                </div>
            </div>
            <div className= "mt-3">
                <img style={{width: '100%'}} src= {product.pictures} alt= "slider" />
            </div>
            <div className= "mt-4 row">
                <div className= "col-12 col-md-8 col-lg-8 lower-text">
                    <h6 className= "font-weight-bold">
                    About the {product.name}
                    </h6>
                    <p className= "text-secondary font-weight-bold">
                       {product.category}
                    </p>
                    <p>
                    So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder 

                    text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.
                    </p>
                </div>
                <div className= "col-12 col-md-4 col-lg-4">
                    <h6 className= "font-weight-bold text-right">
                        People also buy
                    </h6>
                    <div className= "d-flex justify-content-end">
                        <img style={{height: '100px', marginRight: '1rem'}} src= {Slider1} alt= "slider" />
                        <img style={{height: '100px', marginRight: '1rem'}} src= {Slider2}alt= "slider"/>
                        <img style={{height: '100px'}} src= {Slider3} alt= "slider" />
                    </div>
                    <div className= "mt-2 lower-details">
                        <h6 className= "font-weight-bold text-right">
                            Details
                        </h6>
                        <p>
                        Size: {product.dimension}
                        </p>
                        <p>
                        Size: 15 mb
                        </p>
                    </div>

                </div>
            </div>
            <hr />
        </div>
    )
}
const mapStateToProps = ( state, props ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, { addToCart } )( TopBanner );
