import React, { Component } from 'react';
import Dotdotdot from 'react-dotdotdot';
import './EventTile.scss';

class EventTile extends Component {
    time = () => {
        if (this.props.now) {
            return (
                <Dotdotdot className="now" clamp={2}>
                    Now
                </Dotdotdot>
            );
        }  else {
            return (
                <Dotdotdot className="later" clamp={2}>
                    {this.props.time}
                </Dotdotdot>
            );
        }
    }
    render() {
        return (
            <div className="event-tile">
                <div className="title">
                    <Dotdotdot clamp={3}>
                        {this.props.title}
                    </Dotdotdot>
                </div>
                <div className="logo">
                    <img src={this.props.logo}/>
                </div>
                <div className="time">
                    <this.time></this.time>
                </div>
                <div className="location">
                    <Dotdotdot clamp={2}>
                        {this.props.location}
                    </Dotdotdot>
                </div>
            </div>
        )
    }
}

export default EventTile;