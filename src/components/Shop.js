import React from 'react';
import ShopList from "./shop/ShopList"

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: []
        };
    }

    componentDidMount() {
         fetch("https://fortnite-api.theapinetwork.com/upcoming/get?authorization=33d32a30a9aab66ac78644bb4cc80652")
            .then(res => res.json())
            .then(
                (items) => {
                    this.setState({
                        items: items.data
                    });

                    console.log(items.data);
                },
                (error) => {
                    this.setState({
                        error: true,
                        items: []
                    });
                }
            )
    }

    renderList = () => {
        const {error, items} = this.state;
        if(error) {
            return (
                <div className="main-content">Error!!</div>
            )
        } else {
            return (
                <div className="container">
                    <ShopList items={this.state.items} />
                </div>
            );
        }
    }

    render() {
       return (
           this.renderList()
       )
    }
}

export default Shop;