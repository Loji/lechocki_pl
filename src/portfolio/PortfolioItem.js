import React, {
    Component
} from 'react';
// import './HomePage.scss';


var PortfolioItem = React.createClass({

    getInitialState: function() {
        return {
            clicked: false,
        }
    },

    handleClick: function(e) {
        this.setState({
            clicked: !this.state.clicked
        });
    },

    render: function() {
        return (
            <div className={ this.state.clicked ? 'active portfolioItem' : 'portfolioItem' }>
                <div className="photo" onClick={this.handleClick}>
                    <img src={this.props.thumbnail} />
                    <h5>{this.props.name}</h5>
                </div>
                <div className="description" dangerouslySetInnerHTML={{ __html: this.props.description }} />
            </div>
        );
    },
});

export default PortfolioItem;