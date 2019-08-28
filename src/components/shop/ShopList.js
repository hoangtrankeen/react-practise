import React, { Component } from "react";
import Loading from '../../hoc/Loading'
import {Link} from "react-router-dom";

class ShopList extends Component {
    render() {
        return (
            <div className="row">
                {this.props.items.map(item => (
                    <div className="col-md-4" key={item.itemId}>
                        <div className="card mb-2 mt-2 ">
                            <div className="card-body text-center">
                                <Link to={`/shop/item/${item.itemId}`} >
                                    <h3 className="product-name">{item.item.name}</h3>
                                    <img src={item.item.images.icon} alt={item.item.name} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Loading("items")(ShopList);