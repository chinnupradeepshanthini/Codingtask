import React from "react";
import Sliderimg1 from "../../Assets/Sliderimg1.jpg";
import Sliderimg2 from "../../Assets/Sliderimg2.jpg";
import Sliderimg3 from "../../Assets/Sliderimg3.jpg";

function Command() {
    return (
        <div className="command-over-all">
            <div className="command-rating">
                <div>
                    <div>shravya BR <svg xmlns="" className="sheld" viewBox="0 0 512 512"><path
                        d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.
                                    3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 
                                    16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg> <span style={{ color: "green" }}>verified buyer</span></div>
                    <div className="visiters">
                        <svg xmlns="" viewBox="0 0 24 24" width="20" height="20">
                            <polygon points="12,2 18,10 12,18 6,10" fill="#ff841f" />
                        </svg>
                        <h6>4<spam> | Powder Blue,Size L</spam></h6>
                    </div>
                </div>
                <div className="command-data">
                    <p>7months ago</p>
                </div>
            </div>
            <div className="commant-content">
                <p><b>Superb product</b> Great quality and nice design.Will buy more products from Veirdo</p>
                <div className="command-img">
                    <img src={Sliderimg1}></img>
                    <img src={Sliderimg2}></img>
                    <img src={Sliderimg3}></img>

                </div>
            </div>
        </div>
    )
}

export default Command;