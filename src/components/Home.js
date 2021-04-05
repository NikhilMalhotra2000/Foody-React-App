import React, { useState , useEffect, useCallback} from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import CarouselPage from './Carousel.js';
import ReactDOM from 'react-dom';
import ProductDisplay from './ProductDisplay.js';
import CartDisplay from './CartDisplay.js';
import MyOrdersDisplay from './MyOrdersDisplay.js';
import NavbarTop from './NavbarTop.js';
import Footer from './Footer';
import foodyBanner from './images/foodyBanner.jpg';
import ImageGallery from './ImageGallery.js';
import Image from 'react-bootstrap/Image';


function Home({FoodItem,CartItem,MyOrdersItem,CartItemsFunction}) {
    
    document.title="Foody: Home";

    const UserStyle = {
        backgroundColor: "white",
        minHeight: "92.5vh"
    }

   

    /*const [FoodItem , FoodItemsFunction] = useState([{name:"Chicken Biryani",price:"100"},{name:"Cheese Burger",price:"50"},{name:"Mutton Biryani",price:"120"}]);

    const [CartItem, CartItemsFuntion] = useState([{name:"Chicken Biryani",price:"100",quantity:"2"},{name:"Mutton Biryani",price:"120",quantity:"1"}]);


    const  [MyOrdersItem, MyOrderItemsFunction] = useState([{name:"Chicken Biryani",price:"100",quantity:"2"}]);
*/

    return(



    
            <div style={UserStyle}>
                    
                
                <CarouselPage />
                <Container>
                
                    <ProductDisplay FoodItem = {FoodItem} CartItem={CartItem} CartItemsFunction={CartItemsFunction}/>

                    {/*
                    <MyOrdersDisplay MyOrdersItem={MyOrdersItem} />
                    <CartDisplay CartItem={CartItem} />
                    */}
                    
                    
                </Container>

                <Image src={foodyBanner} fluid />

                <br></br><br></br><br></br>

                <ImageGallery />

                <Footer />
                
              </div>
            
    /*<div style={UserStyle}>
            <Router>
        
        <NavbarTop />
            
            <Route exact Path="/Cart" render={(props) => (<CartDisplay {...props} CartItem={CartItem} />)} /> 
        

            </Router>
        <CarouselPage />
        <Container>
        <button onClick={func}>Click Me!</button>
        <ProductDisplay FoodItem = {FoodItem}/>
        <p id ="para"></p>
        <CartDisplay CartItem={CartItem} />
        <br></br>
        <MyOrdersDisplay MyOrdersItem={MyOrdersItem} />



        </Container>
        
      </div>
      */
    );
}

export default Home;