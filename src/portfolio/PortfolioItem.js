import React, {
    Component
} from 'react';
// import './HomePage.scss';


class PortfolioItem extends Component {



    render() {
        return (
            <div>
                <img src="{this.props.thumbnail}" />
                <h5>{this.props.name}</h5>

            </div>
        );
    }
}
//https://arkakodera.pl/wp-json/wp/v2/posts
export default PortfolioItem;