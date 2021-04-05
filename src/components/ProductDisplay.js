import React, { useState , useEffect, useCallback} from 'react';
import ReactDOM from 'react-dom';
import ProductItemsList from './ProductItemsList.js';
import './productDisplay.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ProductDisplay = ({FoodItem,CartItem,CartItemsFunction}) =>{

    function fun(){
        const length = CartItem.length;
        ReactDOM.render(length,document.getElementById("para"));
    }

    return(
        <Container>
            
            <p id="para"></p>
        
        
            
            <ul className="Food-list">
                
                {FoodItem.map((items) => (
                <ProductItemsList name={items.name} price={items.price} image={items.image} quantity={items.quantity} CartItem={CartItem} CartItemsFunction={CartItemsFunction}/> ))}                                                   
            </ul>
            
      
        
        </Container>
    );
}

export default ProductDisplay;