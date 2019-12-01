import React, { Component } from 'react';
import EventTile from '../components/EventTile';
import EventTileWide from '../components/EventTileWide';
import EventGrid from './EventGrid';
import './EventTab.scss';

class EventTab extends Component {
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
                    <EventTile
                        title="Meeting Title Meeting Title Meeting Title Meeting Title"
                        location="Room 206"
                        time="7pm - 9pm"
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/200px-IEEE_logo.svg.png"
                    />
                    <EventTile
                        title="Meeting Title Meeting Title Meeting Title Meeting Title"
                        location="Room 206"
                        time="7pm - 9pm"
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/200px-IEEE_logo.svg.png"
                    />
                    <EventTile
                        title="Meeting Title Meeting Title Meeting Title Meeting Title"
                        location="Room 206"
                        time="7pm - 9pm"
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/200px-IEEE_logo.svg.png"
                    />
                    <EventTile
                        title="Meeting Title Meeting Title Meeting Title Meeting Title"
                        location="Room 206"
                        time="7pm - 9pm"
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/200px-IEEE_logo.svg.png"
                    />
                    <EventTile
                        title="Meeting Title Meeting Title Meeting Title Meeting Title"
                        location="Room 206"
                        time="7pm - 9pm"
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/200px-IEEE_logo.svg.png"
                    />
                    <EventTile
                        title="Meeting Title Meeting Title Meeting Title Meeting Title"
                        location="Room 206"
                        time="7pm - 9pm"
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/200px-IEEE_logo.svg.png"
                    />
                    <EventTile
                        title="Meeting Title Meeting Title Meeting Title Meeting Title"
                        location="Room 206"
                        time="7pm - 9pm"
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/200px-IEEE_logo.svg.png"
                    />
                    <EventTile
                        title="Meeting Title Meeting Title Meeting Title Meeting Title"
                        location="Room 206"
                        time="7pm - 9pm"
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/200px-IEEE_logo.svg.png"
                    />
                    <EventTile
                        title="Meeting Title Meeting Title Meeting Title Meeting Title"
                        location="Room 206"
                        time="7pm - 9pm"
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/200px-IEEE_logo.svg.png"
                    />
                    <EventTile
                        title="Meeting Title Meeting Title Meeting Title Meeting Title"
                        location="Room 206"
                        time="7pm - 9pm"
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/200px-IEEE_logo.svg.png"
                    />
                    <EventTile
                        title="Meeting Title Meeting Title Meeting Title Meeting Title"
                        location="Room 206"
                        time="7pm - 9pm"
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/200px-IEEE_logo.svg.png"
                    />
                </EventGrid>
            </div>
        );
    }
}

export default EventTab;