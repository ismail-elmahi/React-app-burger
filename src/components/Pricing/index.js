import React, { Component } from 'react';
import Button from '../utilis/Buttons';
import Zoom from 'react-reveal/Zoom'


class Pricing extends Component {

    state={
        prices: [100,150,250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ',
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ',
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text '
        ],
        linkto: ['http://sales/B','http://sales/M','http://sales/S' ],
        delay: [500,0,500]
    }


    showBoxes = () => (
        this.state.prices.map((box,i) =>(
            <Zoom 
            key={i}
            delay={this.state.delay[i]}
            >
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                         <span>{this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                        {this.state.desc[i]}
                    </div>
                    <div className="pricing_buttons">
                        <Button 
                        text="Purchase"
                        bck="#ffa800"
                        color="#ffffff"
                        link={this.state.linkto[i]}
                        />
                    </div>
                </div>
            </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                       {this.showBoxes()}
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Pricing;