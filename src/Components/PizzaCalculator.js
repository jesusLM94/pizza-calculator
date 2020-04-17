import React from 'react'
import RangeSlider from "./rangeSlider";

export const PizzaCalculator = () => {
  return (
    <RangeSlider min={1} max={10} value={2} onChange={() => {}}/>
  )
}

export default PizzaCalculator