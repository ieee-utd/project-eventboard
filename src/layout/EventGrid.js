import React, { Component } from 'react';
import EventTile from '../components/EventTile';


import './EventGrid.scss';

class EventGrid extends Component {
    render() {
        return (
            <div id="event-grid">
                <div className="inner">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default EventGrid;