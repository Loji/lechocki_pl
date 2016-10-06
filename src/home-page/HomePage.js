import React, { Component } from 'react';
import './HomePage.scss';

import uglyHTML from './home.js';

class HomePage extends Component {
    render() {
        // for future use, to change components
        return (
            <div dangerouslySetInnerHTML={{__html: uglyHTML}} />
        );
    } 
}

export default HomePage;