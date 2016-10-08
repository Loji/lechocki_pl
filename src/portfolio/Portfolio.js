import React, {
    Component
} from 'react';
// import './HomePage.scss';
import {Request} from 'request';

import PortfolioItem from './PortfolioItem';

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
                console.log(body) // Show the HTML for the Google homepage.
                this.setState({
                    portfolioItems: JSON.parse(body),
                })

            }
        }.bind(this))
    }

    render() {
        return (
            <div>
                {this.state.portfolioItems.map((portfolioItem) => (
                    <PortfolioItem
                        name={portfolioItem.title}
                        thumbnail={portfolioItem.image}
                        />
                )) }


            </div>
        );
    }
}
// hardcoded api entrypoint url

export default Portfolio;