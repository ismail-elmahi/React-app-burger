import React from 'react';
import Zoom from 'react-reveal/Zoom';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';
import {Container, Row, Col} from 'react-bootstrap'
const VunueNfo = () => {
    return (
        <div className="bck_black"> 
        <Container >
            
               <div className="vn_wrapper">
                   
                   <Row >
                       <Col>
                           <Zoom duration={500}>
                   <div className="vn_item">
                       <div className="vn_outer">
                           <div className="vn_inner">
                               <div className="vn_icon_square bck_red"></div>
                               <div 
                                className="vn_icon"
                                style={{
                                    background: `url(${icon_calendar})`
                                }}></div>

                                <div className="vn_title">
                                    Event Date & Time
                                </div>
                                <div className="vn_desc">
                                    7 August 2017 @10.00pm
                                </div>
                           </div>
                       </div>
                   </div>
                    </Zoom>
                   </Col>
                    <Col>
                        <Zoom duration={500} delay={500}>
                   <div className="vn_item">
                       <div className="vn_outer">
                           <div className="vn_inner">
                               <div className="vn_icon_square bck_yellow"></div>
                               <div 
                                className="vn_icon"
                                style={{
                                    background: `url(${icon_location})`
                                }}></div>

                                <div className="vn_title">
                                   Event Location
                                </div>
                                <div className="vn_desc">
                                    345 Speer Street Oakland, CA 97621
                                </div>
                           </div>
                       </div>
                   </div>
                   </Zoom>
                   </Col>
                   </Row>   
                   </div>
               
        </Container>
        </div>
    );
};

export default VunueNfo;