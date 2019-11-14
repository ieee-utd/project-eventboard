import React, { Component } from 'react';
import '../styles/App.css';

import BoardSection from './BoardSection';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BoardSection/>
            </div>
        );
    }
}

export default App;
