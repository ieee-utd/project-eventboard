import React, { Component } from 'react';
import './EventTileWide.scss';
import EventTile from './EventTile';
import Dotdotdot from 'react-dotdotdot';

class EventTileWide extends Component {
    render() {
        return (
            <div className="event-tile-wide">
                {this.props.children}
                <div className="description">
                    <Dotdotdot clamp={6} className="description-text">
                        {this.props.description}
                    </Dotdotdot>
                </div>
            </div>
        )
    }
}

export default EventTileWide;