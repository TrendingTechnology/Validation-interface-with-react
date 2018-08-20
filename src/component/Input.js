import React from 'react';
import '../style/Input.css';

function Input(props) {
  return (
    <input
      className="input"
      type={props.type ? props.type : 'text'}
      id={props.id}
      name={props.id}
      placeholder={props.placeholder} 
    />
  );
}

export default Input;
