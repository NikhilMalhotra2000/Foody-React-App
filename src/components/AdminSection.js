import React from 'react';
import ProductDisplay from './ProductDisplay';
import AdminProducts from './AdminProducts';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';

const AdminSection = ({FoodItem,FoodItemsFunction}) =>{

    return(
        <div>
           <center> <h3><i>Products</i></h3></center>
        <Router>
        <AdminProducts FoodItem={FoodItem} />
        </Router>
        <Link to="/admin/addProduct"><button style={{marginLeft:"40%",border:"2px solid red"}}>Add Product</button></Link>
        <br></br><hr></hr>
        <hr></hr>
        <Link to="/admin/orders"><button style={{marginLeft:"40%",border:"2px solid red"}}>Check Orders!</button></Link>
        </div>
    );
}

export default AdminSection;