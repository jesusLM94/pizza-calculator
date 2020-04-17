import React from "react";
import {number, func} from "prop-types"


const RangeSlider = props => {
  const {min, max, onChange, value} = props;

  return (
    <React.Fragment>
      <input className="range-input"
             value={value}
             type="range"
             min={min}
             max={max}
             onChange={event => onChange(event.target.value)}/>
    </React.Fragment>)


}

RangeSlider.propTypes = {
  min: number.isRequired,
  max: number.isRequired,
  value: number.isRequired,
  onChange: func.isRequired,
}

export default RangeSlider