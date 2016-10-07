import React, {
    Component
} from 'react';
// import './HomePage.scss';


class PortfolioItem extends Component {

    render() {
        return ( 
            <div dangerouslySetInnerHTML={{ __html: 'I\'m a working route' }} />
        );
    }
}

export default PortfolioItem;