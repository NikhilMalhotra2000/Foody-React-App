import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import './Login.css';
import Home from './Home.js';

const Login = ()=>(
    
    
      
    <div id="loginPage">
    
    <div id="lp">
          <div  className="login-form">
          <form >
            <h1>Login</h1>
    
            <div className="txtb">
              <input type="text" placeholder="Enter Email" id="user"/>
              
            </div>
    
            <div className="txtb">
              <input type="password"  placeholder="Enter Password"/>
              
            </div>
    
           <Link to="/home"><input type="submit" className="logbtn" value="Login" id="loginPageButton" /></Link> 
    
            <div className="bottom-text">
              Don't have account? <Link to='/signup' >Sign Up</Link>
            </div>
            
            
            </form>
          </div>
          
          </div>
          </div>
          
          
);

export default Login;