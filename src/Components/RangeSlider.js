import React from "react";
import {number, func} from "prop-types"


const RangeSlider = props => {
  const {min, max, onChange, value} = props;

  return (
    <div>
      <span> Number of Persons: </span>
      <input className="range-input"
             value={value}
             type="range"
             min={min}
             max={max}
             onChange={event => onChange(event.target.value)}/>

      <span>{ value }</span>
    </div>)


}

RangeSlider.propTypes = {
  min: number.isRequired,
  max: number.isRequired,
  value: number.isRequired,
  onChange: func.isRequired,
}

export default RangeSlider