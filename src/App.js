import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import ShopItem from './components/shop/Item';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Router>
                <Header />
                <Route path="/" exact  component={Home} />
                <Route path="/about/" component={About} />
                <Route path="/shop/" exact component={Shop} />
                <Route path="/shop/item/:id" component={ShopItem} />
            </Router>
        );
    }
}

export default App;
