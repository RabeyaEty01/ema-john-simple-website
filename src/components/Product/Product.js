import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const Product = (props) => {

    const { name, img, seller,star, price, stock } = props.product;
    //console.log(props.product);
    const carticon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <div className="d-flex justify-content-between">
                <p className="text-start"><small>only {stock} left in stock - order soon</small></p>
               <p className="pe-5"><Rating 
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating></p>
                </div>
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)} className="btn-regular">
                    {carticon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;