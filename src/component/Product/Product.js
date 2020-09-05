import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
   // console.log(props);
    const{img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div className="">
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
            <h3>{name}</h3>
            <br/>
            <p><small>by: {seller}</small></p>
            <p>$ {price}</p>
            <p><small>only {stock} left in stock - order soon</small></p>
            <button className="main-button"
                 onClick={() => props.handleAddProduct (props.product)}
                 >
                <FontAwesomeIcon icon={faShoppingCart} /> add to card</button>
            </div>
            
        </div>
    );
};

export default Product;