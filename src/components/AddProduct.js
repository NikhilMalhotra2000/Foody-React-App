import React from 'react';
import ProductDisplay from './ProductDisplay';
import AdminProducts from './AdminProducts';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';

const AddProduct = ({FoodItem}) =>{

    const FormStyle = {
        display:"block",
        margin:"100px",
        padding:"20px"
    }

    function addItem(){
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const quantity = document.getElementById("quantity").value;
        const url = document.getElementById("url").value;

        let item = {
            name:name,
            price:price,
            quantity:quantity,
            image:url
        }

        FoodItem.push(item);
        alert({name}+"added to Products");
        
    }


    return(
        <div>
        <center><h1>Add product</h1>
        
            <input type="text" placeholder="Product Name" id="name" className="input"></input><br></br><br></br>
            <input type="text" placeholder="Product Price" id="price" className="input"></input><br></br><br></br>
            <input type="text" placeholder="Product Quantity" id="quantity" className="input"></input><br></br><br></br>
            <input type="text" placeholder="Product Image URL" id="url" className="input"></input><br></br><br></br>
            <br></br>
            <button style={{border:"2px solid red",borderRadius:"5px"}} onClick={addItem}>Add Product</button>
            
        
        </center>
        </div>
    );
}

export default AddProduct;