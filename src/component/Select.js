import React from 'react';
import '../css/Select.css';

class Select extends React.Component{
  render() {
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
}

export default Select;
