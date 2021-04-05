import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
const PostOrder = () =>{

  document.title = "Order Placed";
    return(
            <Router>
<div className="jumbotron text-center">
    <h1 class="display-3">Your order has been placed.</h1>
    <p class="lead"><strong>Thank You!</strong> Sit back, relax . We got your order.</p>
    <hr/>
    <p>
      Check out our latest stuff.
    </p>
    <p class="lead">
      <h2>FOODY</h2>
    </p>
  </div>
  </Router>
        
    );
}

export default PostOrder;