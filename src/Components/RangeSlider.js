import React from "react"

const RangeSlider = props => {
  const {min, max, onChange, value} = props;

  return (
    <div className="slider-container">
      <span className="slider-title"> Number of Persons: </span>
      <input className="range-input"
             value={value}
             type="range"
             min={min}
             max={max}
             onChange={event => onChange(event.target.value)}/>

      <span className="slider-value">{ value }</span>
    </div>)


}

// RangeSlider.propTypes = {
//   min: number.isRequired,
//   max: number.isRequired,
//   value: number.isRequired,
//   onChange: func.isRequired,
// }

export default RangeSlider