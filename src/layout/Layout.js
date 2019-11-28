import React, { Component } from 'react';
import './Layout.scss';

import AnnouncementTab from './AnnouncementTab';
import EventTab from './EventTab';

class Layout extends Component {
    render() {
        return (
            <div id="main">
                <EventTab></EventTab>
                <AnnouncementTab></AnnouncementTab>
            </div>
        );
    }
}

export default Layout;