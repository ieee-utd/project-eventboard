import React, { Component } from 'react';
import './Announcement.scss';

class Notification extends Component {
    render() {
        return (
            <div className="announcement">
                <div className="icon">!</div>
                <div className="text">{ this.props.children }</div>
            </div>
        )
    }
}

export default Notification;