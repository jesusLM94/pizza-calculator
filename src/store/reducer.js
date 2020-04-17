import {UPDATE_NUMBER_OF_PERSONS, UPDATE_NUMBER_OF_PIZZAS} from "./actions";

const initialState = {
  pizzas: 1,
  persons: 1,
}

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case UPDATE_NUMBER_OF_PERSONS:
      return {
        ...state,
        persons: payload
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