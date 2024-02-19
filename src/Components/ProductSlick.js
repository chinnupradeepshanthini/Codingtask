import React, { useState } from "react";
import Slider from "react-slick";
import Sliderimg1 from "../Assets/Sliderimg1.jpg";
import Sliderimg2 from "../Assets/Sliderimg2.jpg";
import Sliderimg3 from "../Assets/Sliderimg3.jpg";
import Sliderimg4 from "../Assets/Sliderimg4.jpg";
import Sliderimg5 from "../Assets/Sliderimg5.jpg";
import Sliderimg6 from "../Assets/Sliderimg6.jpg";
import Sliderimg7 from "../Assets/Sliderimg7.jpg";
import Sliderimg8 from "../Assets/Sliderimg8.jpg";
import "../App.css";

function ProductSlick() {


    var settings = {

        infinite: false,
        speed: 500,
        slidesToShow: 4,
        autoplaySpeed: 3000,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);
    const [isActive7, setIsActive7] = useState(false);
    const [isActive8, setIsActive8] = useState(false);
    const [isActive9, setIsActive9] = useState(false);
    const [isActive10, setIsActive10] = useState(false);


    const Addactive = () => {
        setIsActive1(true);
        if (isActive1 == true) {
            setIsActive1(false);
        }
    }
    const Addactive2 = () => {
        setIsActive2(true);
        if (isActive2 == true) {
            setIsActive2(false);
        }
    }
    const Addactive3 = () => {
        setIsActive3(true);
        if (isActive3 == true) {
            setIsActive3(false);
        }
    }
    const Addactive4 = () => {
        setIsActive4(true);
        if (isActive4 == true) {
            setIsActive4(false);
        }
    }
    const Addactive5 = () => {
        setIsActive5(true);
        if (isActive5 == true) {
            setIsActive5(false);
        }
    }
    const Addactive6 = () => {
        setIsActive6(true);
        if (isActive6 == true) {
            setIsActive6(false);
        }
    }
    const Addactive7 = () => {
        setIsActive7(true);
        if (isActive7 == true) {
            setIsActive7(false);
        }
    }
    const Addactive8 = () => {
        setIsActive8(true);
        if (isActive8 == true) {
            setIsActive8(false);
        }
    }
    const Addactive9 = () => {
        setIsActive9(true);
        if (isActive9== true) {
            setIsActive9(false);
        }
    }
    const Addactive10 = () => {
        setIsActive10(true);
        if (isActive10 == true) {
            setIsActive10(false);
        }
    }
    return (
        <div className="color-beige">
        <h5>COLOR-BEIGE</h5>
        <div className="prodsliderall">
            <Slider {...settings}>
                <div className="prodslider">
                    <div className={isActive1 ? "active" : ""} onClick={Addactive}>
                        <img src={Sliderimg1}></img>
                    </div >
                </div>
                <div className="prodslider">
                    <div className={isActive2 ? "active" : ""} onClick={Addactive2}>
                        <img src={Sliderimg2}></img>
                    </div>
                </div>
               <div className="prodslider">
                    <div className={isActive3 ? "active" : ""} onClick={Addactive3}>
                        <img src={Sliderimg3}></img>
                    </div>
                </div>
                <div className="prodslider">
                    <div className={isActive4 ? "active" : ""} onClick={Addactive4}>
                        <img src={Sliderimg4}></img>
                    </div>
                </div>
                <div className="prodslider">
                    <div className={isActive5 ? "active" : ""} onClick={Addactive5}>
                        <img src={Sliderimg5}></img>
                    </div>
                </div>
                <div className="prodslider">
                    <div className={isActive6 ? "active" : ""} onClick={Addactive6}>
                        <img src={Sliderimg6}></img>
                    </div>
                </div>
                <div className="prodslider">
                    <div className={isActive7 ? "active" : ""} onClick={Addactive7}>
                        <img src={Sliderimg7}></img>
                    </div>
                </div>
                <div className="prodslider">
                    <div className={isActive8? "active" : ""} onClick={Addactive8}>
                        <img src={Sliderimg8}></img>
                    </div>
                </div>
                <div className="prodslider">
                    <div className={isActive9 ? "active" : ""} onClick={Addactive9}>
                        <img src={Sliderimg1}></img>
                    </div>
                </div>
                <div className="prodslider">
                    <div className={isActive10 ? "active" : ""} onClick={Addactive10}>
                        <img src={Sliderimg2}></img>
                    </div>
                </div>

            </Slider>
        </div>
        </div>
    );
}

export default ProductSlick;