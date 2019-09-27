import React from 'react';
import './resources/styles.css'; 
import {Element} from 'react-scroll';
import Header from './components/Header_Footer/Header';
import Featured from './components/Featured/index';
import VunueNfo from './components/VunueNfo/index';
import Highlight from './components/Highlights/index';
import Pricing from './components/Pricing/index';
import Location from './components/Location/index';
import Footer from './components/Header_Footer/Footer';

 
function App()  {
  
    return (
      <div className="App"> 
         <Header/>
         
         <Element name="Events_starts_in">
           <Featured/>
          </Element>

          <Element name="Venue_NFO">
          <VunueNfo/>
          </Element>

          <Element name="Hightlights">
          <Highlight/>
          </Element>

          <Element name="Parcing">
          <Pricing/>
          </Element>

          <Element name="Location">
         <Location/> 
          </Element>
          
         
         
         
         <Footer/>
      </div>
    );
  
}

export default App;
