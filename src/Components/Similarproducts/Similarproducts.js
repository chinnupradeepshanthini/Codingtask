import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product1 from "../../Assets/Product1.png";
import Product2 from "../../Assets/Product2.png";
import Product3 from "../../Assets/Product3.png";
import Product4 from "../../Assets/Product4.png";
import "../../Components/Similarproducts/Similarproducts.css";
import Multicolor from "../../Assets/Multicolor.png";

function Similarproduct() {

    return (
        <Container>
        <div className="sililar-product-overall">

            <h5 className="section-title">SIMILAR PRODUCTS</h5>

            <Row>
                <Col lg={3} md={6} sm={6} >
                    <div className="card-overall">
                    <p className="tag">NEW</p>
                        
                            <img src={Product2}></img>
                            <div className="card-content">
                            <div className="card-detail">
                                <div className="card-price">
                                    <p><b>₹1,299</b></p>
                                    <p><del>₹2,499</del></p>
                                    <div className="off">20% OFF</div>
                                </div>
                                <div className="colormulti">
                                <div>
                                <div style={{ color: "#5c5c5c", fontSize: "14px", fontWeight: "600" }}>Black Veirdo T-shirt</div>
                                <div className="visiters">
                                    <svg xmlns="" viewBox="0 0 24 24" width="20" height="20">
                                        <polygon points="12,2 18,10 12,18 6,10" fill="#ff841f" />
                                    </svg>
                                    <p>4.5 <spam className="like"> | 2k</spam></p>
                                </div>
                                </div>
                                <div className="multicolor">
                                    <div>
                                    <img src={Multicolor}></img>
                                    </div>
                                    <p>+2</p>
                                </div>
                            </div>
                            </div>
                            
                    </div>
                            <div class="addtocartbtn">
                                <Row>
                                    <Col md={8} sm={8} xs={8} className="card-cart-btn">
                                        <p>ADD TO CART</p>
                                    </Col>
                                    <Col md={4} sm={4} xs={4} className="card-wislist-btn">
                                        <div >
                                            <svg xmlns="" className="heart" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                        </div>
                                    </Col>
                                </Row>
                                <div>

                                </div>
                            </div>
                        </div>
                </Col>
                <Col lg={3}md={6} sm={6}>
                <div className="card-overall">
                    <p className="tag">NEW</p>
                        
                        <img src={Product3}></img>
                        <div className="card-content">
                        <div className="card-detail">
                            <div className="card-price">
                                <p><b>₹1,299</b></p>
                                <p><del>₹2,499</del></p>
                                <div className="off">20% OFF</div>
                            </div>
                            <div className="colormulti">
                                <div>
                                <div style={{ color: "#5c5c5c", fontSize: "14px", fontWeight: "600" }}>Black Veirdo T-shirt</div>
                                <div className="visiters">
                                    <svg xmlns="" viewBox="0 0 24 24" width="20" height="20">
                                        <polygon points="12,2 18,10 12,18 6,10" fill="#ff841f" />
                                    </svg>
                                    <p>4.5 <spam className="like"> | 2k</spam></p>
                                </div>
                                </div>
                                <div className="multicolor">
                                    <div>
                                    <img src={Multicolor}></img>
                                    </div>
                                    <p>+2</p>
                                </div>
                            </div>
                        </div>
                        
                </div>
                        <div class="addtocartbtn">
                            <Row>
                                <Col md={8} sm={8} xs={8}   className="card-cart-btn">
                                    <p>ADD TO CART</p>
                                </Col>
                                <Col md={4} sm={4} xs={4}   className="card-wislist-btn">
                                    <div >
                                        <svg xmlns="" className="heart" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                    </div>
                                </Col>
                            </Row>
                            <div>

                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6} >
                <div className="card-overall">
                <p className="tag">NEW</p>
                        <img src={Product4}></img>
                        <div className="card-content">
                        <div className="card-detail">
                            <div className="card-price">
                                <p><b>₹1,299</b></p>
                                <p><del>₹2,499</del></p>
                                <div className="off">20% OFF</div>
                            </div>
                            <div className="colormulti">
                                <div>
                                <div style={{ color: "#5c5c5c", fontSize: "14px", fontWeight: "600" }}>Black Veirdo T-shirt</div>
                                <div className="visiters">
                                    <svg xmlns="" viewBox="0 0 24 24" width="20" height="20">
                                        <polygon points="12,2 18,10 12,18 6,10" fill="#ff841f" />
                                    </svg>
                                    <p>4.5 <spam className="like"> | 2k</spam></p>
                                </div>
                                </div>
                                <div className="multicolor">
                                    <div>
                                    <img src={Multicolor}></img>
                                    </div>
                                    <p>+2</p>
                                </div>
                            </div>
                        </div>
                        
                </div>
                        <div class="addtocartbtn">
                            <Row>
                                <Col md={8} sm={8} xs={8}  className="card-cart-btn">
                                    <p>ADD TO CART</p>
                                </Col>
                                <Col md={4} sm={4} xs={4}   className="card-wislist-btn">
                                    <div >
                                        <svg xmlns="" className="heart" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                    </div>
                                </Col>
                            </Row>
                            <div>

                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                <div className="card-overall">
                <p className="tag">NEW</p>
                        
                        <img src={Product1}></img>
                        <div className="card-content">
                        <div className="card-detail">
                            <div className="card-price">
                                <p><b>₹1,299</b></p>
                                <p><del>₹2,499</del></p>
                                <div className="off">20% OFF</div>
                            </div>
                            <div className="colormulti">
                                <div>
                                <div style={{ color: "#5c5c5c", fontSize: "14px", fontWeight: "600" }}>Black Veirdo T-shirt</div>
                                <div className="visiters">
                                    <svg xmlns="" viewBox="0 0 24 24" width="20" height="20">
                                        <polygon points="12,2 18,10 12,18 6,10" fill="#ff841f" />
                                    </svg>
                                    <p>4.5 <spam className="like"> | 2k</spam></p>
                                </div>
                                </div>
                                <div className="multicolor">
                                    <div>
                                    <img src={Multicolor}></img>
                                    </div>
                                    <p>+2</p>
                                </div>
                            </div>
                        </div>
                        
                </div>
                        <div class="addtocartbtn">
                            <Row>
                                <Col md={8} sm={8} xs={8}   className="card-cart-btn">
                                    <p>ADD TO CART</p>
                                </Col>
                                <Col md={4} sm={4} xs={4}  className="card-wislist-btn">
                                    <div >
                                        <svg xmlns="" className="heart" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                    </div>
                                </Col>
                            </Row>
                            <div>

                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="Similearproductsrow">
                <Col lg={3} md={6} sm={6}>
                    <div className="card-overall">
                    <p className="tag">NEW</p>
                        
                            <img src={Product2}></img>
                            <div className="card-content">
                            <div className="card-detail">
                                <div className="card-price">
                                    <p><b>₹1,299</b></p>
                                    <p><del>₹2,499</del></p>
                                    <div className="off">20% OFF</div>
                                </div>
                                <div className="colormulti">
                                <div>
                                <div style={{ color: "#5c5c5c", fontSize: "14px", fontWeight: "600" }}>Black Veirdo T-shirt</div>
                                <div className="visiters">
                                    <svg xmlns="" viewBox="0 0 24 24" width="20" height="20">
                                        <polygon points="12,2 18,10 12,18 6,10" fill="#ff841f" />
                                    </svg>
                                    <p>4.5 <spam className="like"> | 2k</spam></p>
                                </div>
                                </div>
                                <div className="multicolor">
                                    <div>
                                    <img src={Multicolor}></img>
                                    </div>
                                    <p>+2</p>
                                </div>
                            </div>
                            </div>
                            
                    </div>
                            <div class="addtocartbtn">
                                <Row>
                                    <Col md={8} sm={8} xs={8}   className="card-cart-btn">
                                        <p>ADD TO CART</p>
                                    </Col>
                                    <Col md={4} sm={4} xs={4}   className="card-wislist-btn">
                                        <div >
                                            <svg xmlns="" className="heart" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                        </div>
                                    </Col>
                                </Row>
                                <div>

                                </div>
                            </div>
                        </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                <div className="card-overall">
                    <p className="tag">NEW</p>
                        
                        <img src={Product3}></img>
                        <div className="card-content">
                        <div className="card-detail">
                            <div className="card-price">
                                <p><b>₹1,299</b></p>
                                <p><del>₹2,499</del></p>
                                <div className="off">20% OFF</div>
                            </div>
                            <div className="colormulti">
                                <div>
                                <div style={{ color: "#5c5c5c", fontSize: "14px", fontWeight: "600" }}>Black Veirdo T-shirt</div>
                                <div className="visiters">
                                    <svg xmlns="" viewBox="0 0 24 24" width="20" height="20">
                                        <polygon points="12,2 18,10 12,18 6,10" fill="#ff841f" />
                                    </svg>
                                    <p>4.5 <spam className="like"> | 2k</spam></p>
                                </div>
                                </div>
                                <div className="multicolor">
                                    <div>
                                    <img src={Multicolor}></img>
                                    </div>
                                    <p>+2</p>
                                </div>
                            </div>
                        </div>
                        
                </div>
                        <div class="addtocartbtn">
                            <Row>
                                <Col md={8} sm={8} xs={8}   className="card-cart-btn">
                                    <p>ADD TO CART</p>
                                </Col>
                                <Col md={4} sm={4} xs={4}  className="card-wislist-btn">
                                    <div >
                                        <svg xmlns="" className="heart" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                    </div>
                                </Col>
                            </Row>
                            <div>

                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                <div className="card-overall">
                <p className="tag">NEW</p>
                        <img src={Product4}></img>
                        <div className="card-content">
                        <div className="card-detail">
                            <div className="card-price">
                                <p><b>₹1,299</b></p>
                                <p><del>₹2,499</del></p>
                                <div className="off">20% OFF</div>
                            </div>
                            <div className="colormulti">
                                <div>
                                <div style={{ color: "#5c5c5c", fontSize: "14px", fontWeight: "600" }}>Black Veirdo T-shirt</div>
                                <div className="visiters">
                                    <svg xmlns="" viewBox="0 0 24 24" width="20" height="20">
                                        <polygon points="12,2 18,10 12,18 6,10" fill="#ff841f" />
                                    </svg>
                                    <p>4.5 <spam className="like"> | 2k</spam></p>
                                </div>
                                </div>
                                <div className="multicolor">
                                    <div>
                                    <img src={Multicolor}></img>
                                    </div>
                                    <p>+2</p>
                                </div>
                            </div>
                        </div>
                        
                </div>
                        <div class="addtocartbtn">
                            <Row>
                                <Col md={8} sm={8} xs={8}   className="card-cart-btn">
                                    <p>ADD TO CART</p>
                                </Col>
                                <Col md={4} sm={4} xs={4}   className="card-wislist-btn">
                                    <div >
                                        <svg xmlns="" className="heart" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                    </div>
                                </Col>
                            </Row>
                            <div>

                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                <div className="card-overall">
                <p className="tag">NEW</p>
                        
                        <img src={Product1}></img>
                        <div className="card-content">
                        <div className="card-detail">
                            <div className="card-price">
                                <p><b>₹1,299</b></p>
                                <p><del>₹2,499</del></p>
                                <div className="off">20% OFF</div>
                            </div>
                            <div className="colormulti">
                                <div>
                                <div style={{ color: "#5c5c5c", fontSize: "14px", fontWeight: "600" }}>Black Veirdo T-shirt</div>
                                <div className="visiters">
                                    <svg xmlns="" viewBox="0 0 24 24" width="20" height="20">
                                        <polygon points="12,2 18,10 12,18 6,10" fill="#ff841f" />
                                    </svg>
                                    <p>4.5 <spam className="like"> | 2k</spam></p>
                                </div>
                                </div>
                                <div className="multicolor">
                                    <div>
                                    <img src={Multicolor}></img>
                                    </div>
                                    <p>+2</p>
                                </div>
                            </div>
                        </div>
                        
                </div>
                        <div class="addtocartbtn">
                            <Row>
                                <Col md={8} sm={8} xs={8}   className="card-cart-btn">
                                    <p>ADD TO CART</p>
                                </Col>
                                <Col md={4} sm={4} xs={4}   className="card-wislist-btn">
                                    <div >
                                        <svg xmlns="" className="heart" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                    </div>
                                </Col>
                            </Row>
                            <div>

                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div >
        </Container>
    )
}

export default Similarproduct;