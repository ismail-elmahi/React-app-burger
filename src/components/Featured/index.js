import React from 'react';
import CarouselDemo from './Carousel'; 
import TimeUntil from './TimeUntil';

const Featured = () =>{
    return(
<div style={{position:'relative'}}>
   
   <CarouselDemo/>
   
    <div className="artist_name">
        <div className="wrapper">
          Ariana Grande
        </div>
    </div>
<TimeUntil/>
</div>
    );
};


export default Featured;