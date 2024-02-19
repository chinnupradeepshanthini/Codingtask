import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress(){
    const five = 40;
    const four = 80;
    const three = 20;
    const two = 10;
    const one = 5;
    return(
        <div className="bar-all">
        <div className="bar">
            <p className="star-num">5</p>
            <ProgressBar className="greenbar" now={40}  visuallyHidden />
            <p className="view-count">(15)</p>
        </div>
        <div className="bar">
            <p className="star-num">4</p>
            <ProgressBar className="greenbar" now={80}  visuallyHidden />
            <p className="view-count">(34)</p>
        </div>
        <div className="bar">
            <p className="star-num">3</p>
            <ProgressBar className="greenbar" now={20}  visuallyHidden />
            <p className="view-count">(26)</p>
        </div>
        <div className="bar">
            <p className="star-num">2</p>
            <ProgressBar className="greenbar" now={10}  visuallyHidden />
            <p className="view-count">(5)</p>
        </div>
        <div className="bar">
            <p className="star-num">1</p>
            <ProgressBar className="greenbar" now={5}  visuallyHidden />
            
            <p className="view-count">(4)</p>
        </div>
        </div>
        
    )
}

export default Progress;