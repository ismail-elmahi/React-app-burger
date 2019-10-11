import React from 'react';
import {scroller} from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const SideDrawer = (props) => {


    const scrollToElement =(element) => {
        scroller.scrollTo(element,{
            duration: 1500,
            delay:100,
            smooth:true,
            offset:-150
        });
        props.onClose(false)
    } 

    return (
         <Drawer
         anchor="right"
         open={props.open}
         onClose={() => props.onClose(false)}
         >
        <List>
          <ListItem button onClick={() => scrollToElement('Events_starts_in')}>
              Events starts in
          </ListItem>

          <ListItem button onClick={() => scrollToElement('Venue_NFO')}>
              Venue NFO
          </ListItem>

          <ListItem button onClick={() => scrollToElement('Hightlights')}>
              Hightlights
          </ListItem>

          <ListItem button onClick={() => scrollToElement('Parcing')}>
              Parcing
          </ListItem>

          <ListItem button onClick={() => scrollToElement('Location')}>
              Location
          </ListItem>
 
        </List>
         </Drawer>
    );
};

export default SideDrawer;