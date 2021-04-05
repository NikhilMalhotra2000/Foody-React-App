import React from 'react';
import './productDisplay.css';
import Col from 'react-bootstrap/Col';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ProductItemsList = ({name,price,image,CartItem,quantity,CartItemsFunction}) => {
    function myFunction(e){
        e.preventDefault();
        const quant = prompt("Please Enter Quantity:");
        if(quant>quantity){
            alert(quantity +" remaining in stock. Please check later.");
        }
        else{
        let item = {
            name:name,
            quantity:quant,
            price:price
        }
        CartItem.push(item);
        quantity--;
        alert("Food added to Cart");
     }
    }

   /* const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([...todos,{text:inputText,completed:false, id:Math.random()}]);
        setInputText("");
    }
    */

    return(
        
        <div className="Food-Container">
        <div className="item">
            
           <div className="itemImage"><img src={image}></img></div> 
            <li className="List-Item">{name}</li>
            <span className="price">₹ {price}</span>
            <br></br>
            <div className="OrderButtons"><button className="iconButton" onClick={myFunction}><FontAwesomeIcon icon={faCartPlus} className="FontAwesomeIcon"/></button>
            &nbsp;&nbsp;
            <button className="trash-btn"><FontAwesomeIcon icon={faTrashAlt} className="FontAwesomeIcon" /></button></div>
            
        </div>
        </div>
        
    );
}

export default ProductItemsList;