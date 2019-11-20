import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class TimeSection extends Component {
    render() {
        return(
            <TimeAndDate/>
        )
    }
}

function TimeAndDate(){
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear(); 
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();

    let date = month +  "-" + day + "-" + year ;
    let time = hour + " : " + minute + " : " + second;

    return (
        <div>
            <h2>{date}</h2>
            <h2>{time}</h2>
        </div>
    );
}

export default TimeSection;