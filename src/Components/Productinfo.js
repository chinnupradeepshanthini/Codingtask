import React, { useState } from "react";
import "../App.css";

function Productinfo() {
    const[accordion1,setAccordion1]=useState(false);
    const[accordion2,setAccordion2]=useState(false);
    const[accordion3,setAccordion3]=useState(false);
    const[accordionicon1,setAccordionicon1]=useState(false);
    const[accordionicon2,setAccordionicon2]=useState(false);
    const[accordionicon3,setAccordionicon3]=useState(false);
    const accordionclick1=()=>{
       setAccordion1(true);
       if(accordion1===true){
        setAccordion1(false);
       }
       setAccordionicon1(true);
       if(accordionicon1===true){
        setAccordionicon1(false);
       }
    }
    const accordionclick2=()=>{
        setAccordion2(true);
        if(accordion2===true){
         setAccordion2(false);
        }
        setAccordionicon2(true);
        if(accordionicon2===true){
         setAccordionicon2(false);
        }
     }
     const accordionclick3=()=>{
        setAccordion3(true);
        if(accordion3===true){
         setAccordion3(false);
        }
        setAccordionicon3(true);
        if(accordionicon3===true){
         setAccordionicon3(false);
        }
     }

    return (
        <div className="productinfo">
            <div class="accordion-all">
            <div className="accordion" onClick={accordionclick1}>
                <div className="accordion-wrap" >
                    <div className="document">
                        <svg className="accordion-icon " xmlns="" viewBox="0 0 384 512"><path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" /></svg>
                        <div className="document-bg"></div>
                    </div>
                    <div className="accordion-content">
                        <h5>Product Discription</h5>
                        <p>Manufacture,Care and Fit</p>
                    </div>
                </div>
                <div className="accordion-icon">
                    <div className="vertical-line"  style={{ display: accordionicon1 ? 'none' : 'block' }}></div>
                    {/* <div className="vertical-line"></div> */}
                    <div className="horizontal-line"></div>
                </div>
            </div>
            <div className={`'accordion-ans' ${accordion1 ? "visible" : "hidden"}`} >
                <p>
                Crafted from 100% cotton, its distinctive black, white, and red contrast collar and cuff adds a touch of contemporary charm
                The T-shirt strikes the perfect balance between comfort and style. You can wear it for a casual brunch or a day outdoors too
                Match with chinos or denim, and complete the look with your favorite sneakers or loafers for an effortlessly chic appearance.
                </p>
            </div>

            </div>
            

            <div class="accordion-all">
            <div className="accordion" onClick={accordionclick2}>
                <div className="accordion-wrap" >
                    <div className="document">
                    <svg xmlns="" className="accordion-icon " viewBox="0 0 640 512"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                        <div className="shipping-bg"></div>
                    </div>
                    <div className="accordion-content">
                        <h5>Free Shipping</h5>
                        <p>We offer free shipping accross India</p>
                    </div>
                </div>
                <div className="accordion-icon">
                    <div className="vertical-line" style={{ display: accordionicon2 ? 'none' : 'block' }}></div>
                    <div className="horizontal-line"></div>
                </div>
            </div>
            <div className={`"chinnu" ${accordion2 ? 'visible' : 'hidden'}`}>
                <p>
                Crafted from 100% cotton, its distinctive black, white, and red contrast collar and cuff adds a touch of contemporary charm
                The T-shirt strikes the perfect balance between comfort and style. You can wear it for a casual brunch or a day outdoors too
                Match with chinos or denim, and complete the look with your favorite sneakers or loafers for an effortlessly chic appearance.
                </p>
            </div>

            </div>
            

            <div class="accordion-all">
            <div className="accordion" onClick={accordionclick3}>
                <div className="accordion-wrap" >
                    <div className="document">
                    <svg xmlns="" className="accordion-icon " viewBox="0 0 512 512"><path d="M174.7 45.1C192.2 17 223 0 256 0s63.8 17 81.3 45.1l38.6 61.7 27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L283 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4l17.5-28zM429.5 251.9c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L320 448v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2v32l96.2 0c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4zm-364.6-31L36 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17L182 241.2c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3L68.8 335.3c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32l32.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.2 0C42.7 448-.3 404.8 0 351.6c.1-17.8 5.1-35.1 14.6-50.2l50.3-80.5z"/></svg>
                        <div className="exchange-bg"></div>
                    </div>
                    <div className="accordion-content">
                        <h5>14 days Return and Exchange</h5>
                        <p>Know about Return and exchange Policy</p>
                    </div>
                </div>
                <div className="accordion-icon">
                    <div className="vertical-line" style={{ display: accordionicon3 ? 'none' : 'block' }}></div>
                    <div className="horizontal-line"></div>
                </div>
            </div>
            <div className={accordion3 ? "visible" : "hidden"} >
                <p>
                Crafted from 100% cotton, its distinctive black, white, and red contrast collar and cuff adds a touch of contemporary charm
                The T-shirt strikes the perfect balance between comfort and style. You can wear it for a casual brunch or a day outdoors too
                Match with chinos or denim, and complete the look with your favorite sneakers or loafers for an effortlessly chic appearance.
                </p>
            </div>

            </div>
            

        </div>
    )
}

export default Productinfo;