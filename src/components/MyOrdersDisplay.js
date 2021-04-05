import React from 'react';
import Table from 'react-bootstrap/Table';
import MyOrdersItemsList from './MyOrdersItemsList';
import Footer from './Footer.js';
const MyOrdersDisplay = ({MyOrdersItem}) => {
    document.title="Foody: MyOrders";

    

        return(
            

            <div className="cart-container">
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                        <th>Items</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        </tr>
                    </thead>
                    <tbody className="Cart-List">
                        
                        {MyOrdersItem.map((items) => (
                        <MyOrdersItemsList name={items.name} price={items.price} quantity={items.quantity}/>
                          ))}
                         
                    </tbody>
                    </Table>
                    
            </div>
            
        );
}

export default MyOrdersDisplay;