import React, {Component} from 'react';
import '../css/Select.css';

class Select extends Component{
  render() {
    const options = [<option value="" disabled selected >{this.props.placeholder}</option>];
    for (let i = this.props.start; i <= this.props.end; i++) {
      options.push(<option value={i}>{i}</option>);
    }

    return (
        <select required
                className="option-select"
                id={this.props.id}
                name={this.props.id}
        >
            {options}
        </select>
    );
  }
}

export default Select;
