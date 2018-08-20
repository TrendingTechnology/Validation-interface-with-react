import React from 'react';
import '../style/Select.css';

function Select(props) {
  const options = [<option value="" disabled selected >{props.placeholder}</option>];
  for (let i = props.start; i <= props.end; i++) {
    options.push(<option value={i}>{i}</option>);
  }

  return (
    <select required
      className="cust-select"
      id={props.id}
      name={props.id} 
    >
      {options}
    </select>
  );
}

export default Select;
