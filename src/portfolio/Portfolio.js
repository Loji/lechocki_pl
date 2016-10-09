import React, {
    Component
} from 'react';
// import './HomePage.scss';
import {Request} from 'request';

import PortfolioItem from './PortfolioItem';

// styles 
import './Portfolio.scss';

class Portfolio extends Component {

    constructor(state) {
        super(state);

        this.state = {
            portfolioItems: [],
        }
    }

    componentDidMount() {
        let serverRequest = require('request');
        serverRequest('https://arkakodera.pl/posts/', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                this.setState({
                    portfolioItems: JSON.parse(body),
                })

            }
        }.bind(this))
    }

    render() {
        return (
            <div className="portfolio">
                {this.state.portfolioItems.map((portfolioItem, index) => (
                    <PortfolioItem
                        key={index}
                        name={portfolioItem.title}
                        thumbnail={portfolioItem.image}
                        description={portfolioItem.description}
                        />
                )) }


            </div>
        );
    }
}
// hardcoded api entrypoint url

export default Portfolio;