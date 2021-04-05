import React from 'react';
import Table from 'react-bootstrap/Table';
import AdminOrdersList from './AdminOrdersList.js';
const AdminOrdersDisplay = ({AdminOrders}) =>{

    document.title="Admin : Orders";


    return(

        <div className="cart-container">
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                        <th>Order Id</th>
                        <th>Items</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        </tr>
                    </thead>
                    <tbody className="Cart-List">
                        
                        {AdminOrders.map((items) => (
                        <AdminOrdersList name={items.name} price={items.price} quantity={items.quantity}/>
                          ))}
                         
                    </tbody>
                    </Table>
                    
            </div>
    );
}

export default AdminOrdersDisplay;