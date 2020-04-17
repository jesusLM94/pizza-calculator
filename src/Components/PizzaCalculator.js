import React from 'react'
import RangeSlider from "./RangeSlider";
import DisplayResult from "./DisplayResult";
import {connect} from "react-redux";
import {getPersons, getPizzas} from "../store/selectors";
import {updateNumberOfPersons, updateNumberOfPizzas} from "../store/actions";

export const PizzaCalculator = props => {
  const {persons, pizzas, updateNumberOfPersons, updateNumberOfPizzas} = props
  const pizzaImage = "https://cdn.pixabay.com/photo/2016/02/19/11/30/pizza-1209748_1280.jpg"

  React.useEffect(() => {
    updateNumberOfPizzas(Math.ceil(persons / 2))
  }, [persons])

  return (
    <React.Fragment>
      <RangeSlider min={1} max={10} value={persons} onChange={updateNumberOfPersons}/>
      <DisplayResult image={pizzaImage} result={pizzas} />
    </React.Fragment>
  )
}

export default connect(state => ({
    pizzas: getPizzas(state),
    persons: getPersons(state),
  }),
  {
    updateNumberOfPersons,
    updateNumberOfPizzas,
  }
)(PizzaCalculator)