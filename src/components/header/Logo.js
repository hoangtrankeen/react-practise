import React from 'react';
import LogoImg from '../../image/logo.png';

class Logo extends React.Component {
    render () {
        return (
            <div className="logo">
                <img src={LogoImg} alt=""/>
            </div>
        );
    }
}

export default Logo;