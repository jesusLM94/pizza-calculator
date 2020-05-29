export const UPDATE_NUMBER_OF_PEOPLE = "UPDATE_NUMBER_OF_PEOPLE"
export const UPDATE_NUMBER_OF_PIZZAS = "UPDATE_NUMBER_OF_PIZZAS"

export const updateNumberOfPeople = people => ({
  type: UPDATE_NUMBER_OF_PEOPLE,
  payload: people
})

export const updateNumberOfPizzas = pizzas => ({
  type: UPDATE_NUMBER_OF_PIZZAS,
  payload: pizzas
})