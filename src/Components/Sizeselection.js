import React, { useState } from "react";
import "../App.css";
import Sizeguide from "./Sizeguide";



function Sizeselection() {
    const [size28, setSize28] = useState(false);
    const [size30, setSize30] = useState(false);
    const [size32, setSize32] = useState(false);
    const [size34, setSize34] = useState(false);
    const [size36, setSize36] = useState(false);
    const [size38, setSize38] = useState(false);
    const [size40, setSize40] = useState(false);
    const [size44, setSize44] = useState(false);

    const onClicksize1 = () => {
        setSize28(true);
        if (size28 == true) {
            setSize28(false)
        };
    }
    const onClicksize2 = () => {
        setSize30(true);
        if (size28 == true) {
            setSize30(false)
        };
    }
    const onClicksize3 = () => {
        setSize32(true);
        if (size32 == true) {
            setSize32(false)
        };
    }
    const onClicksize4 = () => {
        setSize34(true);
        if (size34 == true) {
            setSize34(false)
        };
    }
    const onClicksize5 = () => {
        setSize36(true);
        if (size36 == true) {
            setSize36(false)
        };
    }
    const onClicksize6 = () => {
        setSize38(true);
        if (size38 == true) {
            setSize38(false)
        };
    }
    const onClicksize7 = () => {
        setSize40(true);
        if (size40 == true) {
            setSize40(false)
        };
    }
    const onClicksize8 = () => {
        setSize44(true);
        if (size44 == true) {
            setSize44(false)
        }
    }
    const [sizeGuide, setSizeGuide] = useState(false);
    const [sizeGuideActive, setSizeGuideActive] = useState(false);
    const openSizeGuide = () => {
        setSizeGuide(true);
        if (sizeGuide === true) {
            setSizeGuide(false);
        };

    };


    return (
        <div className="sizeselection">
            <div className="size-title">
                <h5>SELECT SIZE</h5>
                <h6 onClick={openSizeGuide} className={`sizeguidetext ${sizeGuide ? "sizeguideactive" : ""}`}>SIZE GUIDE</h6>
            </div>
            {sizeGuide ? <Sizeguide /> : ""}


            <div className="sizeall">
                <div onClick={onClicksize1} className={size28 ? "sizeActive" : ""}>
                    <p>28</p>
                </div>
                <div onClick={onClicksize2} className={size30 ? "sizeActive" : ""}>
                    <p>30</p>
                </div>
                <div onClick={onClicksize3} className={size32 ? "sizeActive" : ""} >
                    <div className="stock-parent">
                        <p>32</p>
                        <p className="stock">2 left</p>
                    </div>
                </div>

                <div onClick={onClicksize5} className={size36 ? "sizeActive" : ""}>
                    <p>34</p>
                </div>
                <div onClick={onClicksize4} className='disablesize'>
                    <p><del className="disable">36</del></p>
                </div>
                <div onClick={onClicksize6} className={size38 ? "sizeActive" : ""}>
                    <p>38</p>
                </div>
                <div onClick={onClicksize7} className={size40 ? "sizeActive" : ""}>
                    <p>40</p>
                </div>
                <div onClick={onClicksize8} className={size44 ? "sizeActive" : ""}>
                    <p>42</p>
                </div>

            </div>

        </div>
    )
}

export default Sizeselection;