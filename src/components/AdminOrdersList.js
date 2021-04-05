import { faUserInjured } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import uuid from 'react-uuid';


const AdminOrdersList = ({name,price,quantity}) =>{

    return(
        
            <tr>
            <td>{uuid()}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{price*quantity}</td>
            </tr>
        

    );
}

export default AdminOrdersList;