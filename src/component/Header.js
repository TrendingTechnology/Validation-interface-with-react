import React from 'react';
import '../css/Header.css';

class Header extends React.Component{
    render() {
        return (
            <div className="titlewrap">
                <div className="title">
                    {this.props.title}
                </div>
                <div className="subtitle">
                    {this.props.subtitle}
                </div>
            </div>
        );
    }
}

export default Header;
