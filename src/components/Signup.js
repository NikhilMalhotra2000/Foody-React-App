import React, { Component } from "react";
import './Signup.css';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
export default class SignUp extends Component {
    render() {
        return (
            <div className="formClass">
                <div className="foorm">
                <form >
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" placeholder="Phone." />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Address" />
                </div>

                <Link to="/home"><button type="submit" className="btn btn-primary btn-block">Sign Up</button></Link>
                <p className="forgot-password text-right">
                    Already registered <Link to="/login">sign in?</Link>
                </p>
                </form>
                </div>
            
            
            </div>
            

        );
    }
}