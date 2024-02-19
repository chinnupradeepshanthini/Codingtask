import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product1 from "../Assets/Product1.png";
import Product2 from "../Assets/Product2.png";
import Product3 from "../Assets/Product3.png";
import Product4 from "../Assets/Product4.png";
import Discount from "../Assets/Discount.png";
import ProductSlick from "../Components/ProductSlick";
import Sizeselection from "./Sizeselection";
import Deliverydetail from "./Deliverydetail";
import Productinfo from "./Productinfo";
import Offer from "./Offer";
import Starrating from "./Starrating/Starrating";
import Progress from "./Starrating/Progress";
import Command from "./Starrating/Commant";
import Slider from "react-slick";
function Productdetail({ addtocartfun }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <section>
                <div class="mobil-product-detail">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                            <img src={Product1}></img>
                            </div>
                            <div>
                            <img src={Product2}></img>
                            </div>
                            <div>
                            <img src={Product3}></img>
                            </div>
                            <div>
                            <img src={Product4}></img>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div>
                <Container>
                    <Row>
                        <Col className="desktop-product-detail" md={6}>
                            <div className="product-detail">
                                <div>
                                    <img src={Product1}></img>
                                </div>
                                <div>
                                    <img src={Product2}></img>
                                </div>
                            </div>
                            <div className="product-detail">
                                <div>
                                    <img src={Product3}></img>
                                </div>
                                <div>
                                    <img src={Product4}></img>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="product-detail-all">

                                <div className="price">
                                    <h4>₹1,299</h4>
                                    <h4><del>₹2,499</del></h4>
                                    <div className="off">20% OFF</div>
                                </div>
                                <div>
                                    <div>Flower Printed Oversized Fit</div>
                                    <div className="visiters">
                                        <svg xmlns="" viewBox="0 0 24 24" width="20" height="20">
                                            <polygon points="12,2 18,10 12,18 6,10" fill="#ff841f" />
                                        </svg>
                                        <h6>4.5 <spam className="like"> | 2k</spam></h6>
                                    </div>
                                </div>
                                <Offer />
                                <ProductSlick />
                                <Sizeselection />
                                <div className="addtocart-btn" >
                                    <button className="addtocart" onClick={addtocartfun}>Add To Cart</button>
                                </div>
                                <Deliverydetail />
                                <Productinfo />
                                <div className="rating">
                                    <h5>CUSTOMER RATINGS AND REVIEWS</h5>
                                    <Row>
                                        <Col lg={6} md={6} sm={6}> <Starrating /></Col>
                                        <Col lg={6} md={6} sm={6}><Progress/></Col>
                                       
                                    </Row>
                                </div>
                                <Command />
                            </div>


                        </Col>

                    </Row>
                </Container>
                </div>
            </section >
        </>
    )

}

export default Productdetail;