import React from 'react';
import Description from './Description';
import Discount from './Discount'
import {Container} from 'react-bootstrap'
const Highlight = () => {
    return (
        <Container >      
        <div className="highlight_wrapper">
           <Description/> 
           <Discount/>
        </div>       
        </Container>
    );
};

export default Highlight;