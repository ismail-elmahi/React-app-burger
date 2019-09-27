import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1760.4861452580587!2d-7.620203208556249!3d33.596085187205425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d284d7ccd05f%3A0xd0a597e123812ee5!2sHyatt+Regency+Casablanca!5e0!3m2!1sfr!2sma!4v1564779179832!5m2!1sfr!2sma" 
            width="100%" 
            height="500" 
            frameBorder="0"  
            allowFullScreen
            >
            </iframe>

            <div className="location_tag">
             <div>Location</div>
            </div>



        </div>
    );
};

export default Location;