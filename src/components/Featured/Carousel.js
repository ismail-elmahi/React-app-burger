import React, {Component} from 'react';
import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

    class CarouselDemo extends Component {
        render() {
            return (

    <Carousel showStatus={false} infiniteLoop={true} showIndicators={false} speed={3000}  showArrows={false} showThumbs={false} autoPlay={true}>
       
                <div>
                    <img className="slide-img" src={slide_one}/>
                </div>
                <div>
                    <img className="slide-img"  src={slide_two} />
                     
                </div>
                <div>
                    <img className="slide-img"  src={slide_three} />  
                </div>

            </Carousel>
            )
        }
    }


    // const settings ={
    //     dots: false,
    //     infinite: true,
    //     autoplay:true,
    //     speed:500,
    //     responsive: [
    //         {
    //           breakpoint: 1024,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             infinite: true,
                
    //           }
    //         },
    //         {
    //           breakpoint: 600,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll:1,
                 
    //           }
    //         },
    //         {
    //           breakpoint: 480,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //           }
    //         }
    //       ]
    // }
   
    // return (
      
    //     // <Container >
    //     //     <Row >
    //     //     <Col >
    //     <div
    //     className="carrousel_wrapper"
    //     >
    //       <Slider {...settings}>
          
    //     <div>
    //         <div
    //         className='carrousel_image'
    //         // style={{
    //         //     height:`${window.innerHeight}px`,
    //         //     background:`url(${slide_one})`
    //         // }}
    //         >
    //             <img src={slide_one} />
    //         </div>

    //     </div>
    //     <div>
    //     <div
    //         className='carrousel_image'
    //         // style={{
    //         //     height:`${window.innerHeight}px`,
    //         //     background:`url(${slide_two})`
    //         // }}
    //         >
    //             <img src={slide_two} />
    //         </div>
    //     </div>
    //     <div>
    //     <div
    //         className='carrousel_image'
    //         // style={{
    //         //     height:`${window.innerHeight}px`,
    //         //     background:`url(${slide_three})`
    //         // }}
    //         >
    //             <img src={slide_three} />
    //         </div>
    //     </div>
       
    //       </Slider>

    //     </div>
    //     // </Col>
    //     // </Row>
    //     // </Container>
    // );


export default CarouselDemo;