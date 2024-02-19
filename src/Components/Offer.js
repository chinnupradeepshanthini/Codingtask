import React from "react";
import Discount from "../Assets/Discount.png";
import Slider from "react-slick";

function Offer() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        arrows:false,
        slidesToScroll: 1
    };
    return (
        <div className="offer" >
            <h5>OFFERS</h5>
            <div className="slider-container">
                <Slider {...settings}>
                     <div className="offerall">
                    <div className="offerall">
                        <div className="offer1">
                            <div className="offer-box-all">
                                <div className="offer-box">
                                    <div>
                                        <img src={Discount} />
                                    </div>
                                    <div>
                                        <h4>Buy 2 tees at just ₹699</h4>
                                        <p>Add any 2 tees to the cart to avail</p>
                                    </div>
                                </div>
                                <div className="page-slider">
                                    <p>1/3</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                    <div>
                    <div className="offerall">
                        <div className="offer1">
                            <div className="offer-box-all">
                                <div className="offer-box">
                                    <div>
                                        <img src={Discount} />
                                    </div>
                                    <div>
                                        <h4>Buy 2 tees at just ₹699</h4>
                                        <p>Add any 2 tees to the cart to avail</p>
                                    </div>
                                </div>
                                <div className="page-slider">
                                    <p>2/3</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                    <div>
                    <div className="offerall">
                        <div className="offer1">
                            <div className="offer-box-all">
                                <div className="offer-box">
                                    <div>
                                        <img src={Discount} />
                                    </div>
                                    <div>
                                        <h4>Buy 2 tees at just ₹699</h4>
                                        <p>Add any 2 tees to the cart to avail</p>
                                    </div>
                                </div>
                                <div className="page-slider">
                                    <p>3/3</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                    
                </Slider>
            </div>
        </div>
       
    )
}

export default Offer;