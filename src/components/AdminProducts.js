import React from 'react';
import Table from 'react-bootstrap/Table';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import AdminProductsList from './AdminProductsList';
const AdminProducts = ({FoodItem}) =>{

    return(
        
        <Router>
            <div className="cart-container">
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                        <th>Items</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody className="Cart-List">
                        
                        {FoodItem.map((items) => (
                        <AdminProductsList name={items.name} price={items.price} quantity={items.quantity} FoodItem={FoodItem} />
                          ))}
                         
                    </tbody>
                    </Table>

            </div>
            </Router>
            
           
    );
}

export default AdminProducts;