import * as moment from 'moment';

import React, { Component } from 'react';
import './Clock.scss';


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    
    render() {
        const thisMoment = moment(this.state.date);
        const dateString = thisMoment.format("ddd MMM DD");
        const timeString = thisMoment.format("hh:mm:ss A"); 
        return (
            <div className="clock">
                <div className="date"> { dateString } </div>
                <div className="time"> { timeString } </div>
            </div>
        )
    }
}

export default Clock;