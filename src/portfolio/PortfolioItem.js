import React, {
    Component
} from 'react';
// import './HomePage.scss';


class PortfolioItem extends Component {



    render() {
        return (
            <div className="portfolioItem">
                <img src={this.props.thumbnail} />
                <h5>{this.props.name}</h5>
            </div>
        );
    }
}

export default PortfolioItem;