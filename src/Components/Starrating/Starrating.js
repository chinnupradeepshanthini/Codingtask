import React from "react";
import '../Starrating/Starrating.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Col, Row } from "react-bootstrap";

function Starrating() {
  
    return (
            <div className="starrating-all">
            <div class="radio-stars">
                <p className="viwers">84 Reviews</p>
                <input class="sr-only" id="radio-5" name="radio-star" type="radio" value="5" />
                <label checked="" class="radio-star" for="radio-5">5</label>
                <input class="sr-only" id="radio-4" name="radio-star" type="radio" value="4" />
                <label class="radio-star" for="radio-4">4</label>
                <input class="sr-only" id="radio-3" name="radio-star" type="radio" value="3" />
                <label class="radio-star" for="radio-3">3</label>
                <input class="sr-only" id="radio-2" name="radio-star" type="radio" value="2" />
                <label class="radio-star" for="radio-2">2</label>
                <input class="sr-only" id="radio-1" name="radio-star" type="radio" value="1" />
                <label class="radio-star" for="radio-1">1</label><span class="radio-star-total"></span>
            </div>
        </div>
        
    )
}

export default Starrating;