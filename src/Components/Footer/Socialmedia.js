import React from "react";
import { Container, Row , Col} from "react-bootstrap";
import "../../Components/Footer/Footer.css";


function Socialmedia(){
    return(
        <div className="footer-bg">
            <div class="mobile-socialmedia">
            <table>
                <tr>
                    <td style={{borderTopLeftRadius:"5px !important"}}>INSTAGRAM</td>
                    <td style={{borderTopRightRadius:"5px !important"}}>TWITTER</td>
                </tr>
                <tr>
                    <td style={{borderBottomLeftRadius:"5px !important"}}>LINKEDIN</td>
                    <td style={{borderBottomRightRadius:"5px !important"}}>WHATSAPP</td>
                </tr>
            </table>
            </div>
        
             <div className="socialmedia">
            <Row className="media">
                <Col className="media-border" md={3}>
                    <p>INSTAGRAM</p>
                </Col>
                <Col className="media-border" md={3}>
                    <p>LINKEDIN</p>
                </Col>
                <Col className="media-border" md={3}>
                    <p>TWITTER</p>
                </Col>
                <Col className="media-border-whatsapp" md={3}>
                    <p>WHATSAPP</p>
                </Col>
            </Row>
        </div>
        
        </div>
    )
}


export default Socialmedia;