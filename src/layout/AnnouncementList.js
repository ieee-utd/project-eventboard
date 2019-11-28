import React, { Component } from 'react';
import './AnnouncementList.scss';

class AnnouncementList extends Component {
    render() {
        return (
            <div id="announcement-list">
                { this.props.children }
            </div>
        );
    }
}

export default AnnouncementList;