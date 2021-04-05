import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit,faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import CartDeleted from './CartDeleted';
import ReactDOM from 'react-dom';

const CartItemsList = ({name,price,quantity,CartItem}) => {

    function deleteItem(e){
        e.preventDefault();
        const index = CartItem.findIndex(x => x.name === name);
        CartItem.splice(index,1);
        ReactDOM.render(<CartDeleted />,document.getElementById("para"));
    }


    return(
        
                        
                        <tr className="para">
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>
                        <td>{price*quantity}</td>
                       <td> <FontAwesomeIcon icon={faTrashAlt} className="FontAwesomeIcon" onClick={deleteItem}/></td>
                        </tr>
       
    );
}

export default CartItemsList;