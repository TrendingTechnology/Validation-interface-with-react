import React from 'react';
import '../css/Input.css';

class Input extends React.Component{
  render() {
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
}

export default Input;
