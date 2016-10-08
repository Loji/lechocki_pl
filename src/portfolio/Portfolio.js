import React, {
    Component
} from 'react';
// import './HomePage.scss';

import PortfolioItem from './PortfolioItem';

class Portfolio extends Component {

    // componentDidMount() {
        
    // }

    render() {
        return ( 
            <div>
                <PortfolioItem 
                    name="test"
                    thumbnail="https://placehold.it/350x150"
                    />
            </div>
        );
    }
}

export default Portfolio;