import React from 'react'
import RangeSlider from "./RangeSlider";
import DisplayResult from "./DisplayResult";
import {connect} from "react-redux";
import {getPeople, getPizzas} from "../store/selectors";
import {updateNumberOfPeople, updateNumberOfPizzas} from "../store/actions";

export const PizzaCalculator = props => {
  const {people, pizzas, updateNumberOfPeople, updateNumberOfPizzas} = props
  const pizzaImage = "https://cdn.pixabay.com/photo/2016/02/19/11/30/pizza-1209748_1280.jpg"

  React.useEffect(() => {
    updateNumberOfPizzas(Math.ceil(people / 3))
  }, [people])

  return (
    <React.Fragment>
      <RangeSlider min={1} max={15} value={people} onChange={updateNumberOfPeople}/>
      <h4 className="section-title"> Number of Pizzas </h4>
      <DisplayResult image={pizzaImage} result={pizzas} />
    </React.Fragment>
  )
}

export default connect(state => ({
    pizzas: getPizzas(state),
    people: getPeople(state),
  }),
  {
    updateNumberOfPeople,
    updateNumberOfPizzas,
  }
)(PizzaCalculator)