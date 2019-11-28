import * as moment from 'moment';

import React, { Component } from 'react';
import './Clock.scss';


class Clock extends Component {
    render() {
        const dateString = moment().format("ddd MMM DD");
        const timeString = moment().format("HH:mm:ss A"); 
        return (
            <div className="clock">
                <div className="date"> { dateString } </div>
                <div className="time"> { timeString } </div>
            </div>
        )
    }
}

export default Clock;