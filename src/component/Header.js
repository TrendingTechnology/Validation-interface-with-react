import React from 'react';
import '../css/Header.css';

function Header(props) {  
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

export default Header;
