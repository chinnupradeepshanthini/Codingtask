import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Components/Footer/Footer.css";


function Subscribe() {
    return (
        <div className="footer-bg">
        <Container>
        <div className="Subscribe-overall">
            <Row>
                <Col md={6} sm={12} lg={6}>
                    <div className="subscription-text">
                        <h1>JOIN OUR VEIRDO FAM</h1>
                        <p>Here is the space for markrting bro's to use some combination of alphabets to convince to give their email</p>
                    </div>
                </Col>
                <Col md={6} sm={12} lg={6}>
                    <div className="subscribe-detail">
                        <div className="subscribe-input">
                            <input type="text" placeholder="veirdo@yahoo.com"></input>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        </Container>
       
        </div>
    )
}


export default Subscribe;