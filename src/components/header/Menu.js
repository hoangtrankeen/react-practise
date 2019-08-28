import React from 'react';
import { Link } from "react-router-dom";

class Menu extends React.Component {

    render () {
        return (
            <div className="nav topmenu">
                <ul className="items nav">
                    <li className="item">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="item">
                        <Link to="/about/">About</Link>
                    </li>

                    <li className="item">
                        <Link to="/shop/">Shop</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;