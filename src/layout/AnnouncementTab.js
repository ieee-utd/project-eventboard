import React, { Component } from 'react';
import Clock from '../components/Clock';
import './AnnouncementTab.scss';
import AnnouncementList from './AnnouncementList';
import Announcement from '../components/Announcement';
import EventTileTall from '../components/EventTileTall';
import EventTile from '../components/EventTile';

class AnnouncementTab extends Component {
    render() {
        return (
            <div id="announcement-tab">
                <Clock></Clock>
                <AnnouncementList>
                    <Announcement>
                        Hello
                    </Announcement>
                    <Announcement>
                        World
                    </Announcement>
                </AnnouncementList>
                <EventTileTall description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
                    <EventTile
                        title="Future event"
                        location="ABC"
                        time="2pm - 4pm"
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/200px-IEEE_logo.svg.png"
                    />
                </EventTileTall>
            </div>
        );
    }
}

export default AnnouncementTab;