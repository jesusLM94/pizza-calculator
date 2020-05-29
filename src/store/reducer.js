import {UPDATE_NUMBER_OF_PEOPLE, UPDATE_NUMBER_OF_PIZZAS} from "./actions";

const initialState = {
  pizzas: 1,
  people: 1,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_NUMBER_OF_PEOPLE:
      return {
        ...state,
        people: payload
      }
    case UPDATE_NUMBER_OF_PIZZAS:
      return {
        ...state,
        pizzas: payload
      }
    default:
      return state
  }
}

export default reducer