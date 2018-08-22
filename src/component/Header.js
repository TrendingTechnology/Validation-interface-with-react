import React from 'react';
import '../css/Header.css';

class Header extends React.Component{
    render() {
        return (
            <div className="titlewrap">
                <div className="title">
                    {props.title}
                </div>
                <div className="subtitle">
                    {props.subtitle}
                </div>
            </div>
        );
    }
}

export default Header;
