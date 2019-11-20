import React, { Component } from 'react';
import '../styles/App.css';

import EventsSection from './EventsSection';
import AnnouncementsSection from './AnnouncementsSection';
import NextWeekSection from './NextWeekSection';
import TimeSection from './TimeSection';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div class="column">
                    <EventsSection/>
                </div>
                <div class="column">
                    <h1>Date</h1>
                    <TimeSection/>
                    <AnnouncementsSection/>
                    <NextWeekSection/>
                </div>
            </div>
        );
    }
}

export default App;
