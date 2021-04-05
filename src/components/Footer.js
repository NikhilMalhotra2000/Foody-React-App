import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
      <footer>
    <MDBFooter  className="font-small pt-4 mt-4" style={{backgroundColor:"black",color:"white"}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h3 className="title">Foody</h3>
            <p>
              Order your favourite Food from FOODY.
              <br></br>
              Bon Appétit
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Quickly Navigate</h5>
            <ul>
              <li className="list-unstyled">
              <br />
                <a href="/home">Home   &nbsp;&nbsp;</a>
              </li>
              <br></br>
              <li className="list-unstyled">
              <br />
                <a href="/orders">Orders  &nbsp;&nbsp;</a>
              </li>
              <br></br>
              <li className="list-unstyled">
              <br />
                <a href="/cart">Cart  &nbsp;&nbsp;</a>
              </li>
              <br></br>
              <li className="list-unstyled">
              <br />
                <a href="/">Logout &nbsp;&nbsp;</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
       <span style={{justifyContent:"right"}}>Created By: Nikhil  </span>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/home"> Foody.com </a>
        </MDBContainer>
      </div>
      
    </MDBFooter>
    </footer>
  );
}

export default Footer;