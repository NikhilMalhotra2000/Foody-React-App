import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit,faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
const AdminProductsList = ({name,price,quantity,FoodItem}) => {

    function deleteItem(e){
        e.preventDefault();
        const index = FoodItem.findIndex(x => x.name === name);
        FoodItem.splice(index,1);
        if (window.confirm("Item Deleted")) {
            const txt = "canceled";
            <Link to="/admin"> OK </Link>
          } else {
            const txt = "cancel";
          }
    }

    return(
        
        
                        <tr>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>
                        <td> &nbsp; &nbsp;
                        <FontAwesomeIcon icon={faTrashAlt} className="FontAwesomeIcon" onClick={deleteItem}/>
                        <p id="para"></p>
                        </td>
                        
                        </tr>
                        
    );
}

export default AdminProductsList;