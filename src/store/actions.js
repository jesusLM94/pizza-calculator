export const UPDATE_NUMBER_OF_PERSONS = "UPDATE_NUMBER_OF_PERSONS"
export const UPDATE_NUMBER_OF_PIZZAS = "UPDATE_NUMBER_OF_PIZZAS"

export const updateNumberOfPersons = persons => ({
  type: UPDATE_NUMBER_OF_PERSONS,
  payload: persons
})

export const updateNumberOfPizzas = pizzas => ({
  type: UPDATE_NUMBER_OF_PIZZAS,
  payload: pizzas
})