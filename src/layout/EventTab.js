import React, { Component } from 'react';
import EventTile from '../components/EventTile';
import EventTileWide from '../components/EventTileWide';
import EventGrid from './EventGrid';
import './EventTab.scss';

class EventTab extends Component {
    getEvents(){
        let events = require('../data/events.json');
        return events.map(event => {
            return (
              <EventTile 
                title={event.title}
                location={event.location}
                time={event.time}
                logo={event.logo}
              />
            );
          });
    }
    render() {
        return (
            <div id="event-tab">
                <EventGrid>
                    <EventTile
                        title="Meeting Title"
                        location="ECSS 2.123V"
                        now={true}
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/200px-IEEE_logo.svg.png"
                    />
                    <this.getEvents></this.getEvents>
                </EventGrid>
            </div>
        );
    }
}

export default EventTab;