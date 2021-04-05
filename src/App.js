import Container from 'react-bootstrap/Container';
import React, { useState , useEffect, useCallback} from 'react';
import './App.css';
import NavbarTop from './components/NavbarTop.js'
import Login from './components/Login.js';
import Home from './components/Home.js';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import CartDisplay from './components/CartDisplay.js';
import MyOrdersDisplay from './components/MyOrdersDisplay';
import Signup from './components/Signup';
import AdminSection from './components/AdminSection';
import AddProduct from './components/AddProduct';
import AdminOrdersDisplay from './components/AdminOrdersDisplay.js';
import PostOrder from './components/PostOrder.js';
import CartDeleted from './components/CartDeleted.js';


function App() {
  document.title="Foody: Login";
  

  const [FoodItem , FoodItemsFunction] = useState([{name:"Chicken Biryani",price:"100",image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",quantity:"1"},{name:"Cheese Burger",price:"50",image:"https://simply-delicious-food.com/wp-content/uploads/2018/11/spicy-chicken-burgers-3.jpg",quantity:"50"},{name:"Mutton Biryani",price:"120",image:"https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg",quantity:"30"}]);

  const [CartItem, CartItemsFuntion] = useState([]);


  const  [MyOrdersItem, MyOrderItemsFunction] = useState([]);

  const [AdminOrders, AdminOrdersFunction] = useState([]);

  return (
    
    <Router>
        <NavbarTop/>
    
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home"  render={(props) => <Home {...props} FoodItem={FoodItem} CartItem={CartItem} MyOrdersItem={MyOrdersItem} CartItemsFuntion={CartItemsFuntion}/>} />
        <Route exact path="/cart" render={(props) => <CartDisplay {...props} CartItem={CartItem} MyOrdersItem={MyOrdersItem} AdminOrders={AdminOrders} />}  />  
        <Route exact path="/orders" render={(props) => <MyOrdersDisplay {...props} MyOrdersItem={MyOrdersItem} />} />  
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/admin" render={(props) => <AdminSection {...props} FoodItem={FoodItem} />}  /> 
        <Route exact path="/admin/addProduct" render={(props) => <AddProduct {...props} FoodItem={FoodItem}/>}  /> 
        <Route exact path="/admin/orders" render={(props) => <AdminOrdersDisplay {...props} AdminOrders={AdminOrders} />}  /> 
        <Route exact path="/saveOrder" component={PostOrder}  /> 
        <Route exact path="/cart/delete" component={CartDeleted} /> 
        </Switch>
    </div>

    </Router>

    
    /*<div className="App">
    <Router>
      <Switch>
        < Route Login="/" exact component={Login} />
         <Route path="/home" component={Home} />
        </Switch>
        
      </Router>
    </div>
    */
    
  );
}


export default App;
