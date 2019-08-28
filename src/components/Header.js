import React from 'react';
import './header/style.css';
import Logo from './header/Logo';
import Menu from './header/Menu';

class Header extends React.Component {
    render () {
        return (
            <div className="header">
                <div className="header-container container clearfix">
                    <Logo />
                    <Menu />
                </div>
            </div>
        );
    }
}

export default Header;