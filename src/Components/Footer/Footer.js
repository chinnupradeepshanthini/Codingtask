import React from "react";
import Subscribe from "./Subscribe";
import "../../Components/Footer/Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import Socialmedia from "./Socialmedia";


function Footer(){
    return(
        
        <div className="footer-bg">
            <Container>
            
            <div className="footer-menu">
                <Row>
                    <Col md={3}>
                        <h5>CATAGORY</h5>
                        <ul>
                            <li>NEW ARRIVALS</li>
                            <li>BESTSELLERS</li>
                            <li>WINTER-WEAR</li>
                            <li>T-SHIRTS</li>
                            <li>SHORTS</li>
                        </ul>
                    </Col>
                    <Col className="catagory" md={3}>
                        <ul>
                            <li>SWEATSHIRTS</li>
                            <li>TSHIRTS</li>
                            <li>VESTS</li>
                            <li>OVERSIZED T-SHIRTS</li>
                            <li>UNISEX</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>COMPANY</h5>
                        <ul>
                            <li>ABOUT US</li>
                            <li>BLOG</li>
                            <li>PRIVACY POLICY</li>
                            <li>TERMS & CONDITIONS</li>
                            <li>WORK WITH US</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>FOR CUSTOMERS</h5>
                        <ul>
                            <li>CONTACT US</li>
                            <li>FAQ'S</li>
                            <li>TRACK ORDER</li>
                            <li>RETURN POLICY</li>
                            <li>SHIPPING POLICYT</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="copyrights">
                <p>@2023 VEIRDO. All Rights Reserved by Pratyaya E-commerce Pvt.Ltd.</p>
            </div>
            </Container>
        </div>
        
    )
}


export default Footer;