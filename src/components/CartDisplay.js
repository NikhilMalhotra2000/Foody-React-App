import React from 'react';
import Table from 'react-bootstrap/Table';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Redirect } from 'react-router-dom';
import CartItemsList from './CartItemsList';
import Button from 'react-bootstrap/Button';
import ReactDOM from 'react-dom';
import './productDisplay.css';
import PostOrder from './PostOrder';
import Container from 'react-bootstrap/esm/Container';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

const CartDisplay = ({CartItem,MyOrdersItem,AdminOrders}) => {
    document.title="Foody: MyCart";
    const Divstyle = () =>{
        return(<p>abc</p>);
    }    
    function myfun(e){
        e.preventDefault();

        var l = CartItem.length;
        if(l==0){
            alert("Cart is Empty");
        }
        
        if(l!=0){
           
            for(var i=0;i<l;i++){
                let item = {
                    name:CartItem[i]["name"],
                    quantity:CartItem[i]["quantity"],
                    price:CartItem[i]["price"]
                }
                MyOrdersItem.push(item);
                AdminOrders.push(item);
            }
             CartItem.length = 0;
             ReactDOM.render(<PostOrder />,document.getElementById("para"));
             
     }

     
     
    }

    return(
        

        
            
            <div className="cart-container">
                <p id="para"></p>
                <div className="clear">
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                        <th>Items</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Delete Cart Item</th>
                        </tr>
                    </thead>
                    <tbody className="Cart-List">
                        
                        {CartItem.map((items) => (
                        <CartItemsList name={items.name} price={items.price} quantity={items.quantity} CartItem={CartItem}/>
                          ))}
                         
                    </tbody>
                    </Table>

                            <div className ="Place-Order-Button">
                                
                          <Link to="/saveOrder"> <button className="button-class" onClick={myfun}>Place Order !</button></Link>
                                
                            </div>

                            </div>

            </div>
            
            
           
          
            
    );
}

export default CartDisplay;