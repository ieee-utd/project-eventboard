import React, { Component } from 'react';
import './EventTileTall.scss';
import EventTile from './EventTile';
import Dotdotdot from 'react-dotdotdot';

class EventTileTall extends Component {
    render() {
        return (
            <div className="event-tile-tall">
                {this.props.children}
                <div className="description">
                    <Dotdotdot clamp={6}>
                        {this.props.description}
                    </Dotdotdot>
                </div>
            </div>
        )
    }
}

export default EventTileTall;